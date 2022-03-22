import React from 'react';
import styles from './PersonSidebar.module.css'

const PersonSidebar = () => {
    return (
        <div className={styles.serviceSidebar}>
                <button className={styles.button}>Ваши услуги</button>
                <button className={styles.button}>Заказы</button>
        </div>
    );
};

export default PersonSidebar;