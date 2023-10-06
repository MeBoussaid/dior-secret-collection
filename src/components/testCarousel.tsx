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
    console.log("offset", offset);
    setOffset(offset - 30);
  };

  const handleTestPreviousClick = () => {
    setOffset(offset + 30);
  };
  //  tests ici
  // to detect the current product in mobile version
  return (
    <div>
      {!error && products && products.length > 0 ? (
        <>
          // test ici
          <>
            <div>
              {/* cotainer of divs */}
              <div
                className={styles.divsContainer}
                style={{
                  backgroundColor: "pink",
                  width: "100vw",
                  display: "flex",
                  justifyContent: "space-between",
                  transform: `translateX(${offset + 30}vw)`,
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                <div
                  style={{
                    backgroundColor: "red",
                    fontSize: "50px",
                    height: "400px",
                    width: "30vw",
                    transition:
                      "transform 0.5s ease-in-out, width 0.5s ease-in-out",
                    transform: `scale(${offset === 0 ? 2 : 1})`,
                  }}
                >
                  A
                </div>
                <div
                  style={{
                    backgroundColor: "green",
                    fontSize: "50px",
                    height: "400px",
                    width: "30vw",
                    transition:
                      "transform 0.5s ease-in-out, width 0.5s ease-in-out",
                    transform: `scale(${offset === -30 ? 2 : 1})`,
                  }}
                >
                  B
                </div>
                <div
                  style={{
                    backgroundColor: "blue",
                    fontSize: "50px",
                    height: "400px",
                    width: "30vw",
                    transition:
                      "transform 0.5s ease-in-out, width 0.5s ease-in-out",
                    transform: `scale(${offset === -60 ? 2 : 1})`,
                  }}
                >
                  C
                </div>
              </div>
            </div>
          </>
          // FIN - test ici
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

            {offset <= 0 && (
              <button onClick={handleTestPreviousClick}>+=== Previous</button>
            )}

            {offset >= 0 && (
              <button onClick={handleTestNextClick}>Next ===+</button>
            )}
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
