import React from 'react';
import { motion } from 'framer-motion';

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  icon?: JSX.Element;
  error?: string;
};

const Input: React.FC<InputProps> = ({ label, value, onChange, icon, error }) => {
  const [focused, setFocused] = React.useState(false);

  return (
    <div className={`input ${focused ? 'focused' : ''} ${error ? 'error' : ''}`}>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {icon && <span className="icon">{icon}</span>}
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default Input;