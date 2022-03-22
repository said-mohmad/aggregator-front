import React from "react";
import style from "./Header.module.css";
import logo from "../../../assets/logo.svg";
import logoText from "../../../assets/logo-text.svg";
import List from "./List/List";
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
            {false && <button className={style.signin}>ВХОД</button>}
            {false && <button className={style.signup}>РЕГИСТРАЦИЯ</button>}
            {true && (
              <div>
                <span>Имя пользователя</span>
                <button className={style.cabinet}>Личный кабинет</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={style.navContainer}>
        <nav className={style.nav}>
          <List name="Категории" />
          <List name="Исполнители" />
          <List name="Контакты" />
          <List name="О нас" />
          <List name="Альвииии" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
