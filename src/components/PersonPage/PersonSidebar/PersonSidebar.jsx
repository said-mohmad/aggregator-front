import React from 'react';
import styles from './PersonSidebar.module.css'

const PersonSidebar = ({go, handleGo}) => {
    return (
        <div className={styles.serviceSidebar}>
                <button onClick={go ? handleGo : ''} className={styles.serviceBtn}>Ваши услуги</button>
                <button onClick={go ? '' :  handleGo} className={styles.serviceBtn}>Заказы</button>
        </div>
    );
};

export default PersonSidebar;