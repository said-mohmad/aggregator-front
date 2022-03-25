import React from 'react';
import styles from './EditRemoveModal.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { removeService } from '../../../../redux/features/editRemove';
import { loadServices } from '../../../../redux/features/organization';

const RemoveModal = ({ showRemove, handleShowRemove, item }) => {
    const dispatch = useDispatch()

    const message = useSelector(state=>state.editRemove.message)


    const handleRemove = () => {
        dispatch(removeService(item._id))
        dispatch(loadServices())
        alert(`${message}`)
    }

    return (
        <div className={`${styles.modal} ${!showRemove ? styles.hide : styles.show}`}>
            <div className={styles.modalDialog}>
                <div className={styles.modalContent}>
                    <div className={styles.modalHeader}>
                        <h3 className={styles.modalTitle}>Удаление</h3>
                        <a onClick={handleShowRemove} className={styles.close}>×</a>
                    </div>
                    <div className={styles.modalBody}>
                        <div style={{ padding: '15px' }}>
                            <div style={{ fontSize: '36px', fontWeght: 'bold', textAlign: 'center' }}>
                                Вы уверены что хотите удалить данную услугу?
                                {/* <hr /> */}
                                <b style={{color: 'red'}}>{item.serviceName}</b>
                            </div>
                            <hr />
                            <div style={{ fontSize: '16px', border: '1px solid red', borderRadius: '5px', textAlign: 'center' }}>
                                ВНИМАНИЕ: все запросы отправленные по данной услуге будут удалены!
                            </div>
                            <div style={{textAlign: 'center', margin:'15px 0' }}>
                                <button onClick={handleRemove} className={`${styles.editBtn} ${styles.button}`} ><span>Подтвердить</span></button>
                                <button onClick={handleShowRemove} className={`${styles.removeBtn} ${styles.button}`} ><span>Отменить</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RemoveModal;