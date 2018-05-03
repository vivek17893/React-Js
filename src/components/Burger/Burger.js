import React from "react";
import classes from "./Burger.css";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";

// <div className={classes.Burger}>
// <BurgerIngredient type="cheese" />
// <BurgerIngredient type="meat" />

const burger = props => {
  const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
    // return <BurgerIngredient key={igKey + 1} type={igKey} />;
  });
  console.log(transformedIngredients);
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
