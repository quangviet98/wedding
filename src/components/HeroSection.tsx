import { motion, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import Firework from '../assets/firework.gif';
import Img19 from '../assets/image-19.svg';
import Img2 from '../assets/image-2.png';
import Img20 from '../assets/image-20.svg';
import Img22 from '../assets/Image-22.webp';
import Img23 from '../assets/Image-23.png';
import Img26 from '../assets/Image-26.png';
import Img27 from '../assets/Image-27-2.png';
import Img32 from '../assets/Image-32.webp';
import Img5 from '../assets/image-5.webp';
import Img6 from '../assets/image-6.png';
import Img7 from '../assets/image-7.png';
import Img9 from '../assets/image-9.png';
import useElementScrollProgress from '../hooks/useElementScrollProgress';
import useImageLoader from '../hooks/useImageLoader';
import {
  decorativeAnimation,
  fadeInUp,
  getAnimationValue,
  revealText,
} from '../utils/animationHelpers';
import './HeroSection.scss';

const HeroText: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  return (
    <div className="text-hero" ref={containerRef}>
      {/* <div className="save-the-date">
        <motion.p
          variants={revealText}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={2}
        >
          SAVE THE DATE
        </motion.p>
      </div> */}

      <div className="the-wedding">
        <motion.img
          src={Img7}
          // initial={{ opacity: 0, scale: 0.7 }}
          // whileInView={{
          //   opacity: 0.7,
          //   scale: 1,
          //   transition: {
          //     delay: 0.2,
          //     duration: 1,
          //     type: 'spring',
          //     bounce: 0.3,
          //   },
          // }}
          // viewport={{ once: false, amount: 0.6 }}
          variants={revealText}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={1}
        />
        <img src={Firework} className="firework-effect" />
      </div>
      <div className="couple-name-wrapper">
        <motion.div
          className="couple-name"
          variants={{
            hidden: {
              opacity: 0,
              x: -150,
              scale: 0.3,
              filter: 'blur(4px)',
            },
            visible: (i: number) => ({
              opacity: 1,
              x: 0,
              rotate: 0,
              scale: 1,
              filter: 'blur(0px)',
              transition: {
                delay: i * 0.25,
                duration: 1.4,
                ease: [0.215, 0.61, 0.355, 1], // Improved easing
              },
            }),
          }}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={1}
        >
          Quang Viet
        </motion.div>

        <motion.div
          className="couple-connect"
          variants={{
            hidden: {
              opacity: 0,
              y: 50,
              filter: 'blur(8px)',
              scale: 0,
            },
            visible: (i: number) => ({
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              scale: 1,
              transition: {
                delay: i * 0.25,
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for a more elegant motion
              },
            }),
          }}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={1}
        >
          And
        </motion.div>

        <motion.div
          className="couple-name"
          style={{ paddingLeft: '50px' }}
          variants={{
            hidden: {
              opacity: 0,
              x: 150,
              scale: 0.3,
              filter: 'blur(4px)',
            },
            visible: (i: number) => ({
              opacity: 1,
              x: 0,
              rotate: 0,
              scale: 1,
              filter: 'blur(0px)',
              transition: {
                delay: i * 0.25,
                duration: 1.4,
                ease: [0.215, 0.61, 0.355, 1], // Improved easing
              },
            }),
          }}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={1}
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
          custom={2}
        >
          we invite you to join <br /> our wedding
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={3}
        >
          <div className="wedding-date">
            <div className="date-month">JULY</div>

            <motion.div
              className="date-day"
              // animate={{
              //   textShadow: [
              //     '0px 0px 0px var(--paragraphs)',
              //     '2px 2px 3px #f6ae96',
              //     '3px 3px 4px #f6ae96',
              //     '2px 2px 3px #f6ae96',
              //     '0px 0px 0px var(--paragraphs)',
              //   ],
              //   scale: [1, 1.03, 1.08, 1.12, 1.08, 1.03, 1],

              // }}
              // transition={{
              //   duration: 3,
              //   ease: 'easeInOut',
              //   times: [0, 0.16, 0.32, 0.5, 0.68, 0.84, 1],
              //   repeat: Infinity,
              //   repeatDelay: 0.5,
              // }}
            >
              04
            </motion.div>
            <div className="date-year">2025</div>
          </div>
        </motion.div>

        <motion.div
          className="invite-address"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={4}
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
          custom={5}
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
