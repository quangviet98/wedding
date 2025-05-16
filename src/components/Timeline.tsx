import React from 'react';
import Img33 from '../assets/Image-33.png';
import Img34 from '../assets/Image-34.png';
import Img35 from '../assets/Image-35.png';
import AnimatedImage from './AnimatedImage';

const Timeline: React.FC = () => {
  return (
    <div className="section time-line">
      <div className="content">
        <h2 className="section-title" style={{ marginBottom: '36px' }}>
          Sự kiện ngày cưới
        </h2>
        {/* <h2 style={{ marginBottom: '36px' }}>Sự kiện ngày cưới</h2> */}
        <div className="w-layout-grid grid-3-columns">
          <div className="service">
            <AnimatedImage
              src={Img33}
              loading="lazy"
              width={100}
              alt=""
              className="icon-timeline"
            />
            <div className="block-service">
              <h4 className="link-service w-inline-block heading-service">11:00</h4>
              <h4 className="link-service w-inline-block heading-service">
                "Alo alo" điểm danh nè!
              </h4>
              <p className="paragraph-service">
                Lên đồ xinh tươi đến "chộp" hình cháy máy với cô dâu chú rể nè!
              </p>
            </div>
          </div>
          <div className="service">
            <AnimatedImage
              src={Img34}
              loading="lazy"
              width={100}
              alt=""
              className="icon-timeline"
            />
            <div className="block-service">
              <h4 className="link-service w-inline-block heading-service">12:00</h4>
              <h4 className="link-service w-inline-block heading-service">"Yes, I do!"</h4>
              <p className="paragraph-service">
                Chứng kiến tụi mình "về chung một nhà" nha! Hồi hộp quá!
              </p>
              {/* <p className="paragraph-service">Đến xem tụi mình "chốt deal" cuộc đời nha!</p> */}
            </div>
          </div>
          <div className="service">
            <AnimatedImage
              src={Img35}
              loading="lazy"
              width={100}
              alt=""
              className="icon-timeline"
            />
            <div className="block-service">
              <h4 className="link-service w-inline-block heading-service">12:30</h4>
              <h4 className="link-service w-inline-block heading-service">"2 3 Zooô!" Cạn ly!</h4>
              <p className="paragraph-service">Cạn ly trăm phần trăm chúc phúc cho tụi mình nha!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
