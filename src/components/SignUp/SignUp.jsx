import style from "./SignUp.module.css";
import logoHome from "../../assets/home.png"

const SignUp = () => {
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
                    <input placeholder="" />
                </div>
                <div className={style.inputContainer}>
                    <div className={style.label}>Придумайте логин</div>
                    <input placeholder="" />
                </div>
                <div className={style.inputContainer}>
                    <div className={style.label}>Придумайте пароль</div>
                    <input type="password" />
                </div>
                <div className={style.inputContainer}>
                    <div className={style.label}>Повторите пароль</div>
                    <input type="password" />
                </div>
                <div className={style.inputContainer}>
                    <div className={style.label}>Номер мобильного телефона</div>
                    <input placeholder="" />
                </div>
                <div className={style.inputContainer}>
                    <div className={style.label}>Город</div>
                    <input placeholder="" />
                </div>
                <div>
                    <button>Зарегистрироваться</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
