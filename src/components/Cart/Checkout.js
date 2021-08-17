import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const pinCodeLengthFail = (value) => value.trim().length !== 6;

const Checkout = (props) => {
  const [formInputValid, setFormInputValid] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
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

    setFormInputValid({
      name: enteredNameValid,
      street: enteredStreetValid,
      postal: enteredPostalValid,
      city: enteredCityValid,
    });
    const formIsValid =
      enteredNameValid &&
      enteredStreetValid &&
      enteredPostalValid &&
      enteredCityValid;

    if (!formIsValid) {
      return;
    }
  };
  const nameControlClasses = `${classes.control} ${
    formInputValid.name ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputValid.street ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputValid.city ? "" : classes.invalid
  }`;
  const postalControlClasses = `${classes.control} ${
    formInputValid.postal ? "" : classes.invalid
  }`;
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name </label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValid.name && <p>Please enter a valid name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValid.street && <p>Please enter a valid street</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal </label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputValid.postal && <p>Please enter a valid postal</p>}
      </div>

      <div className={cityControlClasses}>
        <label htmlFor="city">City </label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValid.city && <p>Please enter a valid city</p>}
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
