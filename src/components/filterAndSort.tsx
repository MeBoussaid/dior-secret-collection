import React, { useState } from "react";
import styles from "../styles/filterAndSort.module.scss";

import SortIcon from "./icons/sortIcon";
import FiltersIcon from "./icons/filtersIcon";

import {
  UpArrow,
  Women,
  Men,
  Shirts,
  Bags,
  Jewelry,
} from "./icons/filtersIcons";

interface FilterOption {
  label: string;
  icon: React.ReactNode;
}

const sortOptions = ["By price Asc", "By price Desc"];
const filterOptions: FilterOption[] = [
  { label: "Women", icon: <Women /> },
  { label: "Men", icon: <Men /> },
  { label: "Shirts", icon: <Shirts /> },
  { label: "Bags", icon: <Bags /> },
  { label: "Jewelry", icon: <Jewelry /> },
];

const FilterAndSort: React.FC = () => {
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);

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
              {showFilterMenu && <UpArrow />}
            </div>

            <div className={styles.chevronSort}>
              {showSortMenu && <UpArrow />}
            </div>
          </div>
          {/* chevrons div */}
          <div className={styles.filterMenuContent}>
            {showFilterMenu && (
              <div className={styles.filtersMenu}>
                <div>
                  {filterOptions.slice(0, 2).map((option) => (
                    <span key={option.label} className={styles.filtersButton}>
                      <span className={styles.icon}>{option.icon}</span>
                      {option.label}
                    </span>
                  ))}
                </div>
                <div>
                  {filterOptions.slice(2, 5).map((option) => (
                    <span key={option.label} className={styles.filtersButton}>
                      <span className={styles.icon}>{option.icon}</span>
                      {option.label}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {showSortMenu && (
              <div className={styles.sortMenu}>
                {sortOptions.map((option) => (
                  <span key={option} className={styles.filtersButton}>
                    {option}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterAndSort;
