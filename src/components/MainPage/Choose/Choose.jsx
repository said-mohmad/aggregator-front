import React from 'react';
import styles from './Choose.module.css'

const Choose = () => {
    return (
        <div className={styles.choose}>
            <div className={styles.wrapper}>

                <div className={styles.chooseOne}>
                    <div className={styles.chooseOneTitle}>
                        <h4>Вы мастер?</h4>
                        <p>Получайте заказы бесплатно!</p>
                        <button>Подробнее</button>
                        
                    </div>
                    <div className={styles.chooseOneImage}>
                        <img src="https://remont.ru/files/whoareyou/master.jpg" alt="" />
                    </div>
                </div>

                <div className={styles.chooseOne}>
                     <div  className={styles.chooseOneTitle}>
                        <h4>Вы заказчик?</h4>
                        <p>Получайте заказы бесплатно!</p>
                        <button>Выбрать</button>
                    </div>
                    <div className={styles.chooseOneImage}>
                        <img src="https://remont.ru/files/whoareyou/empl.jpg" alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Choose;