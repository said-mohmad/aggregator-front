import React from 'react';
import { useSelector } from 'react-redux';
import styles from './OneCart.module.css'
import {Link} from 'react-router-dom';

const OneCart = () => {

    const oneServise = useSelector((state) => state.oneServise.oneServise);
    console.log(oneServise)

    const style = {
        transform: 'translate(-50%, -50%)',
        p: 4,
      };

    
    return (
        <div className={styles.OneCart}>
            <Link className={styles.Home_buttons} rel="stylesheet" to="/home">Категории</Link>
             <h2 className={styles.title}>{oneServise.serviceName}</h2>
            <div className={styles.wrapper}>
               
                <div sx={style} className={styles.boxModal}>
                        <div className={styles.carousel}>
                            <div id="carouselExampleIndicators" class="carousel slide " data-bs-ride="carousel">
                        <div class="carousel-indicators ">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <div class="carousel-inner ">
                        <div class="carousel-item active">
                            <img src="https://cstor.nn2.ru/blog/data/blog/2018-03/1472735_1522222510.jpg" className={style.caruselImg} alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://51.img.avito.st/image/1/1.QsIu8rax7isYRWwmJu8N_rdR7i-SU-Qp.48Zat7lOXsuwhzrQkwd8LQ0AHUDZ1Q9MRrME2mlBpbk"  className={style.caruselImg} alt="..." />
                        </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                        </button>
                        </div>
                        </div>
                       
                  </div>
                  

                  <div className={styles.UsersInfo}>
                      <h2>{oneServise.price} ₽ за услугу</h2> 
                      
                        <button className={styles.phone}>Показать телефон</button>
                        <button className={styles.message}>Написать сообщение</button>
                        <div className={styles.UsersInfoWrapper}>
                             <div className={styles.img}><img src='' alt="" /></div>
                             <div className={styles.USersName}>Аслан</div>
                        </div>
                       
                        <div className={styles.ServisesInfo}>Все объявления пользователя</div>
                        <div className={styles.ServisesInfo}>Подписаться на пользователя</div>
                  </div>
            </div>

            <div className={styles.infoOboutSrvises}>
                 <p>Услуга на сайте с: {oneServise.time}</p>
                <label>Расположение</label>
                <div>Чеченская республика, грозный</div>
                
                <label>Описание</label>
                <div className={styles.description}>
                Аcсaлaму алaйкум

        Полусухая стяжкa полa.
        ИДЕАЛЬHO POВHЫЙ ПOЛ в вaшeм дoмe, квaртире или oфиce вceго за 1 дeнь!
        — МЫ НЕ ПОCРЕДНИКИ! Coбствeнное cовременноe немецкое oбoрудовaниe
        — Прeимущeства пoлусухoй cтяжки полa:
        — - идеaльнo pовнaя пoверхнocть
        — - не трескается при высыхании и не дает усадки
        — - в раствор добавляется фиброволокно, которое выступает в роли армирующего элемента (за счёт заказчика )
        — - заливаем до 250 м2 стяжки за 1 день
        — - через 12 часов можно ходить по стяжке
        — - через 7 дней можно стелить ламинат, линолеум, плитку
        — Звоните нам в любое время, для вас мы работаем каждый день с утра до вечера!
        — БЕСПЛАТНО выполним замеры вашего помещения в день звонка и сразу же назовем вам точную стоимость ваших полов.
        Стяжка пола идеальный пол под ламинат под плитку.Стяжка пола идеальный пол под ламинат под плитку.
        Выезжаем на объект в обещанное время. Евро стяжка. Евро пол.Полы. Стешка. Квартира. Дом. Ремонт .Стяшка. Ламинат. Грозный. Шали. Аргун. Гудурмес. Урусмартан. Работаем по всей Чеченской республике..</div>
            </div>
           
        </div>
    );
};

export default OneCart;