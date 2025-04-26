import React, { useRef } from 'react';
import useImageLoader from '../hooks/useImageLoader';
import useElementScrollProgress from '../hooks/useElementScrollProgress';
import Img1 from '../assets/image-1.png';
import Img2 from '../assets/image-2.png';
import Img3 from '../assets/image-3.png';
import Img4 from '../assets/image-4.png';
import Img5 from '../assets/image-5.webp';
import Img6 from '../assets/image-6.png';
import Img7 from '../assets/image-7.png';
import Img8 from '../assets/image-8.png';
import Img9 from '../assets/image-9.png';
import Img10 from '../assets/image-10.png';
import Img11 from '../assets/image-11.png';
import Img16 from '../assets/image-16.webp';
import Img19 from '../assets/image-19.svg';
import Img20 from '../assets/image-20.svg';
import './HeroSection.scss';
import { getAnimationValue } from '../utils/animationHelpers';

interface HeroImage {
  src: string;
}

const heroImages: HeroImage[] = [
  {
    src: 'https://cdn.prod.website-files.com/6109925e44b6ab8a7601f26a/610df60220b64c18e8457e38_img_12.jpg',
  },
  {
    src: 'https://cdn.prod.website-files.com/6109925e44b6ab8a7601f26a/610c995bd5f573418e62eb65_img_11.jpg',
  },
  {
    src: 'https://cdn.prod.website-files.com/6109925e44b6ab8a7601f26a/610df60220b64c18e8457e38_img_12.jpg',
  },
  {
    src: 'https://cdn.prod.website-files.com/6109925e44b6ab8a7601f26a/610c995bd5f573418e62eb65_img_11.jpg',
  },
  {
    src: 'https://cdn.prod.website-files.com/6109925e44b6ab8a7601f26a/610df60220b64c18e8457e38_img_12.jpg',
  },
  {
    src: 'https://cdn.prod.website-files.com/6109925e44b6ab8a7601f26a/610c995bd5f573418e62eb65_img_11.jpg',
  },
];

const delayStep = 0.1;
const baseDelay = 1.5;

const textBlocks = [
  'Quang Viet',
  'and',
  'Ha Tuyen',
  'With full hearts,',
  'we joyfully invite you to celebrate our wedding',
];

let offset = baseDelay;
const delays = textBlocks.map((text) => {
  const current = offset;
  offset += text.length * delayStep;
  return current;
});
console.log('%c [ delays[4] ]-48', 'font-size:13px; background:pink; color:#bf2c9f;', delays[4]);
const HeroText: React.FC = () => (
  <div className="text-hero">
    <div className="save-the-date">
      <p>SAVE THE DATE</p>
      <img src={Img7} />
    </div>
    <div className="couple-name-wrapper">
      <div className="couple-name">Quang Viet</div>

      <div className="couple-connect">And</div>

      <div className="couple-name" style={{ paddingLeft: '50px' }}>
        Ha Tuyen
      </div>
    </div>
    <div className="invite-wrapper">
      <div className="invite-text">
        we invite you to join <br /> our wedding
      </div>

      <div className="wedding-date">
        <div className="date-month">JULY</div>
        <div className="date-day">04</div>
        <div className="date-year">2025</div>
      </div>

      <div className="invite-address">
        123 Anywhere St., Any City, <br />
        St 12345
      </div>
      <img src={Img9} width={120} />
    </div>
  </div>
);

const flowerImages = [
  {
    src: Img1,
  },
  {
    src: Img2,
  },
  {
    src: Img3,
  },
  {
    src: Img4,
  },
  {
    src: Img5,
  },
  {
    src: Img6,
  },
  {
    src: Img7,
  },
  {
    src: Img8,
  },
  {
    src: Img9,
  },
  {
    src: Img10,
  },
  {
    src: Img11,
  },
  {
    src: Img16,
  },
  {
    src: Img19,
  },
  {
    src: Img20,
  },
];

