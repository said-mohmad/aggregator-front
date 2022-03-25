import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchPage.module.css";
import SidebarBlock from "./SidebarBlock/SidebarBlock";
import Offer from "./Offer/Offer";
import SearchForm from "./SearchForm/SearchForm";
import { fetchExecutor } from "../../redux/features/services";
import Cart from "../Cart/Cart";

const SearchPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExecutor());
  }, [dispatch]);

  const cards = useSelector((state) => state.services.services);
  const executors = useSelector((state) => state.services.executors);

  const [inputText, setInputText] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [getCategory, setGetCategory] = useState(false);
  const [city, setCity] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");

  /* const executorsCityAndId = executors.map((executor) => {
    let a = {};
    a.id = executor._id;
    a.city = executor.city;
    return a;
  });
  console.log(executorsCityAndId); */

  const filteredCarts = cards.filter((card) => {
   /*  const a = executorsCityAndId.find(
      (executor) => executor.id === card.executorId
    );
    const executorCity = a.city; */
    if (
      (card.serviceName.toLowerCase().includes(inputText.toLowerCase()) ||
        !inputText) &&
      (card.categoryId === categoryId || !categoryId) &&
      (card.price >= priceFrom || !priceFrom) &&
      (card.price <= priceTo || !priceTo)
      /*         &&
        (executorCity === city || city === "Все города")) ||
      !city */
    ) {
      return true;
    }
  });

  return (
    <div className={styles.SearchPage}>
      <Offer />

      <SearchForm inputText={inputText} setInputText={setInputText} />
      <div className={styles.Wrapper}>
        <div className={styles.carts}>
          {filteredCarts.map((card) => {
            return <Cart card={card} key={card._id} />;
          })}
          {!filteredCarts.length && <div>Ничего не найдено</div>}
        </div>

        <SidebarBlock
          categoryId={categoryId}
          setCategoryId={setCategoryId}
          city={city}
          setCity={setCity}
          priceFrom={priceFrom}
          setPriceFrom={setPriceFrom}
          priceTo={priceTo}
          setPriceTo={setPriceTo}
          getCategory={getCategory}
          setGetCategory={setGetCategory}
        />
      </div>
    </div>
  );
};

export default SearchPage;
