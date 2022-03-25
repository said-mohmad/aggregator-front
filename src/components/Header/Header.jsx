import React from "react";
import style from "./Header.module.css";
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom'
import ReactScroll from "react-scroll";

const Header = () => {
  return (
    
    <header className={style.headerContainer}>
          <div className={style.header}>

             <div className={style.logoContainer}>
                <img className={style.logoImg} src={logo} alt="#" />
                <div className={style.logoText}>BSA <br />ПОИСК ПРОФФЕСИОНАЛОВ</div>
             </div>

             <div className={style.navContainer}>
                    <ul className={style.nav}>
                      <Link activeClass="active" to="/search" spy={true} smooth={true} offset={1000} duration={150} className={style.li} >Категории</Link>
                      <ReactScroll.Link activeClass="active" to="Promotion" spy={true} smooth={true} offset={150} duration={150} className={style.li}>Исполнители</ReactScroll.Link>
                      <ReactScroll.Link activeClass="active" to="Promotion" spy={true} smooth={true} offset={150} duration={150} className={style.li}>Контакты</ReactScroll.Link>
                      <ReactScroll.Link activeClass="active" to="OboutUs" spy={true} smooth={true} offset={150} duration={150} className={style.li}>О нас</ReactScroll.Link>
                    </ul>
             </div>

             <div className={style.auth}>
                {true && <Link to="/signin"><button className={style.auth_in}>Вход</button></Link>}
                {true && <Link to="/signup"><button className={style.auth_register}>Регистрация</button></Link>}
                {false && (
                  <div className={style.auth}>
                    <span className={style.auth_in_person}>Имя</span>
                    <button className={style.auth_register}>Личный кабинет</button>
                  </div>
                )}
             </div>

          </div>
    </header>






    // <header className={style.headerContainer}>
    //   <div className={style.headerTop}>
    //     <div className={style.header}>
          // <div className={style.logoContainer}>
          //   <img className={style.logoImg} src={logo} alt="#" />
          //   <div className={style.logoText}>BSA <br />ПОИСК ПРОФФЕСИОНАЛОВ</div>
          // </div>
          // <div className={style.auth}>
          //   {false && <button className={style.auth_button}>ВХОД</button>}
          //   {false && <button className={style.auth_button}>РЕГИСТРАЦИЯ</button>}
          //   {true && (
          //     <div>
          //       <span className={style.cabinetName}>Имя пользователя</span>
          //       <button className={style.cabinet}>Личный кабинет</button>
          //     </div>
          //   )}
          // </div>
    //     </div>
    //   </div>
      // <div className={style.navContainer}>
      //   <nav className={style.nav}>
      //     <a href="#">КАТЕГОРИИ</a>
      //     <a href="#">ИСПОЛНИТЕЛИ</a>
      //     <a href="">КОНТАКТЫ</a>
      //     <a href="">О НАС</a>
      //   </nav>
      // </div>
    // </header>
  );
};

export default Header;