export const FlowerDecoration: React.FC = () => {
  const flowerRef = useRef<HTMLDivElement>(null);
  const progress = useElementScrollProgress(flowerRef);

  // Use the image loader hook
  const { loadedImages } = useImageLoader(flowerImages, true, 0);

  const rotateZ0 = getAnimationValue(0, 5, progress);
  const scale5 = getAnimationValue(-0.9, -1.1, progress);
  const rotate5 = getAnimationValue(-30, -37, progress);

  const scale12 = getAnimationValue(0.9, 1, progress);
  const rotate12 = getAnimationValue(20, 23, progress);

  const scale13 = getAnimationValue(0.9, 1, progress);
  const rotate13 = getAnimationValue(27, 30, progress);

  return (
    <div ref={flowerRef} style={{}}>
      <img
        src={flowerImages[0].src}
        loading="eager"
        alt=""
        className={`bg-img bg-0 ${loadedImages[0] ? 'fade-in' : ''}`}
        style={{
          willChange: 'transform',
          transform: `rotateZ(${rotateZ0}deg)`,
          transformStyle: 'preserve-3d',
        }}
      />
      <img
        src={flowerImages[1].src}
        loading="eager"
        alt=""
        className={`bg-img bg-1 ${loadedImages[1] ? 'fade-in' : ''}`}
      />
      <img
        src={flowerImages[2].src}
        loading="eager"
        alt=""
        className={`bg-img bg-2 ${loadedImages[2] ? 'fade-in' : ''}`}
      />
      {/* <img
        src={flowerImages[3].src}
        loading="eager"
        alt=""
        className={`bg-img bg-3 ${loadedImages[3] ? 'fade-in' : ''}`}
        style={{
          willChange: 'transform',
          transform: `rotate(${rotateZ3}deg) scaleX(-1) scale(${scale3})`,
          // transform: `translate3d(0px, ${0}vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotateZ}deg) skew(0deg, 0deg)`,
          transformStyle: 'preserve-3d',
        }}
      /> */}
      <img
        src={flowerImages[4].src}
        loading="eager"
        alt=""
        className={`bg-img bg-4 ${loadedImages[4] ? 'fade-in' : ''}`}
      />

      <img
        src={flowerImages[5].src}
        loading="eager"
        alt=""
        className={`bg-img bg-5 ${loadedImages[5] ? 'fade-in' : ''}`}
        style={{
          willChange: 'transform',
          transform: `rotate(${rotate5}deg) scaleX(${scale5})`,
          transformStyle: 'preserve-3d',
        }}
      />
      {/* <img
        src={flowerImages[4].src}
        loading="eager"
        alt=""
        className={`bg-img bg-12 ${loadedImages[4] ? 'fade-in' : ''}`}
      /> */}
      {/* <img
        src={flowerImages[11].src}
        loading="eager"
        alt=""
        className={`bg-img bg-11 ${loadedImages[11] ? 'fade-in' : ''}`}
      /> */}
      <img
        src={flowerImages[12].src}
        loading="eager"
        alt=""
        className={`bg-img bg-12 ${loadedImages[12] ? 'fade-in' : ''}`}
        style={{
          willChange: 'transform',
          transform: `scale(${scale12}) rotate(${rotate12}deg)`,
          transformStyle: 'preserve-3d',
        }}
      />
      <img
        src={flowerImages[13].src}
        loading="eager"
        alt=""
        className={`bg-img bg-13 ${loadedImages[13] ? 'fade-in' : ''}`}
        style={{
          willChange: 'transform',
          transform: `scaleY(${scale13}) rotate(${rotate13}deg)`,
          transformStyle: 'preserve-3d',
        }}
      />
    </div>
  );
};

export const ImageGallery: React.FC = () => {
  const { loadedImages } = useImageLoader(heroImages);

  return (
    <div className="w-layout-grid grid-hero">
      {heroImages.map((image, index) => (
        <a
          key={index}
          href="#"
          className="lightbox-link w-inline-block w-lightbox"
          aria-label="open lightbox"
          aria-haspopup="dialog"
        >
          <img
            className={`image-lightbox ${loadedImages[index] ? 'fade-in' : ''}`}
            src={image.src}
            alt=""
            loading="lazy"
          />
        </a>
      ))}
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <div className="section-hero">
      <div className="content wide">
        <div className="hero">
          <div className="block-hero">
            <HeroText />
            <FlowerDecoration />
          </div>
          {/* <ImageGallery /> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
