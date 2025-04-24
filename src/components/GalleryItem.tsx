// components/GalleryItem.tsx
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface GalleryItemProps {
  src: string;
  alt?: string;
}

export const GalleryItem: React.FC<GalleryItemProps> = ({ src, alt }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      initial="hidden"
      animate={controls}
      variants={{
        // hidden: { opacity: 0, scale: 0.6, y: 50 },
        // visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
        hidden: {
          opacity: 0,
          y: -100,
          // x: -100,
          rotateY: -90,
        },
        visible: {
          opacity: 1,
          y: 0,
          // x:0,
          rotateY: 0,
          transition: {
            duration: 0.9,
            ease: 'easeOut',
          },
        },
      }}
      className="image-lightbox"
    />
  );
};
