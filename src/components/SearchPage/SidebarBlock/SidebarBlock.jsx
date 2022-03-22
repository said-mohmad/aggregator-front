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
                <span>Ремонт и строительство</span>
            </div>
            <div  className={styles.CategoryOfMap}>
                <input type="radio" />
                <span>Дизайн и проектировоние</span> 
            </div>
            <div  className={styles.CategoryOfMap}>
                <input type="radio" />
                <span>Ремонт техники</span>
            </div>
        </div>
    );
};

export default SidebarBlock;