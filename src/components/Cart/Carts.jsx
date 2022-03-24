import React, { useEffect } from "react";
import styles from './cart.module.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchCarts } from "../../redux/features/services";
import Cart from "./Cart";

const Carts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarts());
  }, [dispatch]);

  const cards = useSelector((state) => state.services.services);
  // const loading = useSelector((state) => state.services.loading);

  return (
    <div className={styles.carts}> 
        {cards.map((card) => {
          return <Cart card={card} key={card._id} />;
        })}
    </div>
  );
};

export default Carts;
