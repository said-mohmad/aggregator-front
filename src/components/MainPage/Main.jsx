import React from "react";
import style from "./Main.module.css";
import background from '../../assets/background-image.svg';
const Main = () => {
  return <div className={style.main}>
      <img className={style.backgroundImage} src={background} alt="#" />
      <div className={style.about}>
          <div className={style.info}>
              <span className={style.companyName}>BUILDING SERVIS AGGREGATOR</span>
              <span className={style.infoText}>Портал поиска строительных услуг</span>
          </div>
          <button className={style.aboutButton}>УЗНАТЬ ПОДРОБНОСТИ</button>
      </div>
  </div>;
};

export default Main;
