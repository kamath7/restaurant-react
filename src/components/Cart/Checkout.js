import React, { useRef } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const pinCodeLengthFail = (value) => value.trim().length !== 6;

const Checkout = (props) => {
  const nameInputRef = useRef();
  const steetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameValid = !isEmpty(enteredName);
    const enteredStreetValid = !isEmpty(enteredStreet);
    const enteredPostalValid = !pinCodeLengthFail(enteredPostal);
    const enteredCityValid = !isEmpty(enteredCity);

    const formIsValid =
      enteredNameValid &&
      enteredStreetValid &&
      enteredPostalValid &&
      enteredCityValid;
      
  };
  return (
    <form>
      <div className={classes.control}>
        <label htmlFor="name">Your Name </label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal </label>
        <input type="text" id="postal" ref={postalInputRef} />
      </div>

      <div className={classes.control}>
        <label htmlFor="city">City </label>
        <input type="text" id="city" ref={cityInputRef} />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} onClick={confirmHandler}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
