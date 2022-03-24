import React, { useState } from "react";
import { useSelector } from "react-redux";

import style from "./cart.module.css";
import img from "./mam.png";

const Cart = ({ card }) => {
  const [text, setText] = useState(false);
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  console.log(card);
  // const loading = useSelector((state) => state.services.loading);

  // const cards = useSelector((state) => state.services.text);
  const hundleClick = () => {
    setText(!text);
  };

  const hundleNumber = (e) => {
    setNumber(e.target.value);
  };

  const hundleName = (e) => {
    setName(e.target.value);
  };


  return (
    <div className={style.cart}>
      <div className={style.name}>
        {/* Название услуги */}
        {/* {console.log(props)} */}
        {/* <p>{card.serviceName}</p> */}
        <p className={style.time}>🕐 Сегодня</p>
      </div>
      <div className={style.discription}>
        <div className={style.spisane}>
          {/* Описание услуги */}
          <span> {card.description}</span>
          <div className={style.imgs}>3 фото</div>
        </div>
        <div className={style.money}>
          {/* Цена услуги и место оказания */}
          <div>{/* <p>Бюджет</p> <p>{props.service.price}</p> */}</div>
          <div>
            <p>Регион</p> <p>Москва, Московская облость</p>
          </div>
        </div>
      </div>
      <div className={style.executor}>
        <div className={style.info}>
          <img src={img} alt="" />
          <div className={style.number_phone}>
            {/* Данные об исполнителе */}
            <p>Игорь</p>
            <p>+7(964) 888-88-88</p>
          </div>
        </div>
        {!text ? (
          <button onClick={() => hundleClick()}>Откликнуться</button>
        ) : (
          <div>
            <button onClick={() => hundleClick()}>Откликнуться</button>
            <div className={style.name_adds}>
              <div className={style.add_name}>Введите имя</div>
              <div>
                <input
                  type="text"
                  placeholder="Введите имя.."
                  value={name}
                  onChange={hundleName}
                />
              </div>
              <div className={style.add_name}>Введите номер телефона</div>
              <div>
                <input
                  type="text"
                  placeholder="Введите номер.."
                  value={number}
                  onChange={hundleNumber}
                />
              </div>
              <button className={style.send_but}>Отправить</button>
            </div>
          </div>
        )}
      </div>
    </div>

   
    
    
  );
};

export default Cart;
