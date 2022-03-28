import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchPage.module.css";
import SidebarBlock from "./SidebarBlock/SidebarBlock";
import Offer from "./Offer/Offer";
import SearchForm from "./SearchForm/SearchForm";
import { fetchCarts } from "../../redux/features/services";
import Cart from "../Cart/Cart";

const SearchPage = () => {
  const cards = useSelector((state) => state.services.services);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarts());
  }, [dispatch]);

  const textFromMainInput = window.location.href.split("?");
  const textHref = decodeURI(textFromMainInput[textFromMainInput.length - 1]);

  const textToFind = () => {
    if (textHref === textFromMainInput[0]) {
      return clearAdress;
    }
    return textHref;
  };

  const [clearAdress, setClearAdress] = useState("");
  const [inputText, setInputText] = useState(textToFind());
  const [categoryId, setCategoryId] = useState("");
  const [getCategory, setGetCategory] = useState(false);
  const [city, setCity] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [sortUp, setSortUp] = useState(false);
  const [sortDown, setSortDown] = useState(false);

  const executors = useSelector(state => state.services.executors)

  const filteredCarts = cards.filter((card) => {
    if (
      (card.serviceName.toLowerCase().includes(inputText.toLowerCase()) ||
        !inputText) &&
      (card.categoryId === categoryId || !categoryId) &&
      (card.price >= priceFrom || !priceFrom) &&
      (card.price <= priceTo || !priceTo)
    ) {
      return true;
    }
    return false;
  });

  const sortedUp = (arr) => {
    const sortedArr = arr.sort((a, b) => {
      return a.price - b.price;
    });
    return sortedArr;
  };
  const sortedDown = (arr) => {
    const sortedArr = arr.sort((a, b) => {
      return b.price - a.price;
    });
    return sortedArr;
  };

  let sortedFilter;
  if (sortUp) {
    sortedFilter = sortedUp(filteredCarts);
  }
  if (sortDown) {
    sortedFilter = sortedDown(filteredCarts);
  }
  if (!sortUp && !sortDown) {
    sortedFilter = filteredCarts;
  }

  return (
    <div className={styles.SearchPage}>
      <Offer />

      <SearchForm inputText={inputText} setInputText={setInputText} />
      <div className={styles.Wrapper}>
        <div className={styles.carts}>
          {sortedFilter.map((card) => {
            return <Cart card={card} key={card._id} executor={executors.find(executor => executor._id === card.executorId)}/>;
          })}
          {!sortedFilter.length && <div>Ничего не найдено</div>}
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
          sortUp={sortUp}
          setSortUp={setSortUp}
          sortDown={sortDown}
          setSortDown={setSortDown}
        />
      </div>
    </div>
  );
};

export default SearchPage;
