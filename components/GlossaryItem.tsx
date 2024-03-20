import React from 'react';
import styles from "../styles/GlossaryPage.module.css";

const GlossaryItem: React.FC = () => {
    const items = Array.from({ length: 5 }, (_, index) => ({
        title: `Title ${index + 1}`,
        description: `Description for item ${index + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    }));

    return (
        <div className={styles.container}>
            {items.map((item, index) => (
                <div key={index} className={styles.glossary}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default GlossaryItem;
