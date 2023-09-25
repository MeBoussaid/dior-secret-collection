import React, { useState, useEffect } from "react";
import styles from "../styles/carousel.module.scss";
import ArrowButton from "./arrowButton";
import AddToCartButton from "./addToCartButton";
import SidePanel from "@/components/sidePanel";
import client from "../../graphql/apolloClient";
import { useQuery, gql } from "@apollo/client";

import { useCart } from "../../stores/CartStore";
import Product from "./product";

interface ProductData {
  id: string;
  name: string;
  price: string;
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
  const { addItem, setIsSidePanelOpen, isSidePanelOpen } = useCart();

  const [currentItemIndex, setCurrentItemIndex] = React.useState(0);

  const handlePrevClick = () => {
    setCurrentItemIndex(
      (currentItemIndex - 1 + products.length) % products.length
    );
  };

  const handleNextClick = () => {
    setCurrentItemIndex((currentItemIndex + 1) % products.length);
  };
  const { loading, error, data } = useQuery(GET_PRODUCTS, { client });

  const products =
    data &&
    data.products.map((product: ProductData, index: number) => (
      <Product
        key={product.id}
        name={product.name}
        price={product.price}
        description={product.description}
        descriptionOnHover={product.descriptionOnHover}
        imageSrc={product.imageSrc}
        isPrevOrNext={index !== currentItemIndex}
      />
    ));
  return (
    <div>
      {products && products.length > 0 ? (
        <>
          <div className={styles.carousel}>
            {currentItemIndex > 0 && (
              <div className={`${styles.button} ${styles.buttonPrevious}`}>
                <ArrowButton direction="previous" onClick={handlePrevClick} />
              </div>
            )}
            {/* prevous dive */}
            <div className={styles.prevOrNextDivContainer}>
              {currentItemIndex > 0 && (
                <div className={styles.prevOrNextDiv}>
                  {products[currentItemIndex - 1]}
                </div>
              )}
            </div>
            {/* prevous dive */}

            {/* current dive */}

            <div className={styles.currentDiv}>
              {products[currentItemIndex]}
            </div>

            {/* current dive */}

            {/* next div */}
            <div className={styles.prevOrNextDivContainer}>
              {currentItemIndex < products.length - 1 && (
                <div className={styles.prevOrNextDiv}>
                  {products[currentItemIndex + 1]}
                </div>
              )}
            </div>
            {/* next div */}
            {/* </div> */}
            {currentItemIndex < products.length - 1 && (
              <div className={`${styles.button} ${styles.buttonNext}`}>
                <ArrowButton direction="next" onClick={handleNextClick} />
              </div>
            )}
          </div>
          <div className={styles.addToCartButtonContainer}>
            <AddToCartButton
              onClick={() => {
                const currentProduct = products[currentItemIndex].props;
                addItem(currentProduct);
                setIsSidePanelOpen(true);
              }}
            />
          </div>
        </>
      ) : (
        <div className={styles.loading}>
          <p>Loading ..</p>
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
