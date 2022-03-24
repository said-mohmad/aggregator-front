import React from 'react';
import styles from './SearchPage.module.css'
import SidebarBlock from './SidebarBlock/SidebarBlock'

// import CardsBlock from '../Cart/Carts'
import SearchBlock from '../MainPage/SearchBlock/SearchBlock';

import Carts from '../Cart/Carts';
import Offer from './Offer/Offer';
import SearchForm from './SearchForm/SearchForm';



const SearchPage = () => {
    
    return (
        <div className={styles.SearchPage}>
            <Offer />
            <SearchForm/>
            <div className={styles.Wrapper}>
            <Carts />
            <SidebarBlock />

            {/* <CardsBlock /> */}

            </div>
        </div>
    );
};

export default SearchPage;