import React from 'react';
import styles from './SearchPage.module.css'
import SearchBlock from './SearchBlock/SearchBlock';
import SidebarBlock from './SidebarBlock/SidebarBlock'
import CardsBlock from './CardsBlock/CardsBlock'

const Main = () => {
    return (
        <div className={styles.SearchPage}>
            <SearchBlock />
            <div className={styles.Wrapper}>
            <SidebarBlock />
            <CardsBlock />
            </div>
        </div>
    );
};

export default Main;