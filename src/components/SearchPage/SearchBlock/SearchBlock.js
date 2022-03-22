import React from 'react';
import styles from './SearchBlock.module.css'

const SearchBlock = () => {
    return (
        <div className={styles.SearchBlock}>
            <input type="text" />
            <button>ПОИСК</button>
        </div>
    );
};

export default SearchBlock;