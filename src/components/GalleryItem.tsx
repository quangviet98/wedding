import React from 'react';

interface GalleryItemProps {
  src: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
}

export const GalleryItem: React.FC<GalleryItemProps> = ({ src, className, onClick }) => {
  return (
    <div
      className="lightbox-link w-inline-block w-lightbox"
      onClick={onClick}
      // whileHover={{ scale: 1.05 }}
      // whileTap={{ scale: 0.98 }}
    >
      <img className={`image-lightbox ${className}`} src={src} loading="lazy" />
      {/* <motion.img
        src={src}
        alt={alt}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
          },
        }}
        viewport={{ once: false, amount: 0.3 }}
        className="image-lightbox"
      /> */}
    </div>
  );
};
