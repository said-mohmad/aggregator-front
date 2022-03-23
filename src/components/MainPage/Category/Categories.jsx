import React from "react";
import { useSelector } from "react-redux";
import Category from "./Category";
import style from "./Category.module.css";

const Categories = () => {

  const categories = useSelector((state) => state.categories.categories);
  console.log(categories)

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
