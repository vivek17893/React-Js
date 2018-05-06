import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import "./Layout.css";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

// <main className={classes.Content}>{props.children}</main>

class Layout extends Component {
  state = {
    showSideDrawer: false
  };
  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false
    });
  };
  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <div>Toolbar,Sidebar,Backdrop</div>
        <main className="Content">{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;

// <main className={classes.Content}>{props.children}</main>
// const layout = props => (
//   <Aux>
//     <Toolbar />
//     <SideDrawer />
//     <div>Toolbar,Sidebar,Backdrop</div>
//     <main className="Content">{props.children}</main>
//   </Aux>
// );

// export default layout;
