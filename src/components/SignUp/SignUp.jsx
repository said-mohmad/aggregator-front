import style from "./SignUp.module.css";
import logoHome from "../../assets/home.png"
import React,{ useState } from "react";

const SignUp = () => {
    const [executor, setExecutor] = useState("");
    const [password, setPassword] = useState("");
    const [repeat, setRepeat] = useState("");
    const [login, setLogin] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");

    const handleChangeExecutor = (e) => {
        setExecutor(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleChangeRepeat = (e) => {
        setRepeat(e.target.value)
    }

    const handleChangeLogin = (e) => {
        setLogin(e.target.value)
    }

    const handleChangePhone = (e) => {
        setPhone(e.target.value)
    }

    const handleChangeCity = (e) => {
        setCity(e.target.value)
    }

    const handleClickSignUp = (login, executor, password, phone, city, repeat ) => {
        console.log(login, executor, password, phone, city, repeat )
    }

    return (
        <div>
            <div className={style.signupHeader}>
                <div className={style.leftBlock}> <img src={logoHome} alt="home" /><b>Главная</b></div>
                <div className={style.rightBlock}>
                    <span>Уже есть аккаунт? </span>  
                   <b><a href="/signin">Войти</a></b> 
                </div>
            </div>
            <div className={style.signUpContainer}>
                <h3>Регистрация</h3>
                <div className={style.inputContainer}>
                    <div className={style.label}>Имя компании</div>
                    <input value={executor} onChange={(e) => handleChangeExecutor(e)} />
                </div>
                <div className={style.inputContainer}>
                    <div className={style.label}>Придумайте логин</div>
                    <input value={login} onChange={(e) => handleChangeLogin(e)} />
                </div>
                <div className={style.inputContainer}>
                    <div className={style.label}>Придумайте пароль</div>
                    <input type="password" value={password} onChange={(e) => handleChangePassword(e)} />
                </div>
                <div className={style.inputContainer}>
                    <div className={style.label}>Повторите пароль</div>
                    <input type="password" value={repeat} onChange={(e) => handleChangeRepeat(e)} />
                </div>
                <div className={style.inputContainer}>
                    <div className={style.label}>Номер мобильного телефона</div>
                    <input value={phone} onChange={(e) => handleChangePhone(e)} />
                </div>
                <div className={style.inputContainer}>
                    <div className={style.label}>Город</div>
                    <input value={city} onChange={(e) => handleChangeCity(e)} />
                </div>
                <div>
                    <button onClick={() => handleClickSignUp(login, executor, password, phone, city, repeat )}>Зарегистрироваться</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
