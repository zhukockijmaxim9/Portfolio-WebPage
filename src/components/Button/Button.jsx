import React from "react";
import "./Button.scss";

const Button = ({ children, onClick, type = "button", disabled = false, className = "", ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button ${className}`} // Добавляем классы
      {...props} // Остальные пропсы (например, aria-label)
    >
      {children}
    </button>
  );
};

export default Button;
