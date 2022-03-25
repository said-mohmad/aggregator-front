import React from 'react';
import styles from './ServiceCategory.module.css'
import { useSelector } from 'react-redux';
import EditModal from './EditRemoveModal/EditModal';
import { useState } from 'react';
import RemoveModal from './EditRemoveModal/RemoveModal';

const ServiceCategory = () => {
    const services = useSelector(state => state.organization.services)

    const [currentItem, setCurrentItem] = useState('')
    const [showEdit, setShowEdit] = useState(false)
    const [showRemove, setShowRemove] = useState(false)

    const handleShowEdit = (item) => {
        setShowEdit(!showEdit)
        setCurrentItem(item)
    }

    const handleShowRemove = (item) => {
        setShowRemove(!showRemove)
        setCurrentItem(item)
    }

    return (
        <div className={styles.servises}>
            <div className={styles.addServise}>
                <h3>Список активных услуг</h3>
                <button className={styles.addBtn}>+Добавить услугу</button>
            </div>
            <div className={styles.ServisesMap}>
                <div style={{fontSize: '48px', textAlign:'center', margin: '30px 5px'}}>{services.length > 0 ? '' : 'Вы пока не разместили ни одну услугу'}</div>
                {services.map(item => {
                    return (
                        <div className={styles.cart}>
                            <div className={styles.name}>
                                <p>{item.serviceName}</p>
                                <p className={styles.time}>🕐 Сегодня</p>
                            </div>
                            <div className={styles.discription}>
                                <div className={styles.spisane}>
                                    <span>
                                        {item.description}
                                    </span>
                                    <div className={styles.imgs}>3 фото</div>
                                </div>
                                <div className={styles.money}>
                                    <p>Бюджет: {item.price}р</p>
                                    <p>Регион: Московская область, Москва</p>
                                </div>
                            </div>
                            <div style={{width:'80%', margin: 'auto', textAlign: 'center'}}>
                                <button className={`${styles.editBtn} ${styles.button}`} onClick={() => handleShowEdit(item)} disabled={showEdit || showRemove}><span>Редактировать</span></button>
                                {showEdit ? <EditModal showEdit={showEdit} handleShowEdit={handleShowEdit} item={currentItem}/> : ''}

                                <button className={`${styles.removeBtn} ${styles.button}`} onClick={() => handleShowRemove(item)} disabled={showEdit || showRemove}><span>Удалить</span></button>
                                {showRemove ? <RemoveModal showRemove={showRemove} handleShowRemove={handleShowRemove} item={currentItem}/> : ''}
                                
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    );
};

export default ServiceCategory;