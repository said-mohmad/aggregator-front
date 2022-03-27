import React, { useState } from "react";
import styles from "./SearchBlock.module.css";
import formImg from "../../../assets/index-plasterer.png";
import { Link } from "react-router-dom";

const SearchBlock = () => {
  const [inputHref, setInputHref] = useState("");

  const handleHref = (e) => {
    setInputHref(e.target.value);
  };
  const clearInput = () => {
    setInputHref("");
  };

  return (
    <div className={styles.SearchBlock}>
      <div className={styles.Form}>
        <div className={styles.FormBlock}>
          <div className={styles.textOfSearch}>
            <h1>Поможем найти любого мастера</h1>
            <span className={styles.numbersOfusers}>
              <span>
                Мастеров онлайн: <span className={styles.orange}>511</span>
              </span>
              <span>
                Заказов в неделю: <span className={styles.orange}>652</span>
              </span>
              <span>
                Предложений в сутки <span className={styles.orange}>1001</span>
              </span>
            </span>
          </div>

          <div className={styles.Search_form}>
            <input
              type="search"
              placeholder="  Что требуется сделать?"
              value={inputHref}
              onChange={(e) => handleHref(e)}
            />
            <Link to={`/search?${inputHref}`}>
              <button onClick={clearInput}>Найти мастера</button>
            </Link>
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
