import { NextPage } from "next"
import Header from "@/components/Header"
import NavButton from "@/components/NavButton"
import GlossaryItem from "@/components/GlossaryItem"
import styles from "@/styles/GlossaryPage.module.css";
const GlossaryPage: NextPage = () => {
    const versions = ['en', 'ko', 'num'];


    return <div className={styles.app}>
        <Header />
        <main className={styles.main}>
            {versions.map(version => (
                <NavButton key={version} version={version} onItemClick={function (alphabet: string): void {
                    throw new Error("Function not implemented.")
                }} />
            ))}
            <GlossaryItem />
            <div className={styles.col4}></div>
        </main>
    </div>
}

export default GlossaryPage