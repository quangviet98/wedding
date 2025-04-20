import React from 'react';
import './FadeInText.scss';

interface FadeInTextProps {
    text: string;
    className?: string;
    delayOffset?: number
}

const FadeInText: React.FC<FadeInTextProps> = ({ text, className, delayOffset = 0 }) => {
    return (
        <p className={`fadein-text fadein-text-${text.length} ${className || ''}`} style={{ '--delay-offset': `${delayOffset}s` } as React.CSSProperties}>
            {text.split('').map((char, idx) => (
                <span className={char === ' ' ? 'char-space' : 'char-animate'} key={idx}>{char === ' ' ? '\u00A0' : char}</span>
            ))}
        </p>
    );
};

export default FadeInText;
