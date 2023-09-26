import styles from "../styles/cartProduct.module.scss";

import React from "react";

interface cartProductProps {
  id: string;
  name: string;
  price: number;
  imageLink: string;
}

const CartProduct: React.FC<cartProductProps> = ({
  id,
  name,
  price,
  imageLink,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.borderGradient}>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <img className={styles.img} src={imageLink} alt={name} />
          </div>
          <div className={styles.productSpecs}>
            <span className={styles.name}>{name}</span>
            <span className={styles.price}>{price}</span>

            {/* increase/decrease items */}
            <span className={styles.quantityControls}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 25 25"
                fill="none"
              >
                <circle cx="12.5" cy="12.5" r="12" stroke="#E0E0E0" />
              </svg>
              <span className={styles.itemsCount}>{id} item</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 25 25"
                fill="none"
              >
                <circle cx="12.5" cy="12.5" r="12" stroke="#E0E0E0" />
              </svg>
            </span>
            {/* increase/decrease items */}
          </div>
        </div>
      </div>
      <div className={styles.deleteContainer}>
        <div className={styles.deleteButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 28 28"
            fill="none"
          >
            <g clip-path="url(#clip0_209_164)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.2 22.0001H15.4V11.3334H18.2V22.0001ZM12.6 22.0001H9.80001V11.3334H12.6V22.0001ZM21 24.6667H7V8.66675H21V24.6667ZM18.2 6.00008H9.80001V3.33341H18.2V6.00008ZM7 6.00008V0.666748H21V6.00008H28V8.66675H23.8V27.3334H4.19999V8.66675H0V6.00008H7Z"
                fill="#969696"
              />
            </g>
            <defs>
              <clipPath id="clip0_209_164">
                <rect
                  width="28"
                  height="28"
                  fill="white"
                  transform="matrix(-1 0 0 1 28 0)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
