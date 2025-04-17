import React from 'react';

const Informations: React.FC = () => {
  return (
    <div className="section">
      <div className="content">
        <div className="w-layout-grid grid-3-columns">
          <div className="service">
            <img 
              src="https://cdn.prod.website-files.com/6109925e44b6ab8a7601f26a/6113208e462ce0eb607c0c58_service_icon_1.png" 
              loading="lazy" 
              width="69" 
              alt="" 
              className="icon-flower"
            />
            <div className="block-service">
              <a href="/services/services-c" className="link-service w-inline-block">
                <h4 className="heading-service">Weddings</h4>
              </a>
              <p className="paragraph-service">
                Adipiscing mauris sed metus dictum eget morbi aliquet. Sit neque tempus eget dictum velit tristique.
              </p>
              <a href="/services/services-c" className="link">learn more</a>
            </div>
          </div>
          <div className="service">
            <img 
              src="https://cdn.prod.website-files.com/6109925e44b6ab8a7601f26a/6113208e06825a1dbd654f3f_service_icon_2.png" 
              loading="lazy" 
              width="69" 
              alt="" 
              className="icon-flower"
            />
            <div className="block-service">
              <a href="/services/services-c" className="link-service w-inline-block">
                <h4 className="heading-service">Event Design</h4>
              </a>
              <p className="paragraph-service">
                Lectus sit turpis iaculis eu non sed turpis suscipit facilisi. Lorem morbi non morbi id aliquam. Urna adipiscing odio.
              </p>
              <a href="/services/services-c" className="link">learn more</a>
            </div>
          </div>
          <div className="service">
            <img 
              src="https://cdn.prod.website-files.com/6109925e44b6ab8a7601f26a/6113208e462ce00deb7c0c59_service_icon_3.png" 
              loading="lazy" 
              width="69" 
              alt="" 
              className="icon-flower"
            />
            <div className="block-service">
              <a href="/services/services-c" className="link-service w-inline-block">
                <h4 className="heading-service">Branding</h4>
              </a>
              <p className="paragraph-service">
                Tristique sodales consectetur lectus feugiat molestie. Condimentum eu faucibus dictum adipiscing.
              </p>
              <a href="/services/services-c" className="link">learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informations;