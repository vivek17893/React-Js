import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";
import "../../UI/Button/Button.css";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey, i) => {
    return (
      <li key={igKey + i}>
        <span style={{ textTransform: "capitalize" }}> {igKey} </span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price:{props.price.toFixed(2)}</strong>
      </p>
      <p>Checkout?</p>
      <Button clicked={props.purchaseCancelled} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.purchaseContinued} btnType="Success">
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
