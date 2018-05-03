import React from "react";
import Aux from "../../hoc/Aux";
import "./Layout.css";
import classes from "./Layout.css";

// <main className={classes.Content}>{props.children}</main>
const layout = props => (
  <Aux>
    <div>Toolbar,Sidebar,Backdrop</div>
    <main className="Content">{props.children}</main>
  </Aux>
);

export default layout;
