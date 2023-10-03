import React, { useEffect, useState } from "react";
import styles from "../styles/sidePanel.module.scss";
import { useCart } from "../../stores/CartStore";
import CartIcon from "./icons/cartIcon";
import { breakpoints } from "../styles/breakpoints";
import CartProduct from "./cartProduct";
import Button from "./button";

interface SidePanelProps {
  isOpen: boolean;
  onClose: () => void;
}
interface item {
  id: string;
  name: string;
  price: number;
  description: string;
  descriptionOnHover: string;
  imageSrc: string;
  quantity: number;
}

const SidePanel: React.FC<SidePanelProps> = ({ isOpen, onClose }) => {
  const { setIsSidePanelOpen, items, getSameItemCount } = useCart();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsSmallScreen(width <= parseInt(breakpoints.iPad));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCloseClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const cartItemsById = items.reduce<{ [id: string]: item }>((items, item) => {
    items[item.id] = { ...item, quantity: 1 };
    return items;
  }, {});
  const uniqueCartItems = Object.values(cartItemsById);

  const cartProducts = uniqueCartItems.map((item) => (
    <CartProduct
      key={item.id}
      name={item.name}
      price={item.price}
      imageLink={item.imageSrc}
      id={item.id}
      numberOfSameProduct={getSameItemCount(item.id)}
      item={item}
    />
  ));
  return (
    <>
      {isOpen && (
        <div className={styles.overlay} onClick={handleCloseClick}>
          <div className={styles.panel}>
            <div className={styles.content}>
              <div className={styles.panelHeader}>
                {/* close button */}
                <div
                  onClick={() => setIsSidePanelOpen(false)}
                  className={styles.closeIcon}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="40"
                    viewBox="0 0 42 40"
                    fill="none"
                  >
                    <line
                      x1="1.85355"
                      y1="0.646447"
                      x2="40.8535"
                      y2="39.6464"
                      stroke="black"
                    />
                    <line
                      y1="-0.5"
                      x2="55.1543"
                      y2="-0.5"
                      transform="matrix(-0.707107 0.707107 0.707107 0.707107 40.5 1)"
                      stroke="black"
                    />
                  </svg>
                </div>
                {/* close button */}
                <CartIcon
                  size={isSmallScreen ? "small" : "normal"}
                  isClickable
                  showsCounts
                />
              </div>
              {/* panel Body */}

              {items.length ? (
                <div className={styles.panelBody}>
                  <div className={styles.fadeoutEffect}>
                    <div className={styles.productsContainer}>
                      {cartProducts}
                    </div>
                  </div>

                  <div className={styles.checkoutSummery}>
                    <div className={styles.taxeAndSum}>
                      <div className={styles.taxe}>
                        <div className={styles.label}>Taxes</div>
                        <div>200 €</div>
                      </div>
                      <div className={styles.sum}>
                        <div className={styles.label}>Total</div>
                        <div>1000 €</div>
                      </div>
                    </div>
                    <Button
                      text={"Go to checkout"}
                      onClick={() => {
                        console.log("checkout");
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className={styles.emptyCart}>Your cart is empty </div>
              )}
              {/* FIN - panel Body */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SidePanel;
