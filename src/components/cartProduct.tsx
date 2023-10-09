import React from "react";
import styles from "../styles/cartProduct.module.scss";
import { formatPrice } from "@/helpers/helpers";
import { CartItem } from "@/commonTypes/commonTypes";
import { useCart } from "../../stores/CartStore";
import BinIcon from "./icons/binIcon";

interface cartProductProps {
  id: string;
  name: string;
  price: number;
  imageLink: string;
  numberOfSameProduct: number;
  item: CartItem;
}

const CartProduct: React.FC<cartProductProps> = ({
  id,
  name,
  price,
  imageLink,
  numberOfSameProduct,
  item,
}) => {
  const { addItem, removeItemsById, removeOneItemById } = useCart();
  const formattedPrice = formatPrice(price);
  return (
    <div className={styles.cardContainer}>
      {/* ----------- card content -------- */}
      <div className={styles.card}>
        <div className={styles.borderGradient}>
          <div className={styles.content}>
            <div className={styles.imgContainer}>
              <img className={styles.img} src={imageLink} alt={name} />
            </div>
            <div className={styles.productSpecs}>
              <span className={styles.name}>{name}</span>
              <span className={styles.price}>{formattedPrice}</span>

              {/* increase/decrease items */}
              <span className={styles.quantityControls}>
                {/* remove button  */}

                <button
                  className={styles.quantityButton}
                  onClick={() => {
                    removeOneItemById(item.id);
                  }}
                >
                  <span className={styles.quantityIcon}>-</span>
                </button>

                {/* FIN - remove button  */}
                <span className={styles.itemsCount}>
                  {numberOfSameProduct}{" "}
                  {numberOfSameProduct > 1 ? "items" : "item"}
                </span>
                {/* add button */}

                <button
                  className={styles.quantityButton}
                  onClick={() => {
                    addItem(item);
                  }}
                >
                  <span className={styles.quantityIcon}>+</span>
                </button>

                {/* END - add button */}
              </span>
              {/* increase/decrease items */}
            </div>
          </div>
        </div>
      </div>
      {/* ----------- card content -------- */}
      {/* -------- delete btn container--------- */}
      <div className={styles.deleteContainer}>
        <div
          className={styles.deleteButton}
          onClick={() => {
            removeItemsById(item.id);
          }}
        >
          <BinIcon />
        </div>
      </div>
      {/* -------- delete btn container--------- */}
    </div>
  );
};

export default CartProduct;
