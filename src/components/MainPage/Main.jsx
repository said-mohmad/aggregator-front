import React from "react";
import Categories from "./Category/Categories";
import style from "./Main.module.css";

const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.about}>
        <div className={style.info}>
          <span className={style.companyName}>BUILDING <br /> SERVICE AGGREGATOR</span>
          <span className={style.infoText}>
            Портал поиска строительных услуг
          </span>
        </div>
        <button className={style.aboutButton}>УЗНАТЬ ПОДРОБНОСТИ</button>
      </div>
      <Categories />
    </div>
  );
};

export default Main;
