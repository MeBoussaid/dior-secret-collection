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
    setShowFilterMenu(!showFilterMenu);
    setShowSortMenu(false);
  };

  const toggleSortMenu = () => {
    setShowSortMenu(!showSortMenu);
    setShowFilterMenu(false);
  };

  return (
    <div className={styles.filterAndSort}>
      <button className={styles.button} onClick={toggleFilterMenu}>
        <FiltersIcon />
        Filters
      </button>
      {/* {showFilterMenu && (
        <div className={styles.filterMenu}>
          {filterOptions.map((option) => (
            <div key={option} className={styles.filterOption}>
              {option}
            </div>
          ))}
        </div>
      )} */}
      <button
        className={`${styles.button} ${styles.sortButton}`}
        onClick={toggleSortMenu}
      >
        <SortIcon />
        Sort
      </button>
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
