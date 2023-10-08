import React, { useState } from "react";
import styles from "../styles/filterAndSort.module.scss";

import SortIcon from "./icons/sortIcon";
import FiltersIcon from "./icons/filtersIcon";

interface Props {
  filterOptions: string[];
}

const FilterAndSort: React.FC<Props> = ({ filterOptions }) => {
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  // test
  const sortOptions = [" Low to High", "High to Low", "Rating"];
  // test

  const toggleFilterMenu = () => {
    console.log("toggleFilterMenu");
    setShowFilterMenu(!showFilterMenu);
    setShowSortMenu(false);
  };

  const toggleSortMenu = () => {
    setShowSortMenu(!showSortMenu);
    setShowFilterMenu(false);
  };

  return (
    <div className={styles.filterAndSort}>
      <span className={styles.button} onClick={toggleFilterMenu}>
        <FiltersIcon />
        Filters
      </span>
      {showFilterMenu && (
        <div className={styles.filterMenu}>
          {/* chevrons div */}
          <div className={styles.chevronsContainer}>
            <span className={styles.chevronFilters}>V</span>
            <span className={styles.chevronSort}>V</span>
          </div>
          {/* chevrons div */}
          <div className={styles.filterMenuContent}>
            div styles.filterMenuContentvstyles.filterMenuContent d
          </div>
        </div>
      )}
      <span className={styles.button} onClick={toggleSortMenu}>
        <SortIcon />
        Sort
      </span>
      {/* {showSortMenu && (
        <div className={styles.sortMenu}>
          {sortOptions.map((option) => (
            <div key={option} className={styles.sortOption}>
              {option}
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default FilterAndSort;
