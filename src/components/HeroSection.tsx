import React, { useRef } from 'react';
import useImageLoader from '../hooks/useImageLoader';
// import useElementScrollProgress from '../hooks/useElementScrollProgress';
// import { getAnimationValue } from '../utils/animationHelpers';
import Leaf from './Leaf';
import LeafLeft from '../assets/topleft.svg'
import LeafRight from '../assets/leaf_right_fully_transparent.png'
import FadeInText from './FadeInText';
import TypingText from './TypingText';
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

const delayStep = 0.1;
const baseDelay = 1.5;

const textBlocks = ["Quang Viet", "and", "Ha Tuyen", "With full hearts,", "we joyfully invite you to celebrate our wedding"];

let offset = baseDelay;
const delays = textBlocks.map((text) => {
    const current = offset;
    offset += text.length * delayStep;
    return current;
});
console.log('%c [ delays[4] ]-48', 'font-size:13px; background:pink; color:#bf2c9f;', delays[4])
const HeroText: React.FC = () => (
    <div className="text-hero">
        <Leaf visible={true} />
        <TypingText
            text="Save The Date"
            typingWidth="162px"
            // animationDelay={`${delays[3]}s`}
            // style={{ marginBottom: "8px" }}
            className='save-the-date'
        />
        {/* <div className="save-the-date typing" style={{ "--step": 13, "--typing-width": '162px' } as React.CSSProperties}></div> */}
        <div className='couple-name-wrapper'>
            <FadeInText text={textBlocks[0]} className='couple-name' delayOffset={delays[0]} />
            <FadeInText text={textBlocks[1]} className='couple-connect' delayOffset={delays[1]} />
            <FadeInText text={textBlocks[2]} className='couple-name' delayOffset={delays[2]} />
        </div>

        <p className="paragraph paragraph-invite">
            {/* <FadeInText text={textBlocks[3]} delayOffset={delays[3]} />
            <br />
            <FadeInText text={textBlocks[4]} delayOffset={delays[4]} /> */}
            {/* <span className="typing" style={{
                "--step": 17,
                "--typing-width": '130px',
                animationDelay: `${delays[3]}s`,
                display: "inline-block",
                marginBottom: '8px'

            } as React.CSSProperties} >With full hearts,</span>
            <br />
            <span className="typing" style={{
                "--step": 47,
                "--typing-width": '385px',
                animationDelay: `${delays[3] + 1.5}s`,
                display: "inline-block",
                animationDuration: '3s'

            } as React.CSSProperties}
                onAnimationStart={() => {
                    console.log('%c [ onAnimationStart ]-80', 'font-size:13px; background:pink; color:#bf2c9f;', 'onAnimationStart')

                }}
                onAnimationEnd={() => {
                    console.log('%c [ onAnimationEnd ]-80', 'font-size:13px; background:pink; color:#bf2c9f;', 'onAnimationEnd')

                }}
            >we joyfully invite you to celebrate our wedding</span> */}

            <TypingText
                text="With full hearts,"
                typingWidth="130px"
                animationDelay={`${delays[3]}s`}
                style={{ marginBottom: "8px" }}
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
