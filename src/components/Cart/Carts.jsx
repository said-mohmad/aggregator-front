import React, { useEffect } from "react";
import styles from "./cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarts, fetchExecutor } from "../../redux/features/services";
import Cart from "./Cart";

const Carts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarts());
    // dispatch(fetchExecutor())
  }, [dispatch]);

  const cards = useSelector((state) => state.services.services);
  // console.log(cards);

  return (
    <div className={styles.carts}>
      {cards.map((card) => {
        return <Cart card={card} key={card._id} />;
      })}
    </div>
  );
};

export default Carts;
