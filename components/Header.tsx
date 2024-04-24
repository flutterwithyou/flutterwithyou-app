
import styles from "../styles/GlossaryPage.module.css"
import { ImGithub } from "react-icons/im";


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

            <div>
                <a href="https://github.com/flutterwithyou/flutterwithyou-app" target="_blank" rel="noopener noreferrer" >
                    GitHub <ImGithub className={styles.mx1}/>
                </a>
            </div>
        </header>
    );
};

export default Header;
