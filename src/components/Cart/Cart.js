import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import Checkout from "./Checkout";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-items"]}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`₹ ${cartCtx.totalAmount.toFixed(2)}`}</span>
      </div>
      <Checkout />
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>{" "}
        {hasItems && <button className={classes.button}>Order </button>}
      </div>
    </Modal>
  );
};

export default Cart;
