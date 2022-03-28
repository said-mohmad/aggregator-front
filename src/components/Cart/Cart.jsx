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
          <img className={style.executor_img} src={card.serviceImg ? `http://localhost:4000/${card.serviceImg}` : img} alt="" />
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


{/* <div className={styles.modalContent}>
<div className={styles.modalHeader}>
    <h3 className={styles.modalTitle}>Заказ</h3>
    <a onClick={handleShowEdit} className={styles.close}>×</a>
</div>
<div className={styles.modalBody}>
    <div style={{display: 'flex', justifyContent:'space-between', alignItems: 'center', fontSize:'16px', padding: '10px 5px'}}>
        <div style={{width: '35%'}}>Название</div>
        <div style={{width: '65%'}}><input value={name} onChange={hundleName} style={{width:'100%'}} placeholder='Необходимо ввести имя' /></div>
    </div>
    <div style={{display: 'flex', justifyContent:'space-between', alignItems: 'center', fontSize:'16px', padding: '10px 5px'}}>
        <div style={{width: '35%', alignSelf:'self-start'}}>Описание</div>
        <div style={{width: '65%'}}><textarea value={description} onChange={handleDescription} style={{width:'100%'}} placeholder='Необходимо ввести номер' /></div>
    </div>
    <div style={{fontSize:'18px', color:'red', textAlign:'center', margin: '10px 0'}}>
        {stop ? 'Пожалуйста, обновите данные перед отправкой' : ''}
        {error ? `Ошибка: ${error}` : ''}
    </div>
    <div style={{textAlign: 'center', margin:'15px 0'}}>
            <button onClick={handleEdit} className={`${styles.editBtn} ${styles.button}`}><span>Подтвердить</span></button>
            <button onClick={handleShowEdit} className={`${styles.removeBtn} ${styles.button}`} ><span>Отменить</span></button>
    </div>
</div>
</div> */}