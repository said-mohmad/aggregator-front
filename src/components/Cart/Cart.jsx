import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import style from "./cart.module.css";
import img from "./mam.png";
import { useDispatch } from "react-redux";
import { fetchExecutor, fetchExecutorById } from "../../redux/features/services";
import Carousel from "../Carousel/Carousel";
import {Link} from "react-router-dom";
import { getOneServise } from "../../redux/features/oneServise";

const Cart = ({ card, executor }) => {

    const dispatch = useDispatch();
  // const [sended, setSended ] = useState(false)
  const [text, setText] = useState(false);
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [sendUser, setSendUser] = useState(false);
  // console.log(executor);
  // useEffect(() => {
  //   dispatch(fetchExecutorById(card.executorId));
  // }, [dispatch]);
  // const executor = useSelector((state) => state.services.executor);

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

  const handleGetOneCart = (id) => {
    dispatch(getOneServise(id));
  }

  return (
    <div className={style.cart}>
      
      <div className={style.name}>
        {/* Название услуги */}
        <Link to={`/oneCard/${card._id}`} onClick={() => handleGetOneCart(card._id)}><p>{card.serviceName}</p></Link>
        
        <p className={style.time}>🕐</p>
      </div>
      <div className={style.discription}>
        <div className={style.spisane}>
          {/* Описание услуги */}
          <span> {card.description}</span>
          <div className={style.imgCarosel}>
          </div>
          <Carousel card={card} />
        </div>
        <div className={style.money}>
          {/* Цена услуги и место оказания */}
          <div>
            <p>Бюджет</p> <p>{card.price}</p>
          </div>
          <div>
            <p>Регион</p> <p>{executor ? executor.city : "Не указан"}</p>
          </div>
        </div>
      </div>
      <div className={style.executor}>
        <div className={style.info}>
          {console.log(card.serviceImg)}
          <img className={style.executor_img} src={card.serviceImg[0] ? `http://localhost:4000/${card.serviceImg[0]}` : img} alt="" />
          <div className={style.number_phone}>
            {/* Данные об исполнителе */}
            <p>{executor ? executor.executor : "Не указан"}</p>
            <p>{executor ? executor.phone : "Не указан"}</p>
          </div>
        </div>

        {!text ? (
          <button className={style.sendedButton} onClick={() => hundleClick()}>Откликнуться</button>
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
