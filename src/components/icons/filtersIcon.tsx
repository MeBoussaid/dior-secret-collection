import Image from "next/image";
import styles from "../../styles/filtersIcon.module.scss";

const FiltersIcon: React.FC = () => {
  return (
    <div className={styles.iconContainer}>
      <Image src="/filtersIcon.png" alt="Filter icon" width="23" height="23" />
    </div>
  );
};

export default FiltersIcon;
