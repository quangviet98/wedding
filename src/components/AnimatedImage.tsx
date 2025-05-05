import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedImageProps {
  src: string;
  alt?: string;
  width?: number | string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  width,
  className,
  loading = 'lazy',
}) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      width={width}
      className={className}
      loading={loading}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.215, 0.61, 0.355, 1],
          delay: 0.1,
        },
      }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      viewport={{ once: false, amount: 0.3 }}
    />
  );
};

export default AnimatedImage;
