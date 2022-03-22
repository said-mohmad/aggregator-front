import React from 'react';
import style from "./Category.module.css";

const Category = (props) => {
    return (
<div className={style.container}>
  <img src="https://html5css.ru/edithtm/img_avatar.png" alt="Avatar" className={style.image} />
  <div className={style.middle}>
    <div className={style.text}>{props.name}</div>
  </div>
</div>
    );
};

export default Category;