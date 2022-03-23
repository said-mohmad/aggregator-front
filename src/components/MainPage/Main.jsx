import React from "react";
import BackgroundBlock from "./BackgroundBlock/BackgroundBlock";
import Categories from "./Category/Categories";
import style from "./Main.module.css";
import SearchBlock from './SearchBlock/SearchBlock'

const Main = () => {
  return (
    <div className={style.main}>
      {/* <SearchBlock /> */}
      <BackgroundBlock />
      <Categories />
    </div>
  );
};

export default Main;
