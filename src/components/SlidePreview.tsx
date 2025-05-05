import { AnimatePresence, motion } from 'framer-motion';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
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

  // Refs for touch events
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
    const prevent = (e: Event) => {
      // Kiểm tra xem sự kiện có xuất phát từ .slide-preview-thumbnails không
      const target = e.target as HTMLElement;
      const thumbnailsContainer = document.querySelector('.slide-preview-thumbnails');

      // Nếu sự kiện xuất phát từ thumbnails hoặc con của nó, cho phép cuộn
      if (
        thumbnailsContainer &&
        (thumbnailsContainer === target || thumbnailsContainer.contains(target))
      ) {
        return; // Cho phép cuộn trong thumbnails
      }

      // Ngăn chặn cuộn ở những nơi khác
      e.preventDefault();
    };

    if (isOpen) {
      document.addEventListener('wheel', prevent, { passive: false });
      document.addEventListener('touchmove', prevent, { passive: false });
    } else {
      document.removeEventListener('wheel', prevent);
      document.removeEventListener('touchmove', prevent);
    }

    return () => {
      document.removeEventListener('wheel', prevent);
      document.removeEventListener('touchmove', prevent);
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

  // Handle touch events for swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchEndXRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;

    const touchDiff = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 50; // Minimum distance to consider as a swipe

    if (Math.abs(touchDiff) > minSwipeDistance) {
      if (touchDiff > 0) {
        // Swiped left, go to next image
        if (currentIndex < images.length - 1) {
          handleNext();
        }
      } else {
        // Swiped right, go to previous image
        if (currentIndex > 0) {
          handlePrev();
        }
      }
    }

    // Reset touch refs
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  // Animation variants
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 100 : -100,
        opacity: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

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
            ref={containerRef}
            className="slide-preview-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
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
          </motion.div>
          <div className="slide-preview-thumbnails">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className={`slide-preview-thumbnail-container ${index === currentIndex ? 'active' : ''}`}
                onClick={() => {
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
