import React, { useEffect, useState } from "react";
import style from "./SignIn.module.css";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/features/application";
import { Link } from "react-router-dom";
import logoHome from "../../assets/home.png";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const error = useSelector((state) => state.application.error);
    const signingIn = useSelector((state) => state.application.signingIn);
    const token = useSelector((state) => state.application.token);

    const handleChangeLogin = (e) => {
        setLogin(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };
    // console.log(Boolean(localStorage.getItem('token')));
    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate("/home");
        }
    }, [token, navigate]);
    const handleSignIn = (e, login, password) => {
        e.preventDefault();
        dispatch(signIn(login, password));
        console.log(error, signingIn);
        if (!error && token) {
            navigate("/home");
        }
    };

    return (
        <div>
            <div className={style.signinHeader}>
                <div className={style.leftBlock}>
                   <Link to="/home"> <img src={logoHome} alt="home" />Главная</Link>
                </div>
                <div className={style.rightBlock}>
                    <div>
                        Еще не зарегистрированы?{" "}
                        <b>
                            <Link to="/signup">Зарегистрироваться</Link>
                        </b>
                    </div>
                </div>
            </div>
            <div className={style.signInContainer}>
                <h3>Авторизация</h3>
                <form onSubmit={(e) => handleSignIn(e, login, password)}>
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
                        {(error && (
                            <div className={style.error}>
                                Ошибка авторизации
                            </div>
                        )) ||
                            (signingIn && <div>Идет авторизация...</div>)}
                        <button
                            // onClick={() => handleSignIn(login, password)}
                            type="submit"
                            disabled={signingIn}
                        >
                            Войти
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
