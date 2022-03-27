import React, { useEffect } from "react";
import styles from "./ServiceCategory.module.css";
import { useDispatch, useSelector } from "react-redux";
import EditModal from "./EditRemoveModal/EditModal";
import { useState } from "react";
import RemoveModal from "./EditRemoveModal/RemoveModal";
import moment from "moment";
import { loadServices } from "../../../redux/features/organization";
import { fetchOrders } from "../../../redux/features/orders";

const OrderCategory = () => {
    const dispatch = useDispatch()
    const orders = useSelector((state) => state.orders.orders);
    const user = useSelector((state) => state.organization.user)
    //   console.log(services)


    const [currentItem, setCurrentItem] = useState("");
    const [showEdit, setShowEdit] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const [showRemove, setShowRemove] = useState(false);
    // const [time, setTime] = useState()

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
            </div>
            <div className={styles.ServisesMap}>
                <div
                    style={{ fontSize: "48px", textAlign: "center" }}
                >
                    {orders.length > 0 ? "" : "У вас пока нет заказов..."}
                </div>
                {orders.map((item) => {
                    console.log(moment(item.time).fromNow())
                    return (
                        <div className={styles.cart}>
                            <div className={styles.name}>
                                <h1>{item.name}</h1>
                                <p className={styles.time}>
                                    <>🕐 {moment(item.time).format('Y-MMM-DD HH:MM')}</>
                                </p>
                            </div>
                            <div className={styles.description}>
                                <div className={styles.money}>
                                    <p>Телефон: {item.phone}р</p>
                                </div>
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
                                {showEdit ? (
                                    <EditModal
                                        showEdit={showEdit}
                                        handleShowEdit={handleShowEdit}
                                        item={currentItem}
                                    />
                                ) : (
                                    ""
                                )}

                                <button
                                    className={`${styles.removeBtn} ${styles.button}`}
                                    onClick={() => handleShowRemove(item)}
                                    disabled={showEdit || showRemove}
                                >
                                    <span>Отклонить</span>
                                </button>
                                {showRemove ? (
                                    <RemoveModal
                                        showRemove={showRemove}
                                        handleShowRemove={handleShowRemove}
                                        item={currentItem}
                                    />
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default OrderCategory;