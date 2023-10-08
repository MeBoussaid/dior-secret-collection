import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/carousel.module.scss";
import ArrowButton from "./arrowButton";
import AddToCartButton from "./addToCartButton";
import SidePanel from "@/components/sidePanel";
import client from "../../graphql/apolloClient";
import { useQuery, gql } from "@apollo/client";
import { useCart } from "../../stores/CartStore";
import Product from "./product";
import { breakpoints } from "@/styles/breakpoints";

interface ProductData {
  id: string;
  name: string;
  price: number;
  description: string;
  descriptionOnHover: string;
  imageSrc: string;
}

const GET_PRODUCTS = gql`
  query {
    products {
      id
      name
      price
      description
      descriptionOnHover
      imageSrc
    }
  }
`;

const Carousel: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < parseInt(breakpoints.iPad));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { addItem, setIsSidePanelOpen, isSidePanelOpen } = useCart();

  const { error, data } = useQuery(GET_PRODUCTS, { client });

  const products =
    !error &&
    data &&
    data.products.map((product: ProductData, index: number) => (
      <Product
        id={product.id}
        key={product.id}
        name={product.name}
        price={product.price}
        description={product.description}
        descriptionOnHover={product.descriptionOnHover}
        imageSrc={product.imageSrc}
        isAnimated={index === 0 ? true : false}
      />
    ));

  const [visibleProductIndex, setVisibleProductIndex] = useState(0);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMobileAddToCartClick = () => {
    const visibleProductIndex = productRefs.current.findIndex((productRef) => {
      if (productRef) {
        const { left, right } = productRef.getBoundingClientRect();
        return left <= window.innerWidth / 2 && right >= window.innerWidth / 2;
      }
      return false;
    });
    setVisibleProductIndex(visibleProductIndex);
    const currentProduct = products[visibleProductIndex].props;
    addItem(currentProduct);
  };

  const [offset, setOffset] = useState(0);

  const handleTestNextClick = () => {
    setOffset(offset - 100 / 3);
    console.log("offset NextClick", offset);
  };

  const handleTestPreviousClick = () => {
    setOffset(offset + 100 / 3);
    console.log("offset", offset);
    console.log("offset PreviousClick", offset);
  };

  return (
    <div>
      {!error && products && products.length > 0 ? (
        <>
          <div className={styles.carousel}>
            {isMobile ? (
              <div className={styles.mobileContainer}>
                {products &&
                  products.map((product: React.ReactNode, index: number) => (
                    <div
                      className={styles.productMobileContainer}
                      key={index}
                      ref={(el) => (productRefs.current[index] = el)}
                    >
                      {product}
                    </div>
                  ))}
              </div>
            ) : (
              <>
                {/* chevron left  */}
                {offset <= -(100 / 3) && (
                  <div className={`${styles.button} ${styles.buttonPrevious}`}>
                    <ArrowButton
                      direction="previous"
                      onClick={handleTestPreviousClick}
                    />
                  </div>
                )}
                {/* chevron left  */}

                <div
                  style={{
                    width: "100vw",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "flex-end",
                    transform: `translateX(${offset + 100 / 3}vw)`,
                    transition: "transform 0.5s ease-in-out",
                  }}
                >
                  <div
                    className={styles.prevOrNextDivContainer}
                    ref={(el) => (productRefs.current[0] = el)}
                  >
                    <div
                      className={styles.prevOrNextDiv}
                      style={{
                        filter: `blur(${offset != 0 ? 1 : 0}px)`,
                        opacity: `${offset != 0 ? 0.5 : 1}`,

                        transition:
                          "transform 0.5s ease-in-out, width 0.5s ease-in-out,filter 0.5s ease-in-out, opacity 0.5s ease-in-out",
                        transform: `scale(${offset === 0 ? 2 : 1})`,
                        transformOrigin: `${offset === 0 && "bottom"}`,
                      }}
                    >
                      {products[0]}
                    </div>
                  </div>
                  <div
                    className={styles.prevOrNextDivContainer}
                    ref={(el) => (productRefs.current[1] = el)}
                  >
                    <div
                      className={styles.prevOrNextDiv}
                      style={{
                        filter: `blur(${offset != -(100 / 3) ? 1 : 0}px)`,
                        opacity: `${offset != -(100 / 3) ? 0.5 : 1}`,
                        transition:
                          "transform 0.5s ease-in-out, width 0.5s ease-in-out,filter 0.5s ease-in-out, opacity 0.5s ease-in-out",
                        transform: `scale(${offset === -(100 / 3) ? 2 : 1})`,
                        transformOrigin: `${offset === -(100 / 3) && "bottom"}`,
                      }}
                    >
                      {products[1]}
                    </div>
                  </div>
                  <div
                    className={styles.prevOrNextDivContainer}
                    ref={(el) => (productRefs.current[2] = el)}
                  >
                    <div
                      className={styles.prevOrNextDiv}
                      style={{
                        filter: `blur(${offset != -(2 * (100 / 3)) ? 1 : 0}px)`,
                        opacity: `${offset != -(2 * (100 / 3)) ? 0.5 : 1}`,
                        transition:
                          "transform 0.5s ease-in-out, width 0.5s ease-in-out,filter 0.5s ease-in-out, opacity 0.5s ease-in-out",
                        transform: `scale(${
                          offset === -(2 * (100 / 3)) ? 2 : 1
                        })`,
                        transformOrigin: `${
                          offset === -(2 * (100 / 3)) && "bottom"
                        }`,
                      }}
                    >
                      {products[2]}
                    </div>
                  </div>
                </div>
                {/* chevron right  */}
                {offset >= -(100 / 3) && (
                  <div className={`${styles.button} ${styles.buttonNext}`}>
                    <ArrowButton
                      direction="next"
                      onClick={handleTestNextClick}
                    />
                  </div>
                )}
                {/* chevron right  */}
              </>
            )}
          </div>

          {/* add to cart button  */}
          <div className={styles.addToCartButtonContainer}>
            <AddToCartButton
              onClick={() => {
                handleMobileAddToCartClick();

                setIsSidePanelOpen(true);
              }}
            />
          </div>
          {/* add to cart button  */}
        </>
      ) : (
        <div className={styles.loading}>
          <p>Loading ...</p>
        </div>
      )}

      {error && (
        <div className={styles.error}>
          <p>Sorry, something went wrong !</p>
        </div>
      )}

      <SidePanel
        isOpen={isSidePanelOpen}
        onClose={() => setIsSidePanelOpen(false)}
      />
    </div>
  );
};

export default Carousel;
