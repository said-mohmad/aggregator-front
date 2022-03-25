import React from 'react';
import styles from './EditRemoveModal.module.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editService } from '../../../../redux/features/editRemove';
import { loadServices } from '../../../../redux/features/organization';

const EditModal = ({showEdit, handleShowEdit, item}) => {
    const error = useSelector(state=>state.editRemove.error)
    
    const dispatch = useDispatch()

    const [name, setName] = useState(item.serviceName)
    const [description, setDescription] = useState(item.description)
    const [price, setPrice] = useState(item.price)
    const [stop, setStop] = useState(false)

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handlePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleEdit = () => {
        if(name === item.serviceName && description === item.description && price === item.price) {
            setStop(true)
        } else {
            setStop(false)
            dispatch(editService(item._id, name, description, price))
            dispatch(loadServices())
            alert('Услуга была успешно обновлена')
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
                            <div style={{width: '35%'}}>Название</div>
                            <div style={{width: '65%'}}><input value={name} onChange={handleName} style={{width:'100%'}} placeholder='Необходимо ввести название' /></div>
                        </div>
                        <div style={{display: 'flex', justifyContent:'space-between', alignItems: 'center', fontSize:'16px', padding: '10px 5px'}}>
                            <div style={{width: '35%', alignSelf:'self-start'}}>Описание</div>
                            <div style={{width: '65%'}}><textarea value={description} onChange={handleDescription} style={{width:'100%'}} placeholder='Необходимо ввести описание' /></div>
                        </div>
                        <div style={{display: 'flex', justifyContent:'space-between', alignItems: 'center', fontSize:'16px', padding: '10px 5px'}}>
                            <div style={{width: '35%'}}>Цена</div>
                            <div style={{width: '65%'}}><input value={price} onChange={handlePrice} style={{width:'100%'}} placeholder='Необходимо ввести цену' /></div>
                        </div>
                        <div style={{fontSize:'18px', color:'red', textAlign:'center', margin: '10px 0'}}>
                            {stop ? 'Пожалуйста, обновите данные перед отправкой' : ''}
                            {error ? `Ошибка: ${error}` : ''}
                        </div>
                        <div style={{textAlign: 'center', margin:'15px 0'}}>
                                <button onClick={handleEdit} className={`${styles.editBtn} ${styles.button}`}><span>Подтвердить</span></button>
                                <button onClick={handleShowEdit} className={`${styles.removeBtn} ${styles.button}`} ><span>Отменить</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditModal;