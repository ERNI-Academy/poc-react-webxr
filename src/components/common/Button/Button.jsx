import React from "react";
import styles from "./Button.module.css";

export const Button = ({ children, onClick, animate, disabled }) => {
  return (
    <button
      className={`${styles.button} ${animate && styles.animation}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
