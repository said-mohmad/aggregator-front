import React from 'react';
import styles from './PersonCard.module.css'
import userDefault from '../../../assets/userDefault.jpg'

const PersonCard = () => {
    return (
        <div className={styles.person}>
             <div className={styles.wrapper}>
                <div className={styles.personImg}>
                        <img src='https://cdn.freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg?mt=c7bcef8b' alt="personImg" />
                        <button className={styles.EditImg}>Редактировать</button>
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
                {/* <div className={styles.editInfo}>
                    <button className={styles.editBtn}>Редактировать</button>
                </div> */}
            </div>
        </div>
        </div>
       
        
    );
};

export default PersonCard;