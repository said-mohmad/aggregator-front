import React from 'react';
import styles from './PersonSidebar.module.css'

const PersonSidebar = ({go, handleGo}) => {
    return (
        <div className={styles.serviceSidebar}>
                <button onClick={go ? handleGo : undefined} className={styles.serviceBtn}>Ваши услуги</button>
                <button onClick={go ? undefined :  handleGo} className={styles.serviceBtn}>Заказы</button>
        </div>
    );
};

export default PersonSidebar;