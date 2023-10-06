import React from "react";
import styles from "../styles/button.module.scss";

interface ButtonProps {
  onClick: () => void;
  text: string;
  isRounder?: boolean;
}

function Button({ onClick, text, isRounder }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${isRounder ? styles.rounderBorders : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
