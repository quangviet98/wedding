// Gallery.jsx
import React, { useState } from "react";
import "./Gallery.scss"; // Change from .css to .scss

function Gallery() {
  // Mảng ảnh minh họa (URL từ Unsplash)
  const images = [
    "https://unsplash.com/photos/464ps_nOflw/download?force=true",
    "https://unsplash.com/photos/5BB_atDT4oA/download?force=true",
    "https://unsplash.com/photos/SiniLJkXhMc/download?force=true",
    "https://unsplash.com/photos/8vaQKYnawHw/download?force=true",
    "https://unsplash.com/photos/x40Q9jrEVT0/download?force=true",
    "https://unsplash.com/photos/dvF6s1H1x68/download?force=true"
  ];

  // Track loaded state for each image
  const [loadedImages, setLoadedImages] = useState<boolean[]>(Array(images.length).fill(false));
  console.log('%c [ loadedImages ]-17', 'font-size:13px; background:pink; color:#bf2c9f;', loadedImages)

  // Handle image load event
  const handleImageLoaded = (index: number) => {
    const newLoadedImages = [...loadedImages];
    newLoadedImages[index] = true;
    setLoadedImages(newLoadedImages);
  };

  return (
    <section className="gallery-section">
      <h2>Khoảnh khắc đáng nhớ</h2>
      <div className="gallery">
        {images.map((src, index) => (
          <div key={index} className="image-container">
            <img 
              src={src} 
              alt={`gallery-${index}`} 
              loading="lazy"
              onLoad={() => handleImageLoaded(index)}
              className={`gallery-image ${loadedImages[index] ? 'loaded' : 'loading'}`}
            />
            {!loadedImages[index] && <div className="image-placeholder"></div>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
