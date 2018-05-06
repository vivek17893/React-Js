import React from "react";
import classes from "./Button.css";

const button = props => {
  let classes = ["Button"];
  classes.push(props.btnType);
  return (
    <button className={classes.join(" ")} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default button;
