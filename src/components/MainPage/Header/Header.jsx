import React from "react";
import style from "./Header.module.css";
import logo from "../../../assets/logo.svg";
import logoText from "../../../assets/logo-text.svg";
const Header = () => {
  return (
    <header className={style.headerContainer}>
      <div className={style.headerTop}>
        <div className={style.header}>
          <div className={style.logoContainer}>
            <img className={style.logoImg} src={logo} alt="#" />
            <img className={style.logoText} src={logoText} alt="#" />
          </div>
          <div className={style.auth}>
            <span>ВХОД</span>
            <span>РЕГИСТРАЦИЯ</span>
          </div>
        </div>
      </div>
      <div className={style.navContainer}>
        <nav className={style.nav}>
          <div className={style.navName}>КАТЕГОРИИ</div>
          <div className={style.navName}>УСЛУГИ</div>
          <div className={style.navName}>ЗАКАЗЫ</div>
          <div className={style.navName}>ИСПОЛНИТЕЛИ</div>
          <div className={style.navName}>КОНТАКТЫ</div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
