import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Orders from "./containers/Orders/Orders";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            {/*Browser Router didnot work outside have to check why*/}
            <Switch>
              <Route path="/checkout" component={Checkout} />
              <Route path="/orders" exact component={Orders} />
              <Route path="/" exact component={BurgerBuilder} />
              {/*<BurgerBuilder />
          <Checkout />*/}
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
