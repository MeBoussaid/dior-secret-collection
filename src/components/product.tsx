/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/product.module.scss";
import { formatPrice } from "@/helpers/helpers";

interface ProductProps {
  id: string;
  name: string;
  price: number;
  description: string;
  descriptionOnHover: string;
  imageSrc: string;
  isPrevOrNext: boolean;
}

const Product: React.FC<ProductProps> = ({
  id,
  name,
  price,
  description,
  descriptionOnHover,
  imageSrc,
  isPrevOrNext,
}) => {
  const formattedPrice = formatPrice(price);
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt="Product Image" className={styles.image} />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.productDescription}>
          <div className={styles.toggleContentOnHover}>
            <div
              className={`${styles.initialContent} ${
                isPrevOrNext ? styles.smallProductDescription : ""
              }`}
            >
              {description}
            </div>

            <div
              className={`${styles.hoveredContent} ${
                isPrevOrNext ? styles.smallProductDescription : ""
              }`}
            >
              {descriptionOnHover}
            </div>
          </div>
        </div>
        <div className={styles.productSpecifications}>
          <div
            className={`${styles.productName} ${
              isPrevOrNext ? styles.smallProductName : ""
            }`}
          >
            {name}
          </div>
          <div
            className={`${styles.productPrice} ${
              isPrevOrNext ? styles.smallProductPrice : ""
            }`}
          >
            {formattedPrice}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
