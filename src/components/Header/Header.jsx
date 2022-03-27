import React, { useState } from "react";
import style from "./Header.module.css";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from 'react-router-dom'
import ReactScroll from "react-scroll";
import { useSelector } from "react-redux";


const Header = () => {
  const navigate = useNavigate();

  const token = useSelector(state => state.application.token)
  
  const [userModal, setuserModal ] = useState();

  const handlePersonModal = () => {
    setuserModal(!userModal)
  }

  const exitOutOfPersonPage = () => {
    localStorage.removeItem('token');
    navigate("/home")
  }
  
  return (
    <header className={style.headerContainer}>
          <div className={style.header}>

             <div className={style.logoContainer}>
                <Link to='/home'><img className={style.logoImg} src={logo} alt="#" /></Link> 
                <Link to='/home'><div className={style.logoText}>BSA <br />ПОИСК ПРОФФЕСИОНАЛОВ</div></Link>
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
                {!token && <Link to="/signin"><button className={style.auth_in}>Вход</button></Link>}
                {!token && <Link to="/signup"><button className={style.auth_register}>Регистрация</button></Link>}
                {token && (
                  <div className={style.auth}>
                    
                    <Link to="/executor"><span className={style.auth_in_person}>Stroy</span></Link>

                    <div className={style.auth_register} onClick={() => handlePersonModal()}>
                      <img src="https://i09.fotocdn.net/s129/48ff032c0b181c4d/public_pin_m/2926015383.jpg" alt="" />
                        {userModal && <button className={style.userModal} onClick={() => exitOutOfPersonPage()}>Выйти</button>}
                    </div>
                    
                  </div>
                )}
             </div>
          </div>
       
    </header>
    );
  };

export default Header;
