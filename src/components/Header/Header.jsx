import React, { useEffect, useState } from "react";
import style from "./Header.module.css";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from 'react-router-dom'
import ReactScroll from "react-scroll";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadOrganization } from "../../redux/features/organization";


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
  

  //Код для вывода имени от Исмаила
  const dispatch = useDispatch()

  // useEffect(()=>{
  //   dispatch(loadOrganization())
  // })

  const user = useSelector(state=>state.organization.user)
  //=================================
  
  return (
    <header className={style.headerContainer}>
          <div className={style.header}>

             <div className={style.logoContainer}>
                <Link to='/home'><img className={style.logoImg} src={logo} alt="#" /></Link> 
                <Link to='/home'><div className={style.logoText}>BSA <br />ПОИСК ПРОФФЕСИОНАЛОВ</div></Link>
             </div>

             <div className={style.navContainer}>
                    <ul className={style.nav}>

                      <Link activeclass="active" to="/search"  smooth={"true"} offset={1000} duration={150} className={style.li} >Категории</Link>
                      <ReactScroll.Link activeclass="active" to="Promotion"  smooth={"true"} offset={150} duration={150} className={style.li}>Исполнители</ReactScroll.Link>
                      <ReactScroll.Link activeclass="active" to="Promotion"  smooth={"true"} offset={150} duration={150} className={style.li}>Контакты</ReactScroll.Link>
                      <ReactScroll.Link activeclass="active" to="OboutUs"  smooth={"true"} offset={150} duration={150} className={style.li}>О нас</ReactScroll.Link>
                    </ul>
             </div>
             <div className={style.auth}>
                {!token && <Link to="/signin"><button className={style.auth_in}>Вход</button></Link>}
                {!token && <Link to="/signup"><button className={style.auth_register}>Регистрация</button></Link>}
                {token && (
                  <div className={style.auth}>
                    
                    <Link to="/executor"><span className={style.auth_in_person}>{user && user.executor}</span></Link>

                    <div className={style.auth_register} onClick={() => handlePersonModal()}>
                      <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
                        {userModal && <button className={style.userModal} onClick={() => exitOutOfPersonPage()}>Выход</button> }
                    </div>
                    
                  </div>
                )}
             </div>
          </div>
       
    </header>
    );
  };

export default Header;
