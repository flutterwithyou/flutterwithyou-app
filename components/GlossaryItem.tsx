import styles from "../styles/GlossaryPage.module.css";

interface Glossary {
    id: string;
    koreanName: string;
    englishName: string;
    category: string;
    definition: string;
    example: string;
    relationships: string;
}

interface GlossaryData {
    [label: string]: Glossary[];
}

interface Props {
    glossaryData: GlossaryData;
}


const GlossaryItem: React.FC<Props> = ({ glossaryData }) => {
    return (
        <div className={styles.container}>
            {Object.entries(glossaryData).map(([label, glossaries]) => (
                <div key={label}>
                    <span className={styles.label} id={label}>{label}</span>
                    {glossaries.map((glossary) => (
                        <div key={glossary.id} className={styles.glossary}>
                            <div className={styles.row}>
                                <h3>{glossary.koreanName} {glossary.englishName}</h3>
                                <span className={styles.category}>{glossary.category}</span>
                            </div>
                            <p>{glossary.definition}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default GlossaryItem;