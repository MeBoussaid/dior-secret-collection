import React from "react";
import styles from "../styles/addToCartButton.module.scss";

interface ButtonProps {
  onClick: () => void;
}

const AddToCartButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <div className={styles.clearfix}></div>
      Add to cart
      <div className={styles.icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="65"
          height="65"
          viewBox="0 0 65 65"
          fill="none"
        >
          <g clip-path="url(#clip0_75_358)">
            <path
              d="M20.3125 60.9375C22.5562 60.9375 24.375 59.1187 24.375 56.875C24.375 54.6313 22.5562 52.8125 20.3125 52.8125C18.0688 52.8125 16.25 54.6313 16.25 56.875C16.25 59.1187 18.0688 60.9375 20.3125 60.9375Z"
              fill="black"
            />
            <path
              d="M48.75 60.9375C50.9937 60.9375 52.8125 59.1187 52.8125 56.875C52.8125 54.6313 50.9937 52.8125 48.75 52.8125C46.5063 52.8125 44.6875 54.6313 44.6875 56.875C44.6875 59.1187 46.5063 60.9375 48.75 60.9375Z"
              fill="black"
            />
            <path
              d="M56.875 14.2188H11.8219L10.1562 5.68755C10.0613 5.22183 9.80601 4.80416 9.43487 4.50724C9.06372 4.21033 8.6002 4.05296 8.125 4.06255H0V8.12505H6.45937L14.2188 47.125C14.3137 47.5908 14.569 48.0084 14.9401 48.3053C15.3113 48.6023 15.7748 48.7596 16.25 48.75H52.8125V44.6875H17.9156L16.25 36.5625H52.8125C53.282 36.574 53.7411 36.4224 54.1114 36.1335C54.4818 35.8447 54.7406 35.4364 54.8438 34.9782L58.9062 16.6969C58.9743 16.3955 58.9727 16.0826 58.9016 15.7819C58.8305 15.4812 58.6917 15.2007 58.4959 14.9618C58.3 14.7228 58.0522 14.5317 57.7713 14.4029C57.4904 14.2742 57.1839 14.2112 56.875 14.2188ZM51.1875 32.5H15.4781L12.6344 18.2813H54.3359L51.1875 32.5Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_75_358">
              <rect width="65" height="65" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </button>
  );
};

export default AddToCartButton;
