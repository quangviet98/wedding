import React from 'react';
// import Bow from '../assets/bow.svg'
import Ring from '../assets/ring.svg';

interface LeafProps {
  visible?: boolean;
}

const Leaf: React.FC<LeafProps> = ({ visible = true }) => {
  const leafClass = visible ? 'leaf' : '';

  return (
    <img
      src={Ring}
      loading="lazy"
      alt=""
      width={62}
      className={`image-subtitle fade-in ${leafClass}`}
      style={{
        transformStyle: 'preserve-3d',
        opacity: 1,
      }}
    />
  );
};

export default Leaf;
