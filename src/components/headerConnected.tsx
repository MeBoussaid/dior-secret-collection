import React, { useEffect, useState } from "react";
import Logo from "@/components/logo";
import CartIcon from "@/components/icons/cartIcon";
import styles from "../styles/headerConnected.module.scss";
import TheKey from "@/components/icons/theKey";
import { breakpoints } from "../styles/breakpoints";

// import FilterAndSort from "@/components/filterAndSort";

const HeaderConnected: React.FC = () => {
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

  return (
    <header className={styles.headerConnected}>
      <div className={styles.headerSup}>
        <div className={styles.logoContainer}>
          <Logo size={isSmallScreen ? "small" : "normal"} />
        </div>
        <div className={styles.cartIconContainer}>
          <CartIcon
            size={isSmallScreen ? "small" : "normal"}
            isClickable
            showsCounts
          />
        </div>
      </div>

      <div className={styles.headerSub}>
        <div className={styles.headerSubInner}>
          <div className={styles.secretCollectionLogo}>
            <TheKey />
            <span className={styles.secretCollectionText}>
              THE SECRET COLLECTION
            </span>
          </div>

          {/* <div className={styles.headerFiltersContainer}>
            <FilterAndSort filterOptions={["1", "2"]} />
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default HeaderConnected;
