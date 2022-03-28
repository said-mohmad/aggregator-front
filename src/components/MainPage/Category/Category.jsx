import React from 'react';
import { Link } from 'react-router-dom';
import style from "./Category.module.css";

const Category = (categories) => {
    return (
      <Link to="/search">
          <div className={style.container}>
            <img src={categories.categories.img} alt="Avatar" className={style.image} />
            <div className={style.middle}>
              <div className={style.text}>{categories.categories.title}</div>
            </div>
          </div>
          </Link>
    );
};

export default Category;