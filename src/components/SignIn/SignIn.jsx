import React, { useEffect, useState } from "react";
import style from "./SignIn.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logoHome from "../../assets/home.png";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const application = useSelector((state) => state.application);
    const error = useSelector((state) => state.application.error);
    const signingIn = useSelector((state) => state.application.signingIn);
    const [signingError, setSigningError] = useState("");

    const handleChangeLogin = (e) => {
        setLogin(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };
    // useEffect(() => {
    //     setSigningError(application.error)
    // }, [application.error])
    const handleSignIn = (login, password) => {
        dispatch(SignIn(login, password));
        console.log(application.error);
    };

    return (
        <div>
            <div className={style.signinHeader}>
                <div className={style.leftBlock}>
                    <img src={logoHome} alt="home" /> <b>Главная </b>
                </div>
                <div className={style.rightBlock}>
                    <div>
                        Еще не зарегистрированы?{" "}
                        <b>
                            <a href="/signup">Зарегистрироваться</a>
                        </b>
                    </div>
                </div>
            </div>
            <div className={style.signInContainer}>
                <h3>Авторизация</h3>

                <div className={style.inputContainer}>
                    <div className={style.label}>Логин</div>
                    <input
                        value={login}
                        onChange={(e) => handleChangeLogin(e)}
                    />
                </div>
                <div className={style.inputContainer}>
                    <div className={style.label}>Пароль</div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => handleChangePassword(e)}
                    />
                </div>

                <div>
                    {error && <div className={style.error}>{error}</div>}
                    <button
                        onClick={() => handleSignIn(login, password)}
                        disabled={signingIn}
                    >
                        Войти
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
