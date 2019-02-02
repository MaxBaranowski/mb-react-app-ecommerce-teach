import React, { Component } from 'react';

import { Switch, Route } from "react-router-dom";

import NavBar from "../../components/NavBar";
import ProductList from "../../components/ProductList";
import Details from "../../components/Details";
import Cart from "../../components/Cart";
import Default from "../../components/Default";

class Navigation extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={ProductList}></Route>
                    <Route path="/details" component={Details}></Route>
                    <Route path="/cart" component={Cart}></Route>
                    <Route component={Default}></Route>
                </Switch>
            </React.Fragment>
        );
    }
}

export default Navigation;