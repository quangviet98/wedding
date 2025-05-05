import React, { useState } from 'react';
import useImageLoader from '../hooks/useImageLoader';
import useSectionVisibility from '../hooks/useSectionVisibility';
import ShortCouple from './ShortCouple';
import { GalleryItem } from './GalleryItem';
import SlidePreview from './SlidePreview';

interface GalleryItemType {
  src: string;
}

const galleryItems: GalleryItemType[] = [
  {
    src: 'https://cdn.prod.website-files.com/6109925e44b6ab8a7601f26a/610c80ecf92b9227f9cf593e_img_1.jpg',
  },
  {
    src: 'https://cdn.prod.website-files.com/6109925e44b6ab8a7601f26a/610c995bd5f573418e62eb65_img_11.jpg',
  },
  {
    src: 'https://cdn.prod.website-files.com/6109925e44b6ab8a7601f26a/610c995bd53807b403f4c0b6_img_8.jpg',
  },
  {
    src: 'https://cdn.prod.website-files.com/6109925e44b6ab8a7601f26a/610c995bd538075c43f4c0b7_img_5.jpg',
  },
  {
    src: 'https://cdn.prod.website-files.com/6109925e44b6ab8a7601f26a/610c995bdafde34ebec2fcda_img_6.jpg',
  },
  {
    src: 'https://cdn.prod.website-files.com/6109925e44b6ab8a7601f26a/610c995bcfbb690982663a69_img_10.jpg',
  },
  {
    src: 'https://cdn.prod.website-files.com/6109925e44b6ab8a7601f26a/610c995b895b7a5ff922e5e9_img_9.jpg',
  },
  {
    src: 'https://cdn.prod.website-files.com/6109925e44b6ab8a7601f26a/610c995b85d7d7248a813449_img_7.jpg',
  },
];

const Gallery: React.FC = () => {
  const { sectionRef, isVisible } = useSectionVisibility();

  return (
    <div className="section" ref={sectionRef}>
      <div className="content wide">
        <div className="block-heading">
          <ShortCouple />
          <div className="subtitle">
            Galleries
            <br />
          </div>
          <h2 className="heading">Your vision made real</h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus hendrerit dolor lorem
            risus et tellus magna amet morbi. Elit risus in sed dolor diam.
          </p>
        </div>
        <GalleryComponent visible={isVisible} />
      </div>
    </div>
  );
};

export default Gallery;

interface GalleryComponentProps {
  visible: boolean;
}

const GalleryComponent: React.FC<GalleryComponentProps> = ({ visible }) => {
  const { loadedImages } = useImageLoader(galleryItems, visible);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenPreview = (index: number) => {
    setCurrentImageIndex(index);
    setPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setPreviewOpen(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryItems.length - 1 ? prevIndex : prevIndex + 1,
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? prevIndex : prevIndex - 1));
  };
  const handleSelectImage = (index: number) => {
    setCurrentImageIndex(index);
  };
  return (
    <>
      <div className="w-layout-grid grid-galleries">
        {galleryItems.map((item, index) => {
          // Group two images together in one row
          if (index % 2 === 0) {
            return (
              <div
                key={index}
                className={`w-layout-grid grid-galleries---row ${index % 4 === 2 ? 'margin' : ''}`}
              >
                <GalleryItem
                  className={`${loadedImages[index] ? 'fade-in' : ''}`}
                  src={item.src}
                  onClick={() => handleOpenPreview(index)}
                />

                {galleryItems[index + 1] && (
                  <GalleryItem
                    className={`${loadedImages[index + 1] ? 'fade-in' : ''}`}
                    src={galleryItems[index + 1].src}
                    onClick={() => handleOpenPreview(index + 1)}
                  />
                )}
              </div>
            );
          }
          return null;
        })}
      </div>

      <SlidePreview
        isOpen={previewOpen}
        currentImage={galleryItems[currentImageIndex]?.src || ''}
        images={galleryItems.map((item) => item.src)}
        currentIndex={currentImageIndex}
        onClose={handleClosePreview}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
        onSelectImage={handleSelectImage}
      />
    </>
  );
};
