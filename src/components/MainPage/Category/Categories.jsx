import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import  { fetchCategories } from "../../../redux/features/categories";
import Category from "./Category";
import style from "./Category.module.css";

const Categories = () => {

  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categories = useSelector(state => state.categories.categories)


  return (
    <div className={style.CategoriesContainer}>
      <div className={style.wrapper}>
         {categories.map((item, index) => {
        return (
            <Category key={index} categories={item} />
        )
      })}
      </div>      
    </div>
  );
};

export default Categories;
