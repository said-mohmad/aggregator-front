import React from 'react';
import styles from './PersonCard.module.css'
import userDefault from '../../../assets/userDefault.jpg'

const PersonCard = () => {
    return (
        <div className={styles.personCard}>
            <div className={styles.personImg}>
                <img src={userDefault} alt="personImg" />
            </div>
            <div className={styles.personInfo}>
                <div className={styles.Company}>
                    <h1 style={{fontSize:'28px', textAlign:'center'}}>Компания</h1>
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
                {/* <div className={styles.editInfo}>
                    <button className={styles.editBtn}>Редактировать</button>
                </div> */}
            </div>
        </div>
    );
};

export default PersonCard;