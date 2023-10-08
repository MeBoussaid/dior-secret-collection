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
  isAnimated: boolean;
}

const Product: React.FC<ProductProps> = ({
  name,
  price,
  description,
  descriptionOnHover,
  imageSrc,
  isAnimated,
}) => {
  const formattedPrice = formatPrice(price);
  return (
    <div className={`${styles.card} ${isAnimated ? styles.animatedCard : ""}`}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt="Product Image" className={styles.image} />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.productDescription}>
          <div className={styles.toggleContentOnHover}>
            <div className={styles.initialContent}>{description}</div>

            <div className={styles.hoveredContent}>{descriptionOnHover}</div>
          </div>
        </div>
        <div className={styles.productSpecifications}>
          <div
            className={`${styles.productName} ${
              isAnimated ? styles.animatedName : ""
            }`}
          >
            {name}
          </div>
          <div
            className={`${styles.productPrice} ${
              isAnimated ? styles.animatedPrice : ""
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
