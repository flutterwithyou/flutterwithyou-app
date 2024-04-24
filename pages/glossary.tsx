import { NextPage } from "next"
import Header from "@/components/Header"
import NavButton from "@/components/NavButton"
import GlossaryItem from "@/components/GlossaryItem"
import styles from "@/styles/GlossaryPage.module.css";
import React, { useState, useEffect, useRef } from 'react';

async function getData(url: string): Promise<any> {
    const res = await fetch(url)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
}


const GlossaryPage: NextPage = () => {
    const [glossaryData, setGlossaryData] = useState<any>({});
    const [labels, setLabels] = useState<string[]>([]);
    const glossaryRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let data = await getData('/api/glossaries');
                setGlossaryData(data);
                const keys = Object.keys(data);
                setLabels(keys);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        
    }, []);

    const handleItemClick = (alphabet: string) => {
        const labelElement = document.getElementById(alphabet);
        const headerHeight = document.querySelector('header')?.clientHeight ?? 0;
        if (labelElement) {
            window.scrollTo({
                top: labelElement.offsetTop - (headerHeight + 10),
                behavior: 'smooth'
            });
        }
    };

    return <div className={styles.app}>
        <Header />
        <main className={styles.main}>
            <div className={styles.w10}>
                <NavButton onItemClick={handleItemClick} labels={labels} />
            </div>
            <GlossaryItem glossaryData={glossaryData} />
            <div className={styles.col4}></div>
        </main>
    </div>
}

export default GlossaryPage