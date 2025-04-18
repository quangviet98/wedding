import React, { useRef } from 'react';
import useImageLoader from '../hooks/useImageLoader';
// import useElementScrollProgress from '../hooks/useElementScrollProgress';
// import { getAnimationValue } from '../utils/animationHelpers';
import Leaf from './Leaf';
import LeafLeft from '../assets/topleft.svg'
import LeafRight from '../assets/leaf_right_fully_transparent.png'
// import HeroImg from '../assets/hero-img.png'

interface HeroImage {
    src: string;
}

const heroImages: HeroImage[] = [
    {
        src: "https://cdn.prod.website-files.com/6109925e44b6ab8a7601f26a/610df60220b64c18e8457e38_img_12.jpg",
    },
    {
        src: "https://cdn.prod.website-files.com/6109925e44b6ab8a7601f26a/610c995bd5f573418e62eb65_img_11.jpg",
    },
    {
        src: "https://cdn.prod.website-files.com/6109925e44b6ab8a7601f26a/610df60220b64c18e8457e38_img_12.jpg",
    },
    {
        src: "https://cdn.prod.website-files.com/6109925e44b6ab8a7601f26a/610c995bd5f573418e62eb65_img_11.jpg",
    },
    {
        src: "https://cdn.prod.website-files.com/6109925e44b6ab8a7601f26a/610df60220b64c18e8457e38_img_12.jpg",
    },
    {
        src: "https://cdn.prod.website-files.com/6109925e44b6ab8a7601f26a/610c995bd5f573418e62eb65_img_11.jpg",
    },
];

const HeroText: React.FC = () => (
    <div className="text-hero">
        <Leaf visible={true} />
        <div className="save-the-date">Save The Date<br /></div>
        {/* <div className='master-hero'>
            <img src={HeroImg} width={120} />
            <div className='master-hero-text'>
                <div className='master-hero-name'>C</div>
                <div className='master-hero-concat'>+</div>
                <div className='master-hero-name'>T</div>
            </div>

        </div> */}
        <div className='couple-name-wrapper'>
            <span className='couple-name'>
                Quang Viet
            </span>
            <span className='couple-connect'>
                and
            </span>
            <span className='couple-name'>
                Ha Tuyen
            </span>
        </div>
        {/* <h1 className="heading-hero">Quang Viet &amp; Ha Tuyen</h1> */}
        {/* <p className="paragraph">We are invested in artful beauty, a strong logistical foundation with collaborative efforts constantly producing extraordinary events.</p> */}
        {/* <h1 className="heading-hero">Destination Wedding Planners &amp; Event Designers</h1> */}
        <p className="paragraph paragraph-invite">With full hearts, <br /> we joyfully invite you to celebrate our wedding</p>
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
        <a href="/contact" className="link">Book A Consult</a>
    </div>
);

// Define flower images for the loader
const flowerImages = [
    {
        src: LeafLeft
    },
    {
        src: LeafRight
    }
];

export const FlowerDecoration: React.FC = () => {
    const flowerRef = useRef<HTMLDivElement>(null);
    // const progress = useElementScrollProgress(flowerRef);



    // Use the image loader hook
    const { loadedImages } = useImageLoader(flowerImages, true, 0);

    // // Calculate rotation values based on scroll progress
    // const rotateZ = getAnimationValue(25, 40, progress);

    // // Calculate vertical translation values based on scroll progress
    // const translateYFlower1 = getAnimationValue(-2, 2, progress);
    // const translateYFlower2 = getAnimationValue(-1.5, 1.5, progress); 1

    return (
        <div ref={flowerRef}>
            <img
                src={flowerImages[0].src}
                loading="eager"
                style={{
                    willChange: "transform",
                    // transform: `translate3d(0px, ${translateYFlower1}vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotateZ}deg) skew(0deg, 0deg)`,
                    transformStyle: "preserve-3d",
                    opacity: loadedImages[0] ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out"
                }}
                alt=""
                className={`flower-hero1 ${loadedImages[0] ? 'fade-in' : ''}`}
            />
            <img
                src={flowerImages[1].src}
                loading="eager"
                style={{
                    willChange: "transform",
                    // transform: `translate3d(0px, ${translateYFlower2}vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotateZ}deg) skew(0deg, 0deg)`,
                    transformStyle: "preserve-3d",
                    opacity: loadedImages[1] ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out"
                }}
                alt=""
                className={`flower-hero2 ${loadedImages[1] ? 'fade-in' : ''}`}
            />
        </div>
    );
};

const ImageGallery: React.FC = () => {
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
                        {/* <FlowerDecoration /> */}
                    </div>
                    <ImageGallery />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
