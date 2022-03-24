import React from 'react';
import styles from './Offer.module.css'

const Offer = () => {
    return (
        <div className={styles.offer}>
            <div className={styles.wrapper}>
                <div className={styles.image}>
                    <img src="https://www.remontnik.ru/static/images/recom_icon.png" alt="" />
                </div>
                <div className={styles.information}>
                    <h3>Вы мастер? Обеспечьте заказами себя, бригаду или компанию</h3>
                    <div><span><img src="https://www.remontnik.ru/static/images/icons/recom_check.png" alt="" /></span> Стабильный поток заказов каждый день</div>
                    <div><span><img src="https://www.remontnik.ru/static/images/icons/recom_check.png" alt="" /></span> Вы сами выбираете заказы и заказчиков, предлагаете свои условия</div>
                    <div><span><img src="https://www.remontnik.ru/static/images/icons/recom_check.png" alt="" /></span> Договаривайтесь напрямую без комиссий и посредников</div>

                    <div className={styles.offerButtons}>
                        <button>Регистрация мастера</button>
                        <button className={styles.span}>Условия работы на сервисе</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Offer;