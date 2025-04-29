import { motion, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import Img19 from '../assets/image-19.svg';
import Img2 from '../assets/image-2.png';
import Img20 from '../assets/image-20.svg';
import Img22 from '../assets/Image-22.webp';
import Img23 from '../assets/Image-23.png';
import Img32 from '../assets/Image-32.webp';
import Img26 from '../assets/Image-26.png';
import Img27 from '../assets/Image-27-2.png';
import Img5 from '../assets/image-5.webp';
import Img6 from '../assets/image-6.png';
import Img7 from '../assets/image-7.png';
import Img9 from '../assets/image-9.png';
import useElementScrollProgress from '../hooks/useElementScrollProgress';
import useImageLoader from '../hooks/useImageLoader';
import {
  decorativeAnimation,
  fadeInUp,
  floatIn,
  getAnimationValue,
  revealText,
} from '../utils/animationHelpers';
import './HeroSection.scss';

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
const HeroText: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  console.log('%c [ isInView ]-63', 'font-size:13px; background:pink; color:#bf2c9f;', isInView);
  return (
    <div className="text-hero" ref={containerRef}>
      <div className="save-the-date">
        <motion.p
          variants={revealText}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={1}
        >
          SAVE THE DATE
        </motion.p>
        {/* <img src={Img7} /> */}
        <motion.img
          src={Img7}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.2,
              duration: 1,
              type: 'spring',
              bounce: 0.3,
            },
          }}
          viewport={{ once: false, amount: 0.6 }}
        />
      </div>
      <div className="couple-name-wrapper">
        <motion.div
          className="couple-name"
          variants={floatIn}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={1}
        >
          Quang Viet
        </motion.div>

        <motion.div
          className="couple-connect"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={2}
        >
          And
        </motion.div>

        <motion.div
          className="couple-name"
          style={{ paddingLeft: '50px' }}
          variants={floatIn}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={3}
        >
          Ha Tuyen
        </motion.div>
      </div>
      <div className="invite-wrapper">
        <motion.div
          className="invite-text"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={4}
        >
          we invite you to join <br /> our wedding
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={5}
        >
          <motion.div
            className="wedding-date"
            whileInView={{
              y: [0, -5, 0],
              transition: {
                y: {
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  ease: 'easeInOut',
                  repeatDelay: 0.5,
                },
              },
            }}
          >
            <div className="date-month">JULY</div>

            <motion.div
              className="date-day"
              animate={{
                textShadow: [
                  '0px 0px 0px var(--paragraphs)',
                  '2px 2px 4px var(--accent)',
                  '0px 0px 0px var(--accent)',
                ],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 3,
                ease: 'easeOut',
                times: [0, 0.5, 1],
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            >
              04
            </motion.div>
            <div className="date-year">2025</div>
          </motion.div>
        </motion.div>

        <motion.div
          className="invite-address"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={6}
        >
          123 Anywhere St., Any City, <br />
          St 12345
        </motion.div>
        <motion.img
          src={Img9}
          width={120}
          variants={decorativeAnimation}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={7}
        />
      </div>
    </div>
  );
};

const flowerImages = [
  {
    src: Img2, // Used in bg-1
  },
  {
    src: Img22, // Used in bg-2
  },
  {
    src: Img5, // Used in bg-4
  },
  {
    src: Img6, // Used in bg-5
  },
  {
    src: Img19, // Used in bg-12
  },
  {
    src: Img20, // Used in bg-13
  },
  {
    src: Img26, // Used in bg-6
  },
];

export const FlowerDecoration: React.FC = () => {
  const flowerRef = useRef<HTMLDivElement>(null);
  const progress = useElementScrollProgress(flowerRef);

  // Use the image loader hook
  const { loadedImages } = useImageLoader(flowerImages, true, 0);

  // const rotateZ0 = getAnimationValue(0, 5, progress);
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
        className={`bg-img bg-1 ${loadedImages[0] ? 'fade-in' : ''}`}
      />
      {/* <img
        src={flowerImages[1].src}
        loading="eager"
        alt=""
        className={`bg-img bg-2 ${loadedImages[1] ? 'fade-in' : ''}`}
      /> */}
      <motion.img
        src={flowerImages[1].src}
        loading="eager"
        alt=""
        className={`bg-img bg-2 ${loadedImages[1] ? 'fade-in' : ''}`}
        whileInView={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0],
          transition: {
            scale: {
              duration: 2,
              ease: 'easeInOut',
              times: [0, 0.5, 1],
              repeat: Number.POSITIVE_INFINITY,
            },
            rotate: {
              duration: 3,
              ease: 'easeInOut',
              times: [0, 0.3, 0.7, 1],
              repeat: Number.POSITIVE_INFINITY,
            },
          },
        }}
      />

      <img
        src={flowerImages[2].src}
        loading="eager"
        alt=""
        className={`bg-img bg-4 ${loadedImages[2] ? 'fade-in' : ''}`}
      />
      <img
        src={flowerImages[3].src}
        loading="eager"
        alt=""
        className={`bg-img bg-5 ${loadedImages[3] ? 'fade-in' : ''}`}
        style={{
          willChange: 'transform',
          transform: `rotate(${rotate5}deg) scaleX(${scale5})`,
          transformStyle: 'preserve-3d',
        }}
      />
      <img
        src={flowerImages[4].src}
        loading="eager"
        alt=""
        className={`bg-img bg-12 ${loadedImages[4] ? 'fade-in' : ''}`}
        style={{
          willChange: 'transform',
          transform: `scale(${scale12}) rotate(${rotate12}deg)`,
          transformStyle: 'preserve-3d',
        }}
      />
      <img
        src={flowerImages[5].src}
        loading="eager"
        alt=""
        className={`bg-img bg-13 ${loadedImages[5] ? 'fade-in' : ''}`}
        style={{
          willChange: 'transform',
          transform: `scaleY(${scale13}) rotate(${rotate13}deg)`,
          transformStyle: 'preserve-3d',
        }}
      />
      <img
        src={flowerImages[6].src}
        loading="eager"
        alt=""
        className={`bg-img bg-6 ${loadedImages[6] ? 'fade-in' : ''}`}
      />
    </div>
  );
};

const OuterContent: React.FC = () => {
  return (
    <div className="outer-content">
      <div className="paper-1" style={{}}></div>
    </div>
  );
};
const OuterBlockHero: React.FC = () => {
  return (
    <div className="outer-block-hero">
      <div className="couple-image">
        <img src={Img32} alt="" />
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const bgImg = new Image();
    const heroImg = new Image();

    bgImg.src = Img27;
    heroImg.src = Img23;

    let bgDone = false;
    let heroDone = false;

    const checkDone = () => {
      if (bgDone && heroDone) {
        setBgLoaded(true);
      }
    };

    bgImg.onload = () => {
      bgDone = true;
      checkDone();
    };

    heroImg.onload = () => {
      heroDone = true;
      checkDone();
    };
  }, []);

  return (
    <div className={`section-hero ${bgLoaded ? 'background-loaded' : ''}`}>
      <OuterContent />
      <div className="content wide">
        <div className={`hero ${bgLoaded ? 'loaded' : ''}`}>
          <OuterBlockHero />
          <div className="block-hero">
            <HeroText />
            <FlowerDecoration />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
