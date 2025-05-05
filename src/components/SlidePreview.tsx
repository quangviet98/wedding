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
  console.log('%c [ direction ]-64', 'font-size:13px; background:pink; color:#bf2c9f;', direction);

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
      console.log(
        '%c [ direction ]-79',
        'font-size:13px; background:pink; color:#bf2c9f;',
        direction,
      );
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
                onClick={() => onSelectImage(index)}
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
