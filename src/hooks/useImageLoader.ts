import { useState, useEffect } from 'react';

interface ImageSource {
  src: string;
  srcSet?: string;
}

/**
 * Custom hook to handle loading and sequentially revealing images
 * @param images Array of image sources to load
 * @param allowSetLoaded Whether to automatically set images as loaded when ready (default: true)
 * @param revealDelay Delay between revealing each image (in ms)
 * @returns Object containing loaded state and array of loaded status for each image
 */
const useImageLoader = (
  images: ImageSource[], 
  allowSetLoaded: boolean = true,
  revealDelay: number = 150,
) => {
  const [loadedImages, setLoadedImages] = useState<boolean[]>(Array(images.length).fill(false));
  const [allLoaded, setAllLoaded] = useState(false);

  // Load all images and track when they're all loaded
  useEffect(() => {
    const loadImages = images.map((image) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = image.src;
        img.onload = () => {
          resolve();
        };
        img.onerror = () => {
          // Resolve even on error to prevent the Promise.all from hanging
          resolve();
        };
      });
    });

    Promise.all(loadImages).then(() => {
      setAllLoaded(true);
    });
  }, [images]);

  // Sequentially reveal images once all are loaded
  useEffect(() => {
    if (allLoaded && allowSetLoaded) {
      images.forEach((_, index) => {
        setTimeout(() => {
          setLoadedImages(prev => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }, index * revealDelay);
      });
    }
  }, [allLoaded, images, revealDelay, allowSetLoaded]);

  return { loadedImages, setLoadedImages, allLoaded };
};

export default useImageLoader;