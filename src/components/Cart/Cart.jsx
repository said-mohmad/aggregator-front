import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Carousel from "./Carousel";
import style from "./cart.module.css";
import img from "./mam.png";
import moment from "moment";
import { useDispatch } from "react-redux";
import { fetchExecutorById } from "../../redux/features/services";

const Cart = ({ card }) => {
  const [text, setText] = useState(false);
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(false);
  const dispatch = useDispatch();
  // const loading = useSelector((state) => state.services.loading);
  
  
  useEffect(() => {
    dispatch(fetchExecutorById(card.executorId))
  }, [card.executorId, dispatch]);
  const executor = useSelector((state) => state.services.executor);
  

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

  const photosClick = () => {
    setPhoto(!photo);
  };

  return (
   
    <div className={style.cart}>
      <div className={style.name}>
        {/* Название услуги */}
        {/* {console.log(card)} */}
        <p>{card.serviceName}</p>
        <p className={style.time}>🕐</p>
      </div>
      <div className={style.discription}>
        <div className={style.spisane}>
          {/* Описание услуги */}
          <span> {card.description}</span>
          <div onClick={() => photosClick()} className={style.imgs}>
            Фото
          </div>
          <div className={style.imgCarosel}>
        {photo && (
          <div className={style.CarouselBlock}>
            <Carousel card={card} />
          </div>
        )}
      </div>
        </div>
        <div className={style.money}>
          {/* Цена услуги и место оказания */}
          <div><p>Бюджет</p> <p>{card.price}</p></div>
          <div>
            <p>Регион</p> <p>{executor.city}</p>
          </div>
        </div>
      </div>
      <div className={style.executor}>
        <div className={style.info}>
          <img src={img} alt="" />
          <div className={style.number_phone}>
            {/* Данные об исполнителе */}
            <p>{executor.executor}</p>
            <p>{executor.phone}</p>
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
