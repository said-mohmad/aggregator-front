import React, { useState } from "react";
import styles from "./SearchForm.module.css";

const SearchForm = ({ inputText, setInputText }) => {
  const textFromMainInput = window.location.href.split("?")
  
  const [textHref, setTextHref] = useState(
    decodeURI(textFromMainInput[textFromMainInput.length - 1])
  );

  const handleInput = (e) => {
    setTextHref("");
    setInputText(e.target.value);
  };

  const handleFind = (text) => {
    console.log(inputText);

    setInputText("");
  };
  return (
    <div className={styles.searchForm}>
      <div className={styles.wrapper}>
        <input
          type="text"
          placeholder="Давайте найдем"
          value={inputText || textHref}
          onChange={(e) => handleInput(e)}
        />
        <button onClick={() => handleFind(inputText)}>Поиск</button>
      </div>
    </div>
  );
};

export default SearchForm;
