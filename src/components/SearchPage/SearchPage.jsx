import React, { useState } from "react";
import styles from "./SearchPage.module.css";
import SidebarBlock from "./SidebarBlock/SidebarBlock";
import Carts from "../Cart/Carts";
import Offer from "./Offer/Offer";
import SearchForm from "./SearchForm/SearchForm";
import { useSelector } from "react-redux";

const SearchPage = () => {
  const cards = useSelector((state) => state.services.services);
  const [inputText, setInputText] = useState("");
  const [categoryId, setCategoryId] = useState("")
  console.log(categoryId);
  const filteredCarts = cards.filter((card) => card.serviceName.toLowerCase().includes(inputText.toLowerCase())
  );
  

  return (
    <div className={styles.SearchPage}>
      <Offer />
      <SearchForm inputText={inputText} setInputText={setInputText} />
      <div className={styles.Wrapper}>
        <Carts filteredCarts={filteredCarts} />
        <SidebarBlock categoryId={categoryId} setCategoryId={setCategoryId} />
      </div>
    </div>
  );
};

export default SearchPage;
