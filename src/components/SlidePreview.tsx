import { AnimatePresence, motion } from 'framer-motion';
import { FC, useCallback, useEffect, useState } from 'react';
import './SlidePreview.scss';

interface SlidePreviewProps {
  isOpen: boolean;
  currentImage: string;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelectImage: (index: number) => void;
}

interface ImageDimensions {
  width: number;
  height: number;
  aspectRatio: number;
}

const SlidePreview: FC<SlidePreviewProps> = ({
  isOpen,
  currentImage,
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  onSelectImage,
}) => {
  // Track slide direction
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  // Add image loading and dimension states
  const [imageLoading, setImageLoading] = useState(true);
  const [imageDimensions, setImageDimensions] = useState<ImageDimensions>({
    width: 0,
    height: 0,
    aspectRatio: 16 / 9, // Default aspect ratio
  });

  // Preload image to get dimensions when currentImage changes
  useEffect(() => {
    if (currentImage) {
      setImageLoading(true);

      const img = new Image();
      img.src = currentImage;

      img.onload = () => {
        const width = img.naturalWidth;

        const height = img.naturalHeight;
        const aspectRatio = width / height;

        setImageDimensions({ width, height, aspectRatio });
        setImageLoading(false);
      };

      img.onerror = () => {
        // Set default dimensions on error
        setImageDimensions({ width: 800, height: 600, aspectRatio: 4 / 3 });
        setImageLoading(false);
      };
    }
  }, [currentImage]);

  // Update direction when navigating
  const handleNext = useCallback(() => {
    setDirection(1);
    onNext();
  }, [onNext]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    onPrev();
  }, [onPrev]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case 'ArrowLeft':
          handlePrev();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  // Animation variants
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 100 : -100,
        opacity: 1,
      };
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 1,
    }),
  };

  // Calculate skeleton dimensions based on container constraints
  const calculateSkeletonSize = () => {
    const containerWidth = window.innerWidth - 150;
    const containerHeight = window.innerHeight - 180;

    let width, height;

    if (imageDimensions.aspectRatio > 1) {
      // Landscape image
      width = Math.min(containerWidth, imageDimensions.width);
      height = width / imageDimensions.aspectRatio;

      // If height exceeds container, adjust
      if (height > containerHeight) {
        height = containerHeight;
        width = height * imageDimensions.aspectRatio;
      }
    } else {
      // Portrait image
      height = Math.min(containerHeight, imageDimensions.height);
      width = height * imageDimensions.aspectRatio;

      // If width exceeds container, adjust
      if (width > containerWidth) {
        width = containerWidth;
        height = width / imageDimensions.aspectRatio;
      }
    }

    return { width, height };
  };

  const skeletonSize = calculateSkeletonSize();

  return (
    <AnimatePresence custom={direction}>
      {isOpen && (
        <motion.div
          className="slide-preview-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button className="slide-preview-close" onClick={onClose}>
            &times;
          </button>
          <button
            className="slide-preview-nav-button prev"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            &#10094;
          </button>
          <button
            className="slide-preview-nav-button next"
            onClick={handleNext}
            disabled={currentIndex === images.length - 1}
          >
            &#10095;
          </button>
          <motion.div
            className="slide-preview-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {imageLoading ? (
              <div
                className="slide-preview-skeleton"
                style={{
                  width: `${skeletonSize.width}px`,
                  height: `${skeletonSize.height}px`,
                }}
              >
                <div className="skeleton-shimmer"></div>
              </div>
            ) : (
              <motion.img
                key={currentImage}
                src={currentImage}
                alt="Preview"
                className="slide-preview-image"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.div>
          <div className="slide-preview-thumbnails">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className={`slide-preview-thumbnail-container ${index === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  // Set direction based on index comparison
                  setDirection(index > currentIndex ? 1 : -1);
                  onSelectImage(index);
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="slide-preview-thumbnail"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SlidePreview;
