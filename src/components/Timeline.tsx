import React from 'react';
import Img33 from '../assets/Image-33.png';
import Img34 from '../assets/Image-34.png';
import Img35 from '../assets/Image-35.png';
import AnimatedImage from './AnimatedImage';

const Timeline: React.FC = () => {
  return (
    <div className="section">
      <div className="content">
        <div className="w-layout-grid grid-3-columns">
          <div className="service">
            <AnimatedImage src={Img33} loading="lazy" width={80} alt="" className="icon-timeline" />
            <div className="block-service">
              <h4 className="link-service w-inline-block heading-service">Weddings</h4>
              <p className="paragraph-service">
                Adipiscing mauris sed metus dictum eget morbi aliquet. Sit neque tempus eget dictum
                velit tristique.
              </p>
              <a href="/services/services-c" className="link">
                learn more
              </a>
            </div>
          </div>
          <div className="service">
            <AnimatedImage src={Img34} loading="lazy" width={80} alt="" className="icon-timeline" />
            <div className="block-service">
              <h4 className="link-service w-inline-block heading-service">Event Design</h4>
              <p className="paragraph-service">
                Lectus sit turpis iaculis eu non sed turpis suscipit facilisi. Lorem morbi non morbi
                id aliquam. Urna adipiscing odio.
              </p>
              <a href="/services/services-c" className="link">
                learn more
              </a>
            </div>
          </div>
          <div className="service">
            <AnimatedImage src={Img35} loading="lazy" width={80} alt="" className="icon-timeline" />
            <div className="block-service">
              <h4 className="link-service w-inline-block heading-service">Branding</h4>
              <p className="paragraph-service">
                Tristique sodales consectetur lectus feugiat molestie. Condimentum eu faucibus
                dictum adipiscing.
              </p>
              <a href="/services/services-c" className="link">
                learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
