import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../redux/features/categories";
import styles from "./Sidebar.module.css";

const SidebarBlock = ({ categoryId, setCategoryId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categories = useSelector((state) => state.categories.categories);
  // console.log(categories)
  const handleCategoryId = (id) => {
    setCategoryId(id);
  };
  return (
    <div className={styles.SidebarForm}>
      <div className={styles.region}>
        <p>Регион</p>
        <select
          id={styles.selecttheme}
          onChange={(e) => console.log(e.target.value)}
        >
          <option value="Все города">Все города</option>
          <option value="Ингушетия">Ингушетия</option>
          <option value="Чеченская Республика">Чеченская Республика</option>
          <option value="Москва">Москва</option>
          <option value="Киев">Киев</option>
          <option value="Нью-йорк">Нью-йорк</option>
        </select>
        <input type="text" placeholder="        Найти мой город" />
      </div>

      <div className={styles.Sidebar}>
        <div className={styles.CategoryTitle}>Виды работ:</div>

        {categories.map((category) => {
          return (
            <div key={category._id} className={styles.CategoryOfMap}>
              <span
                onClick={() => handleCategoryId(category._id)}
              >
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
