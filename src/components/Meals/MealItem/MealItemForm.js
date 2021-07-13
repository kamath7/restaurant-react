import React, { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const [noError, setNoError] = useState(true);
  const amountIpRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const amount = amountIpRef.current.value;
    if (amount.trim().length === 0 || +amount < 1 || +amount > 5) {
      setNoError(false);
      return;
    }
    props.onAddToCart(+amount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountIpRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
          placeholder: "1",
        }}
      />
      <button>+ Add</button>
      {!noError && <p>Enter valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
