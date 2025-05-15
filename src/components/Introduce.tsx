import useElementScrollProgress from '../hooks/useElementScrollProgress';
import useImageLoader from '../hooks/useImageLoader';
import useSectionVisibility from '../hooks/useSectionVisibility';
import { getAnimationValue, getClampedAnimationValue } from '../utils/animationHelpers';
// import Leaf from './Leaf';
import './Introduce.scss';
import { useCountDown } from '../hooks/useCountDown';
import { useState } from 'react';
// Animation parameters
const ANIMATION_CONFIG = {
  scale: { start: 1, end: 1.15 },
  rotate: { start: 27, end: 47 },
  translateX: { start: 21, end: -13 },
  translateY: { start: -6, end: 6 },
  rotateFlower: { start: -20, end: 20 },
  translateYFlower2: { start: -2, end: 2 },
};
const images = [
  {
    src: 'https://cdn.prod.website-files.com/6109925e44b6ab8a7601f26a/610c869f09424720d94e3a6f_img_4.jpg',
    srcSet:
      'https://assets-global.website-files.com/6109925e44b6ab8a7601f26a/610c869f09424720d94e3a6f_img_4-p-500.jpeg 500w, https://assets-global.website-files.com/6109925e44b6ab8a7601f26a/610c869f09424720d94e3a6f_img_4-p-800.jpeg 800w, https://assets-global.website-files.com/6109925e44b6ab8a7601f26a/610c869f09424720d94e3a6f_img_4.jpg 805w',
  },
  {
    src: 'https://cdn.prod.website-files.com/6109925e44b6ab8a7601f26a/610b43d6b6c024c89d1812f4_flower_1.png',
  },
  {
    src: 'https://cdn.prod.website-files.com/6109925e44b6ab8a7601f26a/610c8b93895b7accc322bb80_flower_3.png',
  },
];
function Introduce() {
  const [time] = useState(Number(new Date('2025-07-05T00:00:00')) - Number(new Date()));
  const { days, hours, minutes, seconds } = useCountDown({
    time: time,
  });

  const { isVisible, sectionRef } = useSectionVisibility({ threshold: 0.1 });
  const progress = useElementScrollProgress(sectionRef);
  const { loadedImages } = useImageLoader(images, isVisible, 0);

  // Main image animations
  const scaleClamped = getClampedAnimationValue(
    ANIMATION_CONFIG.scale.start,
    ANIMATION_CONFIG.scale.end,
    progress,
  );

  // Flower 1 animations
  const translateXValue = getAnimationValue(
    ANIMATION_CONFIG.translateX.start,
    ANIMATION_CONFIG.translateX.end,
    progress,
  );
  const translateYValue = getAnimationValue(
    ANIMATION_CONFIG.translateY.start,
    ANIMATION_CONFIG.translateY.end,
    progress,
  );
  const rotateFlowerValue = getAnimationValue(
    ANIMATION_CONFIG.rotateFlower.start,
    ANIMATION_CONFIG.rotateFlower.end,
    progress,
  );

  // Flower 2 animations
  const rotateValue = getAnimationValue(
    ANIMATION_CONFIG.rotate.start,
    ANIMATION_CONFIG.rotate.end,
    progress,
  );
  const rotateClamped = Math.min(rotateValue, ANIMATION_CONFIG.rotate.end);
  const translateYFlower2 = getAnimationValue(
    ANIMATION_CONFIG.translateYFlower2.start,
    ANIMATION_CONFIG.translateYFlower2.end,
    progress * 2, // Double the effect
  );

  return (
    <div className="section" ref={sectionRef}>
      <div className="content">
        <div
          data-w-id="53b697f0-023e-7f03-d53c-bf4f4b3206cd"
          className="w-layout-grid grid-postcard"
        >
          <div
            id="w-node-a38a8908-1dc6-e0b5-39a4-e35f06688720-26472350"
            className="postcard---block-right"
          >
            <div className="postcard-text">
              <div className="name-wrapper">
                <h4>Quang Việt</h4>
                <span>&</span>
                <h4>Hạ Tuyên</h4>
              </div>
              <p className="paragraph-service text-center">
                Cuối cùng thì tụi mình cũng "chốt đơn" rồi!
                <br /> Đến "witness" cho tụi mình nha bạn iu ơi!
              </p>
              <a href="/about/about-c" className="button w-button">
                Xác nhận tham dự
              </a>

              {/* <div className="sub-wedding-date">5 Tháng 7 2025</div> */}
              <div className="count-down">
                <div className="count-item">
                  <div>{`0${days}`.slice(-2)}</div>
                  <div>Ngày</div>
                </div>
                <div className="count-item">
                  <div>{`0${hours}`.slice(-2)}</div>
                  <div>Giờ</div>
                </div>
                <div className="count-item">
                  <div>{`0${minutes}`.slice(-2)}</div>
                  <div>Phút</div>
                </div>
                <div className="count-item">
                  <div>{`0${seconds}`.slice(-2)}</div>
                  <div>Giây</div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="w-node-d2924451-e09a-bd31-2cf5-d17c83bb6e82-26472350"
            className="postcard---image"
            style={{
              willChange: 'transform',
              transform:
                'translate3d(0px, -0.34008vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="overflow-image">
              <img
                className={`image ${loadedImages[0] ? 'fade-in' : ''}`}
                src={images[0].src}
                alt=""
                style={{
                  willChange: 'transform',
                  transform: `translate3d(0px, 0px, 0px) scale3d(${scaleClamped}, ${scaleClamped}, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                  transformStyle: 'preserve-3d',
                  opacity: 0,
                }}
                sizes="(max-width: 479px) 96vw, (max-width: 767px) 95vw, 96vw"
                data-w-id="0bbd957c-f07a-58b9-64b3-eb07d2161431"
                loading="lazy"
              />
            </div>
            <img
              src={images[1].src}
              loading="eager"
              style={{
                willChange: 'transform',
                transform: `translate3d(${translateXValue}%, ${translateYValue}vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotateFlowerValue}deg) skew(0deg, 0deg)`,
                transformStyle: 'preserve-3d',
                opacity: 0,
              }}
              data-w-id="e07efab1-2405-6403-610c-990a8c6de499"
              alt=""
              className={`flower-postcard---a ${loadedImages[1] ? 'fade-in' : ''}`}
            />
            <img
              src={images[2].src}
              loading="eager"
              style={{
                willChange: 'transform',
                transform: `translate3d(0px, ${translateYFlower2}vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotateClamped}deg) skew(0deg, 0deg)`,
                transformStyle: 'preserve-3d',
                opacity: 0,
              }}
              data-w-id="64c4007d-6a6a-9e00-031a-245d11e1a5c8"
              alt=""
              className={`flower-postcard---b ${loadedImages[2] ? 'fade-in' : ''}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
