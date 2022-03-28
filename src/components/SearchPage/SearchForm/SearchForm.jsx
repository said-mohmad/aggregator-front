import React from "react";
import styles from "./SearchForm.module.css";

const SearchForm = ({ inputText, setInputText }) => {
  const handleInput = (e) => {
    setInputText(e.target.value);
    
  };

  const handleFind = (text) => {
    setInputText("");
  };
  return (
    <div className={styles.searchForm}>
      <div className={styles.wrapper}>
        <input
          type="text"
          placeholder="  Поиск по сайту"
          value={inputText}
          onChange={(e) => handleInput(e)}
        />
        <button onClick={() => handleFind(inputText)}>Поиск</button>
      </div>
    </div>
  );

};

export default SearchForm;
