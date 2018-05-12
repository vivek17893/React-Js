import React from "react";
import "./Order.css";
const order = props => {
  // let ingredients = { ...props.ingredients };
  // let ingredientKeys = Object.keys(ingredients).map(ingredient => {
  //   console.log("djbvhdvfvhjb==========>", ingredient);
  //   return (
  //     <p>
  //       {ingredient} : {ingredients[ingredient]}
  //     </p>
  //   );
  // });
  // {ingredientKeys}

  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientOutput = ingredients.map(ig => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "10px"
        }}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });
  return (
    <div className="Order">
      <p>{ingredientOutput}</p>
      <p>
        Price : <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
