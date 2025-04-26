import React from 'react';
// import Bow from '../assets/bow.svg'
import Image18 from '../assets/image-18.png';
import './ShortCouple.scss';

interface ShortCoupleProps {
  visible?: boolean;
}

const ShortCouple: React.FC<ShortCoupleProps> = ({ visible = true }) => {
  const leafClass = visible ? 'visible' : '';

  return (
    <div className={`short-couple-container ${leafClass}`}>
      <div className="short-couple">
        <span className="short-couple__name">V</span>
        <span className="short-couple__separate"></span>
        <span className="short-couple__name">T</span>
      </div>
      <img className="short-couple__flower" src={Image18} loading="lazy" alt="" width={200} />
    </div>
  );
};

export default ShortCouple;
