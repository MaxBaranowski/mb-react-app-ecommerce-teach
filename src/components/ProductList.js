import React, { Component } from 'react';
import { storeProducts as driveStoreProducts } from "../data";

class ProductList extends Component {
    constructor(props) {
        super(props);
        console.log(this.state.products)
    }
    state = {
        products: driveStoreProducts
    };
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">column one</div>
                    <div className="col-6">column two</div>
                    ProductList
                </div>
            </div>
        );
    }
}

export default ProductList;