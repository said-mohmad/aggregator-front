import React from 'react';
import styles from './PersonCard.module.css'
import { useSelector } from 'react-redux';

const PersonCard = () => {
    const user = useSelector(state => state.organization.user)

    return (
        <div className={styles.person}>
            <div className={styles.wrapper}>

                <div className={styles.personImg}>
                    <img src='https://cdn.freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg?mt=c7bcef8b' alt="personImg" />
                    <button className={styles.EditImg}>Редактировать</button>
                </div>
                <div className={styles.personInfo}>
                    <div className={styles.Company}>
                        <h1>{user.executor}</h1>
                    </div>
                    <div className={styles.infoLine}>
                        <h3>Логин</h3>
                        <p>{user.login}</p>
                    </div>
                    <div className={styles.infoLine}>
                        <h3>Номер</h3>
                        <p>{user.phone}</p>
                    </div>
                    <div className={styles.infoLine}>
                        <h3>Город</h3>
                        <p>{user.city}</p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default PersonCard;