import React, { useRef, useEffect, useState } from "react";
import styles from "../styles/carouselV2.module.scss";

const CarouselV2: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!isAnimating && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const childRects = Array.from(containerRef.current.children).map(
          (child) => child.getBoundingClientRect()
        );
        const center = containerRect.left + containerRect.width / 2;
        const distances = childRects.map((childRect) =>
          Math.abs(center - (childRect.left + childRect.width / 2))
        );
        const minDistance = Math.min(...distances);
        const nextIndex = distances.indexOf(minDistance);
        if (nextIndex !== currentIndex) {
          setIsAnimating(true);
          setCurrentIndex(nextIndex);
          setTimeout(() => {
            setIsAnimating(false);
          }, 500);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentIndex, isAnimating]);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer} ref={containerRef}>
        <div
          className={`${styles.carouselItem} ${
            currentIndex === 0 ? styles.centered : ""
          }`}
        >
          A
        </div>
        <div
          className={`${styles.carouselItem} ${
            currentIndex === 1 ? styles.centered : ""
          } ${styles.big}`}
        >
          B
        </div>
        <div
          className={`${styles.carouselItem} ${
            currentIndex === 2 ? styles.centered : ""
          }`}
        >
          C
        </div>
      </div>
    </div>
  );
};

export default CarouselV2;
