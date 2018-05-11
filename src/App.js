import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BrowserRouter>
            {/*Browser Router didnot work outside have to check why*/}
            <Switch>
              <Route path="/checkout" component={Checkout} />
              <Route path="/" exact component={BurgerBuilder} />
              {/*<BurgerBuilder />
          <Checkout />*/}
            </Switch>
          </BrowserRouter>
        </Layout>
      </div>
    );
  }
}

export default App;
