import React from 'react';
import styles from './PersonSidebar.module.css'

const PersonSidebar = () => {
    return (
        <div className={styles.serviceSidebar}>
                <button className={styles.serviceBtn}>Ваши услуги</button>
                <button className={styles.serviceBtn}>Заказы</button>
        </div>
    );
};

export default PersonSidebar;