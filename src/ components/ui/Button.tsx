import React from 'react';
import { motion } from 'framer-motion';

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'outline';
  loading?: boolean;
  icon?: JSX.Element;
  rippleEffect?: boolean;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ variant, loading, icon, rippleEffect, onClick, children }) => {
  const buttonVariants = {
    rest: { scale: 1 },
    pressed: { scale: 0.95 },
  };

  return (
    <motion.button
      whileTap="pressed"
      className={`button ${variant} ${loading ? 'loading' : ''}`}
      onClick={onClick}
    >
      {icon && <span className="icon">{icon}</span>}
      {children}
      {rippleEffect && <div className="ripple" />}
    </motion.button>
  );
};

export default Button;