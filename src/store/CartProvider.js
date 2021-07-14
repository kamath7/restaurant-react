import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const updatedTotalAmt =
        state.totalAmount + action.payload.price * action.payload.amount;
      const existingCartItemInd = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.item[existingCartItemInd];

      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemInd] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload);
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmt,
      };
    case "REMOVE_ITEM":
      const existingCartItemIndRemove = state.items.findIndex(
        (item) => item.id === action.payload
      );
      const existingCartItemRemove = state.items[existingCartItemIndRemove];
      const updatedTotalAmount =
        state.totalAmount - existingCartItemRemove.price;
      let updatedItems1;
      if (existingCartItemRemove.amount === 1) {
        updatedItems1 = state.items.filter((item) => item.id !== action.payload);
      } else {
        const updatedItem = {
          ...existingCartItemRemove,
          amount: existingCartItemRemove.amount - 1,
        };
        updatedItems1 = [...state.items];
        updatedItems1[existingCartItemIndRemove] = updatedItem;
      }
      return {
        items: updatedItems1,
        totalAmount: updatedTotalAmount,
      };
    default:
      return defaultCartState;
  }
};
const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);
  const addItemToCartHandler = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
