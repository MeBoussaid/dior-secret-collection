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
            <span>item</span>
          </div>
        </div>
      </div>
      <div className={styles.deleteContainer}>X</div>
    </div>
  );
};

export default CartProduct;
