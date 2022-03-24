import React from 'react';
import styles from './Advantages.module.css'

const Advantages = () => {
    return (
        <div className={styles.advantages}>
            <div className={styles.wrapper}>
                <div className={styles.oneAdvantage}>
                    <img src="https://cdn-icons-png.flaticon.com/512/197/197717.png" alt="" />
                    <span>Добавить заказ</span>
                    <p>Никаких лишних звонков — мы никому не показываем ваш номер</p>
                </div>
                <div className={styles.oneAdvantage}>
                    <img src="https://cdn-icons-png.flaticon.com/512/2331/2331980.png" alt="" />
                    <span>Сравнить предложение</span>
                    <p>Изучите отзывы об исполнителях, сравните их условия и цены на вашу работу</p>
                </div>
                <div className={styles.oneAdvantage}>
                    <img src="https://cdn-icons-png.flaticon.com/512/5541/5541795.png" alt="" />
                    <span>Договоритесь напрямую</span>
                    <p>Связывайтесь с кандидатами и обсуждайте детали заказа по телефону или в чате</p>
                </div>
            </div>
        </div>
    );
};

export default Advantages;