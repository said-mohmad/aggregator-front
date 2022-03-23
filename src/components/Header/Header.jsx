import React from "react";
import style from "./Header.module.css";
import logo from "../../assets/logo.png";
import List from "./List/List";
const Header = () => {
  return (
    <header className={style.headerContainer}>
      <div className={style.headerTop}>
        <div className={style.header}>
          <div className={style.logoContainer}>
            <img className={style.logoImg} src={logo} alt="#" />
            <div className={style.logoText}>BSA <br />ПОИСК ПРОФФЕСИОНАЛОВ</div>
          </div>
          <div className={style.auth}>
            {true && <button className={style.auth_button}>ВХОД</button>}
            {true && <button className={style.auth_button}>РЕГИСТРАЦИЯ</button>}
            {false && (
              <div>
                <span className={style.cabinetName}>Имя пользователя</span>
                <button className={style.cabinet}>Личный кабинет</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={style.navContainer}>
        <nav className={style.nav}>
          <List name="КАТЕГОРИИ" />
          <List name="ИСПОЛНИТЕЛИ" />
          <List name="КОНТАКТЫ" />
          <List name="О НАС" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
