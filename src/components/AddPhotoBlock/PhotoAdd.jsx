import React, { useState } from 'react';
import axios from 'axios';
import styles from './PhotoAdd.module.css'

const PhotoAdd = () => {

    const [file, setFile] = useState(null);

    const onFormSubmit =(e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('photo', file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        const url = 'http://localhost:4000/upload'
        axios.post(url, formData, config).then((response) => {
            alert('Фотография успешно загружена')
        }).catch((err) => {
            console.log('err', err)
        })
    }

    const onInputChange = (e) =>{
        setFile(e.target.files[0])
    }
    return (
        <div className={styles.AddPhotoForm}>
            <form className={styles.Wrapper} onSubmit={onFormSubmit}>
                <input className={styles.input} type='file' name='photo' onChange={onInputChange}></input>
                <button className={styles.button} type='submit'>Загрузить</button>
            </form>
        </div>
    );
};

export default PhotoAdd;