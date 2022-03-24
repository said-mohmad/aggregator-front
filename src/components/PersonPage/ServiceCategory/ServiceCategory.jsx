import React from 'react';
import styles from './ServiceCategory.module.css'
import { useSelector } from 'react-redux';

const ServiceCategory = () => {
    const services = useSelector(state=>state.organization.services)

    return (
        <div className={styles.servises}>
            <div className={styles.addServise}>
                <h3>Список активных услуг</h3>
                <button className={styles.addBtn}>+Добавить услугу</button>
            </div>
            <div className={styles.ServisesMap}>
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
                        </div>
                    )
                })}
            </div>
        </div>

    );
};

export default ServiceCategory;