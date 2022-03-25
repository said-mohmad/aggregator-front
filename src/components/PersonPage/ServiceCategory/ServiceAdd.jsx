import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addedService } from '../../../redux/features/addService';
import { loadServices } from '../../../redux/features/organization';
import styles from "./ServiceCategory.module.css"

const ServiceAdd = ({showAdd, handleShowAdd}) => { 
    
    const dispatch = useDispatch()

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
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

    const handleAdd = () => {
        if(!name && !description && !price) {
            setStop(true)
        } else {
            setStop(false)
            dispatch(addedService(name, description, price))
            dispatch(loadServices())
            alert('Услуга создана')
        }
    }

    return (
        <div className={`${styles.modal} ${!showAdd ? styles.hide : styles.show}`}>
            <div className={styles.modalDialog}>
                <div className={styles.modalContent}>
                    <div className={styles.modalHeader}>
                        <h3 className={styles.modalTitle}>Создание услуги</h3>
                        <a onClick={handleShowAdd} className={styles.close}>×</a>
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
                            {stop && 'Пожалуйста, заполните поля'}
                        </div>
                        <div style={{textAlign: 'center', margin:'15px 0'}}>
                                <button onClick={handleAdd} className={`${styles.editBtn} ${styles.button}`}><span>Подтвердить</span></button>
                                <button onClick={handleShowAdd} className={`${styles.removeBtn} ${styles.button}`} ><span>Отменить</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default ServiceAdd;