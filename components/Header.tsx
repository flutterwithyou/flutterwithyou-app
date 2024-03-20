
import styles from "../styles/GlossaryPage.module.css"
const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <a
                href="./"
                rel="noopener noreferrer"
            >
                <img src="/flutter.svg" className={styles.logo} alt="logo" />
                <span className={styles.title}>Flutter With You</span>
            </a>
        </header>
    );
};

export default Header;
