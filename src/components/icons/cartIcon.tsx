import React from "react";
import styles from "../../styles/cartIcon.module.scss";
import { useCart } from "../../../stores/CartStore";

interface SvgIconProps {
  size: "normal" | "small";
  fill?: string;
  isClickable?: boolean;
  showsCounts?: boolean;
}

const CartIcon: React.FC<SvgIconProps> = ({
  size,
  fill = "black",
  isClickable = false,
  showsCounts = false,
}) => {
  const { setIsSidePanelOpen, getCartItemsCount } = useCart();
  const handleCartClick = () => {
    isClickable && setIsSidePanelOpen(true);
  };

  const cartItemsCount = getCartItemsCount();

  if (size === "small") {
    return (
      <div
        onClick={handleCartClick}
        className={styles.cartIconContainer}
        style={{
          cursor: isClickable ? "pointer" : "default",
        }}
      >
        {showsCounts && (
          <span className={styles.itemsCount}>{cartItemsCount}</span>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
        >
          <g clip-path="url(#clip0_83_660)">
            <path
              d="M9.0625 27.1875C10.0635 27.1875 10.875 26.376 10.875 25.375C10.875 24.374 10.0635 23.5625 9.0625 23.5625C8.06148 23.5625 7.25 24.374 7.25 25.375C7.25 26.376 8.06148 27.1875 9.0625 27.1875Z"
              fill="black"
            />
            <path
              d="M21.75 27.1875C22.751 27.1875 23.5625 26.376 23.5625 25.375C23.5625 24.374 22.751 23.5625 21.75 23.5625C20.749 23.5625 19.9375 24.374 19.9375 25.375C19.9375 26.376 20.749 27.1875 21.75 27.1875Z"
              fill="black"
            />
            <path
              d="M25.375 6.34369H5.27438L4.53125 2.53744C4.48888 2.32966 4.37499 2.14331 4.2094 2.01084C4.04381 1.87837 3.83701 1.80816 3.625 1.81244H0V3.62494H2.88188L6.34375 21.0249C6.38612 21.2327 6.50001 21.4191 6.6656 21.5515C6.83119 21.684 7.03799 21.7542 7.25 21.7499H23.5625V19.9374H7.99313L7.25 16.3124H23.5625C23.772 16.3176 23.9768 16.2499 24.142 16.121C24.3073 15.9922 24.4227 15.81 24.4688 15.6056L26.2813 7.44932C26.3116 7.31485 26.3109 7.17523 26.2792 7.04108C26.2475 6.90693 26.1855 6.78178 26.0982 6.67517C26.0108 6.56856 25.9002 6.48328 25.7749 6.42584C25.6496 6.3684 25.5128 6.3403 25.375 6.34369ZM22.8375 14.4999H6.90563L5.63688 8.15619H24.2422L22.8375 14.4999Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_83_660">
              <rect width="29" height="29" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    );
  }

  return (
    <div
      onClick={handleCartClick}
      style={{
        cursor: isClickable ? "pointer" : "default",
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
      }}
    >
      {showsCounts && (
        <span className={styles.itemsCount}>{cartItemsCount}</span>
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <g clip-path="url(#clip0_675_408)">
          <path
            d="M15 45C16.6569 45 18 43.6569 18 42C18 40.3431 16.6569 39 15 39C13.3431 39 12 40.3431 12 42C12 43.6569 13.3431 45 15 45Z"
            fill="black"
          />
          <path
            d="M36 45C37.6569 45 39 43.6569 39 42C39 40.3431 37.6569 39 36 39C34.3431 39 33 40.3431 33 42C33 43.6569 34.3431 45 36 45Z"
            fill="black"
          />
          <path
            d="M42 10.5H8.73L7.5 4.2C7.42987 3.85609 7.24136 3.54765 6.96729 3.32839C6.69321 3.10913 6.35092 2.99292 6 3H0V6H4.77L10.5 34.8C10.5701 35.1439 10.7586 35.4523 11.0327 35.6716C11.3068 35.8909 11.6491 36.0071 12 36H39V33H13.23L12 27H39C39.3467 27.0085 39.6857 26.8965 39.9592 26.6832C40.2327 26.4699 40.4238 26.1684 40.5 25.83L43.5 12.33C43.5503 12.1074 43.5491 11.8763 43.4966 11.6543C43.4441 11.4323 43.3416 11.2251 43.1969 11.0487C43.0523 10.8722 42.8693 10.7311 42.6619 10.636C42.4545 10.5409 42.2281 10.4944 42 10.5ZM37.8 24H11.43L9.33 13.5H40.125L37.8 24Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_675_408">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default CartIcon;
