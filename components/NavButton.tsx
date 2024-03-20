// NavButton.tsx

import React from 'react';
import styles from "../styles/GlossaryPage.module.css";

interface AlphabetNavigationProps {
    version: string;
    onItemClick: (alphabet: string) => void;
}

const NavButton: React.FC<AlphabetNavigationProps> = ({ version, onItemClick }) => {
    let alphabets: string[] = [];

    switch (version) {
        case 'ko':
            alphabets = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
            break;
        case 'num':
            alphabets = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
            break;
        default:
            alphabets = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));
            break;
    }

    return (
        <div className={styles.navigationContainer}>
            {alphabets.map((alphabet, index) => (
                <button className={styles.navigation} key={index} onClick={() => onItemClick(alphabet)}>
                    {alphabet}
                </button>
            ))}
        </div>
    );
};

export default NavButton;
