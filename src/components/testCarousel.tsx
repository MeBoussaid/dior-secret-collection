import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/testCarousel.module.scss";
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

const TestCarousel: React.FC = () => {
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

  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentItemIndex(
      (currentItemIndex - 1 + products.length) % products.length
    );
  };

  const handleNextClick = () => {
    setCurrentItemIndex((currentItemIndex + 1) % products.length);
  };
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
        isPrevOrNext={index !== currentItemIndex}
      />
    ));

  // to detect the current product in mobile version
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

  //  tests ici
  const [offset, setOffset] = useState(0);

  const handleTestNextClick = () => {
    setOffset(offset - 30);
    console.log("offset NextClick", offset);
  };

  const handleTestPreviousClick = () => {
    setOffset(offset + 30);
    console.log("offset", offset);
    console.log("offset PreviousClick", offset);
  };
  //  tests ici
  // to detect the current product in mobile version
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
                {offset <= -30 && (
                  <div className={`${styles.button} ${styles.buttonPrevious}`}>
                    <ArrowButton
                      direction="previous"
                      onClick={handleTestPreviousClick}
                      // onClick={handlePrevClick}
                    />
                  </div>
                )}
                {/* chevron left  */}
                {/* // le test est ici */}
                <div
                  className={styles.divsContainer}
                  style={{
                    width: "100vw",
                    display: "flex",
                    justifyContent: "space-between",
                    transform: `translateX(${offset + 30}vw)`,
                    transition: "transform 0.5s ease-in-out",
                  }}
                >
                  <div className={styles.prevOrNextDivContainer}>
                    <div
                      className={styles.prevOrNextDiv}
                      style={{
                        transition:
                          "transform 0.5s ease-in-out, width 0.5s ease-in-out",
                        transform: `scale(${offset === 0 ? 2 : 1})`,
                      }}
                    >
                      {products[0]}
                    </div>
                  </div>
                  <div className={styles.prevOrNextDivContainer}>
                    <div
                      className={styles.prevOrNextDiv}
                      style={{
                        transition:
                          "transform 0.5s ease-in-out, width 0.5s ease-in-out",
                        transform: `scale(${offset === -30 ? 2 : 1})`,
                      }}
                    >
                      {products[1]}
                    </div>
                  </div>
                  <div className={styles.prevOrNextDivContainer}>
                    <div
                      className={styles.prevOrNextDiv}
                      style={{
                        transition:
                          "transform 0.5s ease-in-out, width 0.5s ease-in-out",
                        transform: `scale(${offset === -60 ? 2 : 1})`,
                      }}
                    >
                      {products[2]}
                    </div>
                  </div>
                </div>
                {/* le test finit ici */}
                {/* chevron right  */}
                {offset >= -30 && (
                  <div className={`${styles.button} ${styles.buttonNext}`}>
                    <ArrowButton
                      direction="next"
                      onClick={handleTestNextClick}
                      // onClick={handleNextClick}
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
                if (isMobile) {
                  handleMobileAddToCartClick();
                } else {
                  const currentProduct = products[currentItemIndex].props;
                  addItem(currentProduct);
                }

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
          <p>Sorry, Something went wrong !</p>
        </div>
      )}

      <SidePanel
        isOpen={isSidePanelOpen}
        onClose={() => setIsSidePanelOpen(false)}
      />
    </div>
  );
};

export default TestCarousel;
