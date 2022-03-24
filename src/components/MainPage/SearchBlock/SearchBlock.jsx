import React from "react";
import styles from "./SearchBlock.module.css";
import formImg from "../../../assets/index-plasterer.png";

const SearchBlock = () => {
  return (
    <div className={styles.SearchBlock}>
      <div className={styles.Form}>

            <div className={styles.FormBlock}>
                <div className={styles.textOfSearch}>
                    <h1>Поможем найти любого мастера</h1>
                    <span className={styles.numbersOfusers}>
                        <span>Мастеров онлайн:  <span className={styles.orange}>511</span></span>
                        <span>Заказов в ниделю:  <span className={styles.orange}>652</span></span>
                        <span>Предложений в сутки  <span className={styles.orange}>1001</span></span>
                    </span>
                </div>

                <div className={styles.Search_form}>
                     <input type="text" placeholder="  Что требуется сделать?"/>
                     <button>Найти мастера</button>
                 </div>
            </div>
            

            <div className={styles.Search_form_img}>
            <img src={formImg} alt="" />
            </div>
      </div>
    </div>
  );
};

export default SearchBlock;
