import React from 'react';
import styles from './EditRemoveModal.module.css'
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { editOrganization} from '../../../../redux/features/organization';

const EditInfoModal = ({showEdit, handleShowEdit, user}) => {

    const dispatch = useDispatch()

    const [executor, setExecutor] = useState(user.executor)
    const [phone, setPhone] = useState(user.phone)
    const [city, setCity] = useState(user.city)
    const [stop, setStop] = useState(false)

    const handleName = (e) => {
        setExecutor(e.target.value)
    }

    const handleDescription = (e) => {
        setPhone(e.target.value)
    }

    const handlePrice = (e) => {
        setCity(e.target.value)
    }

    const handleEditInfo = async() => {
        if(executor === user.executor && phone === user.phone && city === user.city) {
            setStop(true)
        } else {
            setStop(false)
            dispatch(editOrganization(executor, phone, city))
            handleShowEdit()
        }
    }

    return (
        <div className={`${styles.modal} ${!showEdit ? styles.hide : styles.show}`}>
            <div className={styles.modalDialog}>
                <div className={styles.modalContent}>
                    <div className={styles.modalHeader}>
                        <h3 className={styles.modalTitle}>Редактирование</h3>
                        <a onClick={handleShowEdit} className={styles.close}>×</a>
                    </div>
                    <div className={styles.modalBody}>
                        <div style={{display: 'flex', justifyContent:'space-between', alignItems: 'center', fontSize:'16px', padding: '10px 5px'}}>
                            <div style={{width: '35%'}}>Имя</div>
                            <div style={{width: '65%'}}><input value={executor} onChange={handleName} style={{width:'100%'}} placeholder='Необходимо ввести логин' /></div>
                        </div>
                        <div style={{display: 'flex', justifyContent:'space-between', alignItems: 'center', fontSize:'16px', padding: '10px 5px'}}>
                            <div style={{width: '35%'}}>Телефон</div>
                            <div style={{width: '65%'}}><input value={phone} onChange={handleDescription} style={{width:'100%'}} placeholder='Необходимо ввести номер телефона' /></div>
                        </div>
                        <div style={{display: 'flex', justifyContent:'space-between', alignItems: 'center', fontSize:'16px', padding: '10px 5px'}}>
                            <div style={{width: '35%'}}>Город</div>
                            <div style={{width: '65%'}}><input value={city} onChange={handlePrice} style={{width:'100%'}} placeholder='Необходимо ввести город' /></div>
                        </div>
                        <div style={{fontSize:'18px', color:'red', textAlign:'center', margin: '10px 0'}}>
                            {stop ? 'Пожалуйста, обновите данные перед отправкой' : ''}
                        </div>
                        <div style={{textAlign: 'center', margin:'15px 0'}}>
                                <button onClick={handleEditInfo} className={`${styles.editBtn} ${styles.button}`}><span>Подтвердить</span></button>
                                <button onClick={handleShowEdit} className={`${styles.removeBtn} ${styles.button}`} ><span>Отменить</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditInfoModal;