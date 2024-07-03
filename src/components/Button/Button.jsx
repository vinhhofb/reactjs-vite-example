// Button.jsx

import React from 'react';

const Button = ({ onClick, buttonName, className, color = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`text-white ${color} focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ${className}`}
    >
      {buttonName}
    </button>
  );
};

export default Button;
