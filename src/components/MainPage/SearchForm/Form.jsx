import React from 'react';
import style from "./Form.module.css";
const Form = () => {
    return (
        <div className={style.searchContainer}>
            <input type="text" />
            <button>ПОИСК</button>
        </div>
    );
};

export default Form;