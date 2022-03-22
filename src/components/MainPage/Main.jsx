import React from "react";
import Category from "./Category/Category";
import style from "./Main.module.css";
const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.about}>
        <div className={style.info}>
          <span className={style.companyName}>BUILDING SERVICE AGGREGATOR</span>
          <span className={style.infoText}>
            Портал поиска строительных услуг
          </span>
        </div>
        <button className={style.aboutButton}>УЗНАТЬ ПОДРОБНОСТИ</button>
      </div>
      <div className={style.categories}>
        <Category name="Category1" />
        <Category name="Category2" />
        <Category name="Category3" />
        <Category name="Category4" />
      </div>
    </div>
  );
};

export default Main;
