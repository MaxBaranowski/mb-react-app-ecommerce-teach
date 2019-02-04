import React, { Component } from 'react';

import { Switch, Route } from "react-router-dom";

import NavigationBarComponent from "../../components/navigation/NavigationBar";
import ProductListComponent from "../../components/ProductList";
import ItemDetailsComponent from "../../components/Details";
import CartComponent from "../../components/Cart";
import Default from "../../components/Default";

class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBarComponent />
        <Switch>
          <Route exact path="/" component={ProductListComponent}></Route>
          <Route path="/details" component={ItemDetailsComponent}></Route>
          <Route path="/cart" component={CartComponent}></Route>
          <Route component={Default}></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default Navigation;