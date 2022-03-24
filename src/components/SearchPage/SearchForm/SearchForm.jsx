import React from 'react';
import styles from './SearchForm.module.css'

const SearchForm = () => {
    return (
        <div className={styles.searchForm}>
            <div className={styles.wrapper}>
                <input type="text" />
                <button>Поиск</button>
            </div>
        </div>
    );
};

export default SearchForm;