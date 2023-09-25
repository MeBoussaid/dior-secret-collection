import React from "react";
import styles from "../styles/button.module.scss";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

function Button({ onClick, text }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
