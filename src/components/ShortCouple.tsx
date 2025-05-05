import React from 'react';
import { motion } from 'framer-motion';
import Image18 from '../assets/image-18.png';
import './ShortCouple.scss';

const ShortCouple: React.FC = () => {
  return (
    <div className="short-couple-container">
      <div className="short-couple">
        <motion.span
          className="short-couple__name"
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          exit={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for elegant motion
            delay: 0.2,
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          V
        </motion.span>

        <motion.span
          className="short-couple__separate"
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          exit={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for elegant motion
            delay: 0.3,
          }}
          viewport={{ once: false, amount: 0.3 }}
        ></motion.span>

        <motion.span
          className="short-couple__name"
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          exit={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for elegant motion
            delay: 0.4,
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          T
        </motion.span>
      </div>

      <motion.img
        className="short-couple__flower"
        src={Image18}
        loading="lazy"
        alt=""
        width={200}
        initial={{ opacity: 0, scale: 0.8, y: 10, filter: 'blur(8px)' }}
        exit={{ opacity: 0, scale: 0.8, y: 10, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
        transition={{
          duration: 1.8,
          ease: [0.34, 1.56, 0.64, 1], // Spring-like motion
        }}
        viewport={{ once: false, amount: 0.3 }}
      />
    </div>
  );
};

export default ShortCouple;
