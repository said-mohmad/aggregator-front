import React from 'react';
import styles from './ServiceData.module.css'

const ServiceData = () => {
    return (
        <div className={styles.serviceData}>
            <div className={styles.btnContainer}><button className={styles.addBtn}>Добавить услугу</button></div>
            <div style={{ width: '90%' }}>Карточка</div>
        </div>
    );
};

export default ServiceData;