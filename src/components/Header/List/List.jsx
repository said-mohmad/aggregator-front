import React from "react";
import style from './List.module.css';

const List = (props) => {
  return (
    <div className={style.dropdown}>
      <button className={style.dropbtn}>{props.name}</button>
      <div className={style.dropdownContent}>
        <a href="##">Link 1</a>
        <a href="###">Link 2</a>
        <a href="####">Link 3</a>
      </div>
    </div>
  );
};

export default List;
