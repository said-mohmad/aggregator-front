import React, { useState } from 'react';
import styles from './PersonCard.module.css'
import { useSelector } from 'react-redux';
import EditInfoModal from '../ServiceCategory/EditRemoveModal/EditInfoModal';
import ExitModal from '../ServiceCategory/EditRemoveModal/ExitModal';

const PersonCard = () => {
    const user = useSelector(state => state.organization.user)

    const [showEdit, setShowEdit] = useState(false)
    const [showExit, setShowExit] = useState(false)

    const handleShowEdit = () => {
        setShowEdit(!showEdit)
    }

    const handleShowExit = () => {
        setShowExit(!showExit)
    }

    return (
        <div className={styles.person}>
            <div className={styles.wrapper}>

                <div className={styles.personImg}>
                    <img src='https://cdn.freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg?mt=c7bcef8b' alt="personImg" />
                    <button className={styles.EditImg}>Изменить</button>
                </div>
                <div className={styles.personInfo}>
                    <div className={styles.Company}>
                        <h1>Личная информация</h1>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px' }}>
                            <div onClick={handleShowEdit} className={`${styles.editInfo} ${styles.btnInfo}`}></div>
                            <EditInfoModal showEdit={showEdit} handleShowEdit={handleShowEdit} user={user} />
                            <div onClick={handleShowExit} className={`${styles.logOut} ${styles.btnInfo}`}></div>
                            <ExitModal showExit={showExit} handleShowExit={handleShowExit} />
                        </div>

                    </div>
                    <div className={styles.infoLine}>
                        <h3>Имя</h3>
                        <p>{user.executor}</p>
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