import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarts } from "../redux/features/carts";
import Cart from "./Cart";

const Carts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarts());
  }, [dispatch]);

  const cards = useSelector((state) => state.services.text);
  const loading = useSelector((state) => state.services.loading);
  console.log(cards);
  console.log(loading);

  return (
    <div> 
        {cards.map((card) => {
          return <Cart card={card} key={card._id} />;
        })}
    </div>
  );
};

export default Carts;
