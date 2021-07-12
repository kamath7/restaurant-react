import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const Cart = (props) => {
  const cartItems = [
    { id: "m1", name: "Fish Curry Rice", amount: 2, price: 240 },
    { id: "m2", name: "Rabdi", amount: 2, price: 45 },
  ];
  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-items"]}>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>69.69</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>{" "}
        <button className={classes.button}>Order </button>{" "}
      </div>
    </Modal>
  );
};

export default Cart;
