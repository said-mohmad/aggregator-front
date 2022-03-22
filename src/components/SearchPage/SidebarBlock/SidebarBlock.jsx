import React from 'react';
import styles from './Sidebar.module.css'

const SidebarBlock = () => {
    return (
        <div className={styles.Sidebar}>
            <div className={styles.CategoryTitle}>
                Виды работ:
            </div>

            <div className={styles.CategoryOfMap}>
                <input type="radio" />
                Ремонт и строительство
            </div>
            <div  className={styles.CategoryOfMap}>
                <input type="radio" />
                Дизайн и проектировоние
            </div>
            <div  className={styles.CategoryOfMap}>
                <input type="radio" />
                Ремонт техники
            </div>
        </div>
    );
};

export default SidebarBlock;