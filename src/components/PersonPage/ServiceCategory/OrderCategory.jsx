import React, { useEffect } from "react";
import styles from "./ServiceCategory.module.css";
import { useDispatch, useSelector } from "react-redux";
import EditModal from "./EditRemoveModal/EditModal";
import { useState } from "react";
import RemoveModal from "./EditRemoveModal/RemoveModal";
import moment from "moment";
import { loadServices } from "../../../redux/features/organization";
import { fetchOrders } from "../../../redux/features/orders";
import Loader from "../Loader/Loader";

const OrderCategory = () => {
    const dispatch = useDispatch()
    const orders = useSelector((state) => state.orders.orders);
    const user = useSelector((state) => state.organization.user);
    const loading = useSelector((state) => state.orders.loading)
    //   console.log(services)


    const [currentItem, setCurrentItem] = useState("");
    const [showEdit, setShowEdit] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const [showRemove, setShowRemove] = useState(false);
    const [time, setTime] = useState(false)


  const handleTime = () => {
    setTime(!time)
  }

    useEffect(() => {
        dispatch(fetchOrders(user._id))
    }, [dispatch])

    const handleShowEdit = (item) => {
        setShowEdit(!showEdit);
        setCurrentItem(item);
    };

    const handleShowRemove = (item) => {
        setShowRemove(!showRemove);
        setCurrentItem(item);
    };

    const handleReload = () => {
        dispatch(loadServices())
    }

    console.log(orders)

    return (
        <div className={styles.servises}>
            <div className={styles.addServise}>
                <div style={{ display: 'flex', justyfyContent: 'space-between', alignItems: 'center' }}>
                    <div onClick={handleReload} className={styles.reloadBtn}></div>
                    <h3>Список заказов</h3>
                </div>
                <div onClick={handleTime} className={styles.clock} style={{cursor:'pointer', fontSize:'30px'}}>🕐</div>
            </div>
            <div className={styles.ServisesMap}>
                <div
                    style={{ fontSize: "48px", textAlign: "center" }}
                >
                    {loading ? <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Loader /></div> : ''}
                    {orders.length === 0 && !loading ? "У вас пока нет заказов..." : ""}
                </div>
                {orders.map((item, index) => {
                    
                    return (
                        <div className={styles.cart} key={index}>
                            <div className={styles.name}>
                                <h1>{item.name}</h1>
                                <h5 className={styles.time}>
                                 {time ? moment(item.time).format('Y-MMM-DD HH:MM') : moment(item.time).fromNow()}
                                </h5>
                            </div>
                                <div className={styles.money}>
                                    <h3>Телефон: {item.phone}р</h3>
                                </div>
                            <div
                                style={{ width: "80%", margin: "auto", textAlign: "center" }}
                            >
                                <button
                                    className={`${styles.editBtn} ${styles.button}`}
                                    onClick={() => handleShowEdit(item)}
                                    disabled={showEdit || showRemove}
                                >
                                    <span>Принять</span>
                                </button>
                                {/* {showEdit ? (
                                    <EditModal
                                        showEdit={showEdit}
                                        handleShowEdit={handleShowEdit}
                                        item={currentItem}
                                    />
                                ) : (
                                    ""
                                )} */}

                                <button
                                    className={`${styles.removeBtn} ${styles.button}`}
                                    onClick={() => handleShowRemove(item)}
                                    disabled={showEdit || showRemove}
                                >
                                    <span>Отклонить</span>
                                </button>
                                {/* {showRemove ? (
                                    <RemoveModal
                                        showRemove={showRemove}
                                        handleShowRemove={handleShowRemove}
                                        item={currentItem}
                                    />
                                ) : (
                                    ""
                                )} */}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default OrderCategory;