import React from 'react';
import styles from './EditRemoveModal.module.css'
import { useSelector, useDispatch } from 'react-redux';

const ExitModal = ({ showExit, handleShowExit}) => {
    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch()
        alert('')
    }

    return (
        <div className={`${styles.modal} ${!showExit ? styles.hide : styles.show}`}>
            <div className={styles.modalDialog}>
                <div className={styles.modalContent}>
                    <div className={styles.modalHeader}>
                        <h3 className={styles.modalTitle}>Выход</h3>
                        <a onClick={handleShowExit} className={styles.close}>×</a>
                    </div>
                    <div className={styles.modalBody}>
                        <div style={{ padding: '15px' }}>
                            <div style={{ fontSize: '20px', fontWeght: 'bold', textAlign: 'center' }}>
                                Вы уверены что хотите выйти из личного кабинета?
                                {/* <hr /> */}
                            </div>
                            <hr />
                            <div style={{textAlign: 'center', margin:'15px 0' }}>
                                <button className={`${styles.editBtn} ${styles.button}`} ><span>Подтвердить</span></button>
                                <button onClick={handleShowExit} className={`${styles.removeBtn} ${styles.button}`} ><span>Отменить</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExitModal;