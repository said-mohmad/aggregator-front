import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addedService } from '../../../redux/features/addService';
import { loadServices } from '../../../redux/features/organization';
import  PhotoAdd from '../../AddPhotoBlock/PhotoAdd'
import styles from "./ServiceCategory.module.css"

const ServiceAdd = ({ showAdd, handleShowAdd }) => {
    const categories = useSelector(state => state.categories.categories)
    const loading = useSelector(state => state.addService.loading)

    const dispatch = useDispatch()

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [stop, setStop] = useState(false)
    const [category, setCategory] = useState('')

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handlePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleAdd = () => {
        if (!name && !description && !price) {
            setStop(true)
        } else {
            setStop(false)
            // console.log(category)
            // dispatch(addedService(name, description, price, category))
            handleOnDrop()
            handleShowAdd()
            dispatch(loadServices())

        }
    }

    //код Сайд-Мохьмада для загрузки изображения перетаскиванием 
    const [drag, setDrag] = useState(false);

    const handleDragStart = (e) => {
        e.preventDefault();
        setDrag(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDrag(false);
    };
    const token = localStorage.getItem('token');

    const handleOnDrop = (e) => {
        e.preventDefault();
        let files = [...e.dataTransfer.files];
        const formData = new FormData();
        formData.append('image', files[0]);
        formData.append('serviceName', name);
        formData.append('categoryId', category)
        formData.append('price', price)
        fetch("http://localhost:4000/services", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch((e) => console.log(e, toString()));
        setDrag(false);
    }




    return (
        <div className={`${styles.modal} ${!showAdd ? styles.hide : styles.show}`}>
            <div className={styles.modalDialog}>
                <div className={styles.modalContent}>
                    <div className={styles.modalHeader}>
                        <h3 className={styles.modalTitle}>Создание услуги</h3>
                        <a onClick={handleShowAdd} className={styles.close}>×</a>
                    </div>
                    <div className={styles.modalBody}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '16px', padding: '10px 5px' }}>
                            <div style={{ width: '35%' }}>Название</div>
                            <div style={{ width: '65%' }}><input value={name} onChange={handleName} style={{ width: '100%' }} placeholder='Необходимо ввести название' /></div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '16px', padding: '10px 5px' }}>
                            <div style={{ width: '35%', alignSelf: 'self-start' }}>Описание</div>
                            <div style={{ width: '65%' }}><textarea value={description} onChange={handleDescription} style={{ width: '100%', minHeight:'50px' }} placeholder='Необходимо ввести описание' /></div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '16px', padding: '10px 5px' }}>
                            <div style={{ width: '35%' }}>Цена</div>
                            <div style={{ width: '65%' }}><input value={price} onChange={handlePrice} style={{ width: '100%' }} placeholder='Необходимо ввести цену' /></div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '16px', padding: '10px 5px' }}>
                            <div style={{ width: '35%' }}>Категория</div>
                            <div style={{ width: '65%' }}>
                                <select value={category} onChange={handleCategory}>
                                    {categories.map(item => {
                                        return (<option value={item._id}>{item.title}</option>)
                                    })}
                                </select>
                            </div>
                        </div>
                        {/* Код Альви для загрузки фотографии  */}
                       
                            <PhotoAdd />
                        
                        {/* Конец кода Альви */}
                        {/* код Сайд-Мохьмада для загрузки изображений перетаскиванием */}
                        <div className={styles.addImage}>
                            {console.log(drag)}
                            {drag
                                ? <div className={styles.dropArea}
                                    onDragStart={e => handleDragStart(e)}
                                    onDragLeave={e => handleDragLeave(e)}
                                    onDragOver={e => handleDragStart(e)}
                                    onDrop={e => handleOnDrop(e)}
                                >Отпустите файлы, чтобы загрузить их</div>

                                : <div className={styles.dropArea}
                                    onDragStart={e => handleDragStart(e)}
                                    onDragLeave={e => handleDragLeave(e)}
                                    onDragOver={e => handleDragStart(e)}
                                >Перетащите файлы, чтобы загрузить их</div>}
                            <file></file>
                            {/* Стили от Исмаила (Можно удалить) */}
                            <div style={{ textAlign:'center' }}>
                                <button style={{margin:'20px 0'}}>Обзор</button>
                                <div>Выберите изображение для услуги</div>
                            </div>

                        </div>
                        {/*конец кода Сайд-Мохьмада */}
                        <div style={{ fontSize: '18px', color: 'red', textAlign: 'center', margin: '10px 0' }}>
                            {stop && 'Пожалуйста, заполните поля'}
                        </div>
                        <div style={{ textAlign: 'center', display: "grid", margin: 'auto', justifyContent: 'space-around'}}>
                            <button onClick={handleAdd} className={`${styles.editBtn} ${styles.button}`}><span>Подтвердить</span></button>
                            <button onClick={handleShowAdd} className={`${styles.removeBtn} ${styles.button}`} ><span>Отменить</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default ServiceAdd;