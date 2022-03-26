import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import style from "./cart.module.css";
import img from "./mam.png";
import { useDispatch } from "react-redux";
import { fetchExecutorById } from "../../redux/features/services";
import Carousel from "../Carousel/Carousel";

const Cart = ({ card }) => {
  
  // const [sended, setSended ] = useState(false)
  const [text, setText] = useState(false);
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [sendUser, setSendUser] = useState(false);
  const dispatch = useDispatch();
  
  const [carusel, setCarusel] = useState(false)

    const handlePhoto = () => {
        setCarusel(!carusel)
    }

  useEffect(() => {
    dispatch(fetchExecutorById(card.executorId));
  }, [card.executorId, dispatch]);
  const executor = useSelector((state) => state.services.executor);

  const hundleClick = () => {
    setText(!text);
  };

  const hundleNumber = (e) => {
    setNumber(e.target.value);
  };

  const hundleName = (e) => {
    setName(e.target.value);
  };

  const hundleUserSend = () => {
    if (name && number) {
      setName("");
      setNumber("");
      setSendUser(!sendUser);
      setText(!text);
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
          {/* <div onClick={() => setOpen(true)} className={style.imgs}>Фото</div> */}
          <div className={style.imgCarosel}>
          </div>
          <Carousel />

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
          <img className={style.executor_img} src={img} alt="" />
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
