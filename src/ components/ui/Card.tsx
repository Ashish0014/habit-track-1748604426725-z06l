import React from 'react';
import { motion } from 'framer-motion';

type CardProps = {
  hoverEffect?: boolean;
  loadingSkeleton?: boolean;
  layout?: 'horizontal' | 'vertical';
  imageSrc?: string;
};

const Card: React.FC<CardProps> = ({ hoverEffect, loadingSkeleton, layout, imageSrc, children }) => {
  return (
    <motion.div
      className={`card ${hoverEffect ? 'hover-effect' : ''} ${loadingSkeleton ? 'loading-skeleton' : ''} ${layout}`}
    >
      {imageSrc && <img src={imageSrc} alt="Card Image" />}
      <div className="content">{children}</div>
    </motion.div>
  );
};

export default Card;