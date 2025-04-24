import React, { useRef } from 'react';
import useImageLoader from '../hooks/useImageLoader';
import useElementScrollProgress from '../hooks/useElementScrollProgress';
// import Leaf from './Leaf';
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
import Img12 from '../assets/image-12.webp';
// import FadeInText from './FadeInText';
// import TypingText from './TypingText';
import './HeroSection.scss';
import { getAnimationValue } from '../utils/animationHelpers';
// import HeroImg from '../assets/hero-img.png'

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
      {/* <TypingText
      text="SAVE THE DATE"
      typingWidth="182px"
      // className="save-the-date"
    /> */}
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
      {/* <p className='reception'>Reception to follow</p> */}
    </div>

    {/* <Leaf visible={true} />
    <TypingText
      text="SAVE THE DATE"
      typingWidth="182px"
      // animationDelay={`${delays[3]}s`}
      // style={{ marginBottom: "8px" }}
      className="save-the-date"
    />
    <div className="couple-name-wrapper">
      <FadeInText text={textBlocks[0]} className="couple-name" delayOffset={delays[0]} />
      <FadeInText text={textBlocks[1]} className="couple-connect" delayOffset={delays[1]} />
      <FadeInText text={textBlocks[2]} className="couple-name" delayOffset={delays[2]} />
    </div>

    <p className="paragraph paragraph-invite">
      
      <TypingText
        text="With full hearts,"
        typingWidth="130px"
        animationDelay={`${delays[3]}s`}
        style={{ marginBottom: '8px' }}
      />
      <br />
      <TypingText
        text="we joyfully invite you to celebrate our wedding"
        typingWidth="385px"
        animationDelay={`${delays[3] + 1.5}s`}
        animationDuration="3s"
      />
    </p>

    <div>
      <div className="date-display">
        <div className="date-row">
          <div className="date-column">
            <div className="date-label">SATURDAY</div>
          </div>
          <div className="date-column date-column-center">
            <div className="date-month">JULY</div>
            <div className="date-day">10</div>
            <div className="date-year">2025</div>
          </div>
          <div className="date-column">
            <div className="date-label">8:30PM</div>
          </div>
        </div>
      </div>
    </div>
    <a href="/contact" className="link">
      Book A Consult
    </a> */}
  </div>
);

// Define flower images for the loader
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
    src: Img12,
  },
];

export const FlowerDecoration: React.FC = () => {
  const flowerRef = useRef<HTMLDivElement>(null);
  const progress = useElementScrollProgress(flowerRef);

  // Use the image loader hook
  const { loadedImages } = useImageLoader(flowerImages, true, 0);

  // Calculate rotation values based on scroll progress
  const rotateZ = getAnimationValue(30, 20, progress);
  const rotateZ2 = getAnimationValue(0, 5, progress);

  // Calculate vertical translation values based on scroll progress
  const translateYFlower1 = getAnimationValue(-2, 2, progress);
  // const translateYFlower2 = getAnimationValue(-1, 1, progress);

  return (
    <div ref={flowerRef}>
      <img
        src={flowerImages[0].src}
        loading="eager"
        alt=""
        className={`bg-img bg-0 ${loadedImages[0] ? 'fade-in' : ''}`}
        style={{
          willChange: 'transform',
          transform: `translate3d(0px, ${0}vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotateZ2}deg) skew(0deg, 0deg)`,
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
        style={{
          willChange: 'transform',
          transform: `translate3d(0px, ${translateYFlower1}vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotateZ}deg) skew(0deg, 0deg)`,
          transformStyle: 'preserve-3d',
        }}
      />
      <img
        src={flowerImages[3].src}
        loading="eager"
        alt=""
        className={`bg-img bg-3 ${loadedImages[3] ? 'fade-in' : ''}`}
        style={{
          willChange: 'transform',
          transform: `translate3d(0px, ${0}vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotateZ}deg) skew(0deg, 0deg)`,
          transformStyle: 'preserve-3d',
        }}
      />
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
      />
      {/* <img
        src={flowerImages[4].src}
        loading="eager"
        alt=""
        className={`bg-img bg-12 ${loadedImages[4] ? 'fade-in' : ''}`}
      /> */}
      <img
        src={flowerImages[11].src}
        loading="eager"
        alt=""
        className={`bg-img bg-11 ${loadedImages[11] ? 'fade-in' : ''}`}
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
