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
      <span className={styles.button} onClick={toggleSortMenu}>
        <SortIcon />
        Sort
      </span>
      {(showFilterMenu || showSortMenu) && (
        <div className={styles.filterMenu}>
          {/* chevrons div */}
          <div className={styles.chevronsContainer}>
            <div className={styles.chevronFilters}>
              {showFilterMenu && <span>V</span>}
            </div>

            <div className={styles.chevronSort}>
              {showSortMenu && <span>V</span>}
            </div>
          </div>
          {/* chevrons div */}
          <div className={styles.filterMenuContent}>
            {showFilterMenu && <div>Filters content</div>}
            {showSortMenu && <div>Sort content</div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterAndSort;
