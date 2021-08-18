import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const updatedTotalAmount1 =
        state.totalAmount + action.payload.price * action.payload.amount;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount1,
      };
    case "REMOVE_ITEM":
      const existingCartItemIndex2 = state.items.findIndex(
        (item) => item.id === action.payload
      );
      const existingItem = state.items[existingCartItemIndex2];
      const updatedTotalAmount2 = state.totalAmount - existingItem.price;
      let updatedItems1;
      if (existingItem.amount === 1) {
        updatedItems1 = state.items.filter(
          (item) => item.id !== action.payload
        );
      } else {
        const updatedItem1 = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems1 = [...state.items];
        updatedItems1[existingCartItemIndex2] = updatedItem1;
      }

      return {
        items: updatedItems1,
        totalAmount: updatedTotalAmount2,
      };
    case "CLEAR":
      return defaultCartState;
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
  const clearCartHandler = () => {
    dispatch({ type: "CLEAR" });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
