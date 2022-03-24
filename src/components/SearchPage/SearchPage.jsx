import React from 'react';
import styles from './SearchPage.module.css'
import SidebarBlock from './SidebarBlock/SidebarBlock'
// import CardsBlock from '../Cart/Carts'
import SearchBlock from '../MainPage/SearchBlock/SearchBlock';


const SearchPage = () => {
    
    return (
        <div className={styles.SearchPage}>
            <SearchBlock />
            <div className={styles.Wrapper}>
            <SidebarBlock />
            {/* <CardsBlock /> */}
            </div>
        </div>
    );
};

export default SearchPage;