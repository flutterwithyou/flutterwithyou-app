// NavButton.tsx

import React from 'react';
import styles from "../styles/GlossaryPage.module.css";

interface AlphabetNavigationProps {
    onItemClick: (alphabet: string) => void;
}

const NavButton: React.FC<AlphabetNavigationProps> = ({ onItemClick }) => {

    //todo: glossary가 있는 알파벳만 나열하기

const numberAlphabets: string[] = Array.from({ length: 9 }, (_, index) => (index + 1).toString());
const koreanAlphabets: string[] = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
const englishAlphabets: string[] = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));

const alphabets: string[] = koreanAlphabets.concat(numberAlphabets, englishAlphabets);

const numColumns = 4; 
const itemsPerColumn = Math.ceil(alphabets.length / numColumns);

return (
    <div className={styles.navigationContainer}>
        {[...Array(numColumns)].map((_, columnIndex) => (
            <div key={columnIndex} className={styles.column}>
                {alphabets.slice(columnIndex * itemsPerColumn, (columnIndex + 1) * itemsPerColumn).map((alphabet, index) => (
                    <button className={styles.navigation} key={index} onClick={() => onItemClick(alphabet)}>
                        {alphabet}
                    </button>
                ))}
            </div>
        ))}
    </div>
);
                };
export default NavButton;
