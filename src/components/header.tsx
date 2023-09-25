import Logo from "@/components/logo";
import styles from "../styles/header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Logo size="normal" />
      </div>
    </header>
  );
};

export default Header;
