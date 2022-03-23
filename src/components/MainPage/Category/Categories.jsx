import React from "react";
import Category from "./Category";
import style from "./Category.module.css";

const Categories = () => {


  return (
    <div>
      <div className={style.categories}>

        <Category name="Category1" />
        <Category name="Category2" />
        <Category name="Category3" />
        <Category name="Category4" />
      </div>
    </div>
  );
};

export default Categories;
