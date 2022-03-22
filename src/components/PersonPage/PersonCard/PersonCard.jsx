import React from 'react';
import styles from './PersonCard.module.css'

const PersonCard = () => {
    return (
        <div className={styles.personCard}>
            <div className={styles.personImg}>
                <img src="https://автолого.рф/wp-content/uploads/dmc-logo-1440x900.png" alt="personImg" />
            </div>
            <div className={styles.personInfo}>
                <div className={styles.Company}>
                    <h1>Компания</h1>
                </div>
                <div className={styles.infoLine}>
                    <h3>Логин</h3>
                    <p>Значение</p>
                </div>
                <div className={styles.infoLine}>
                    <h3>Номер</h3>
                    <p>Значение</p>
                </div>
                <div className={styles.infoLine}>
                    <h3>Город</h3>
                    <p>Значение</p>
                </div>
            </div>
        </div>
    );
};

export default PersonCard;