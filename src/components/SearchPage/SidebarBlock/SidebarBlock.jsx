import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../../redux/features/categories';
import styles from './Sidebar.module.css'

const SidebarBlock = () => {

    const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categories = useSelector(state => state.categories.categories)
    // console.log(categories)

    return (
        <div className={styles.SidebarForm}>

            <div className={styles.region}>
                <p>Регион</p>
                <select id={styles.selecttheme}>
                    <option value="Gre">Ингушетия</option>      
                    <option value="Mar">Чеченская республика</option>
                    <option value="Yel">Москва</option>
                    <option value="Blu">Киев</option>
                    <option value="Red">Нью-йорк</option>
                    </select>
                    <input type="text" placeholder='        Найти мой город'/>
            </div>

            <div className={styles.Sidebar}>
                <div className={styles.CategoryTitle}>
                    Виды работ:
                </div>

                {categories.map(category => {
                    return <div className={styles.CategoryOfMap}>
                            <span>{category.title}</span>
                    </div>
                })}


            </div>
        </div>
        
    );
};

export default SidebarBlock;