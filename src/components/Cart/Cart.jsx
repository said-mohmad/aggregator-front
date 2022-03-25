import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Carousel from "./Carousel";
import style from "./cart.module.css";
import img from "./mam.png";
import { useDispatch } from "react-redux";
import { fetchExecutorById } from "../../redux/features/services";

const Cart = ({ card }) => {
  // const [sended, setSended ] = useState(false)
  const [text, setText] = useState(false);
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(false);
  const [sendUser, setSendUser] = useState(false);
  const dispatch = useDispatch();
  // console.log(card);
  // const loading = useSelector((state) => state.services.loading);

  useEffect(() => {
    dispatch(fetchExecutorById(card.executorId));
  }, [card.executorId, dispatch]);
  const executor = useSelector((state) => state.services.executor);

  // const cards = useSelector((state) => state.services.text);
  const hundleClick = () => {
    setText(!text);
    // setSended(true)
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

  const hundleUserSend = () => {
    if (name && number) {
      setName("");
      setNumber("");
      setSendUser(!sendUser);
      setText(!text);
      // setSended(false)
      return false;
    }
  };

  const closeModelWindow = () => {
    setText(!text);
  };

  return (
    <div className={style.cart}>
      <div className={style.name}>
        {/* Название услуги */}
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
          <div>
            <p>Бюджет</p> <p>{card.price}</p>
          </div>
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
          <div className={style.model}>
            <div className={style.vihod} onClick={() => closeModelWindow()}>
              Закрыть
            </div>
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

              <button
                className={style.send_but}
                onClick={() => hundleUserSend()}
              >
                Отправить
              </button>
            </div>
          </div>
        )}
      </div>
    </div>

   
    
    
  );
};

export default Cart;
