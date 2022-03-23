import React from 'react';
import styles from './ServiceCategory.module.css'

const ServiceCategory = () => {
    const newArr = [1, 2, 3]

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', padding: '0 10px' }}>
                <h1>Список активных услуг</h1>
                <button className={styles.addBtn}>+Добавить услугу</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {newArr.map(item => {
                    return (
                        <div className={styles.cart}>
                            <div className={styles.name}>
                                <p>Кабель каналы</p>
                                <p className={styles.time}>🕐 Сегодня</p>
                            </div>
                            <div className={styles.discription}>
                                <div className={styles.spisane}>
                                    <span>
                                        Монтаж кабель каналов 40*25мм по стенам. Причем слаботочку. На этаже
                                        примерно 60метров. Дом 16 этажей
                                    </span>
                                    <div className={styles.imgs}>3 фото</div>
                                </div>
                                <div className={styles.money}>
                                    <p>Бюджет: 50 тысяч</p>
                                    <p>Регион: Московская область, Москва</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {/* <div className={styles.card}>
                <img src="https://cdn.worldvectorlogo.com/logos/dmc.svg" alt="John" style={{ width: '100%' }} />
                <h1>HTML CSS</h1>
                <p className={styles.title}>CEO & Founder, Example</p>
                <p>Harvard University</p>
                <p><button className={styles.button}>Contact</button></p>
            </div>*/}
            </div>
        </>

    );
};

export default ServiceCategory;