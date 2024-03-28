import React, { useState, useEffect } from 'react';
import styles from "../styles/GlossaryPage.module.css";

async function getData(url: string): Promise<any> {
    const res = await fetch(url)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
}

const GlossaryItem: React.FC = () => {
    const [glossaryList, setGlossaryList] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let data = await getData('https://25547bcc-a8a7-412f-badd-977ce6c1732f.mock.pstmn.io/api/glossary');
                const duplicatedData = Array.from({ length: 5 }, () => JSON.parse(JSON.stringify(data)));
                data = data.concat(...duplicatedData);
                setGlossaryList(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles.container}>
            {glossaryList.map((glossary, index) => (
                <div key={index} className={styles.glossary}>
                    <div className={styles.row}>
                    <h3>{glossary.koreanName} {glossary.englishName}</h3> <span className={styles.category}>{glossary.category}</span>
                    </div>
                    <p>{glossary.definition}</p>
                </div>
            ))}
        </div>
    );
};

export default GlossaryItem;
