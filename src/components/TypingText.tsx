import React, { useState } from "react";
import "../animation.scss";

interface TypingTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  typingWidth?: string;
  animationDelay?: string;
  animationDuration?: string;
}

const TypingText: React.FC<TypingTextProps> = ({
  text,
  className = "",
  style = {},
  typingWidth,
  animationDelay,
  animationDuration,
}) => {
  const [active, setActive] = useState(false);
  const [done, setDone] = useState(false);

  const stepCount = text.length;
  const width = typingWidth ?? `${text.length}ch`;

  return (
      <span
      className={`typing${active ? " active" : ""}${done ? " done" : ""} ${className}`}
      style={{
        "--step": stepCount,
        "--typing-width": width,
        animationDelay,
        animationDuration,
        display: "inline-block",
        ...style,
      } as React.CSSProperties}
      onAnimationStart={() => {
        setActive(true);
        setDone(false);
      }}
      onAnimationEnd={() => {
        setActive(false);
        setDone(true);
      }}
    >
      {text}
    </span>
  );
};

export default TypingText;