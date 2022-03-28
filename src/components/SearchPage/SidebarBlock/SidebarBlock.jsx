import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../redux/features/categories";
import styles from "./Sidebar.module.css";

const SidebarBlock = ({
  categoryId,
  setCategoryId,
  city,
  setCity,
  priceFrom,
  setPriceFrom,
  priceTo,
  setPriceTo,
  getCategory,
  setGetCategory,
  generalArr,
  setGeneralArr,
  sortUp,
  setSortUp,
  sortDown,
  setSortDown
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categories = useSelector((state) => state.categories.categories);

  const handleCategoryId = (id) => {
    if (categoryId === id) {
      setGetCategory(false);
      setCategoryId("");
    } else {
      setGetCategory(true);
      setCategoryId(id);
    }
  };

  const handlePriceFrom = (e) => {
    if (e.target.value >= 0) setPriceFrom(e.target.value);
  };
  const handlePriceTo = (e) => {
    if (e.target.value >= 0) setPriceTo(e.target.value);
  };
  const selectSortUp = () => {
    setSortUp(!sortUp);
    setSortDown(false);
  };
  const selectSortDown = () => {
    setSortDown(!sortDown);
    setSortUp(false);
  };

  return (
    <div className={styles.SidebarForm}>
      <div className={styles.sortBlock}>
        <p>Сортировать по цене</p>
        <div className={styles.sortBtns}>
          <button
            className={sortUp && styles.selected}
            onClick={() => selectSortUp()}
          >
            Увеличение
          </button>
          <button
            className={sortDown && styles.selected}
            onClick={() => selectSortDown()}
          >
            Уменьшение
          </button>
        </div>
      </div>

      <div className={styles.priceBlock}>
        <div className={styles.priceTitle}>Стоимость услуг</div>
        <div className={styles.priceChange}>
          <p>ОТ</p>
          <input
            onChange={(e) => {
              handlePriceFrom(e);
            }}
            type="number"
            placeholder="0"
            value={priceFrom}
          />
        </div>
        <div className={styles.priceChange}>
          <p>ДО</p>
          <input
            onChange={(e) => {
              handlePriceTo(e);
            }}
            type="number"
            placeholder="0"
            value={priceTo}
          />
        </div>
      </div>

      <div className={styles.Sidebar}>
        <div className={styles.CategoryTitle}>Виды работ:</div>

        {categories.map((category) => {
          return (
            <div
              key={category._id}
              className={
                categoryId === category._id
                  ? styles.CategoryOfMapSelected
                  : styles.CategoryOfMap
              }
            >
              <span onClick={() => handleCategoryId(category._id)}>
                {category.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarBlock;
