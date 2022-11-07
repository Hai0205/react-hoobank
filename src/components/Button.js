import React from "react";

const Button = ({ className, children }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
