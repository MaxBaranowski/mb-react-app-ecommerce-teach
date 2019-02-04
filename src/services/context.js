import React, { Component } from 'react';
import { storeProducts, detailProduct } from "../data";

const ProductContext = React.createContext();
// Provider 
class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct
  };

  handleDetail = () => {
    console.log("handleDetail");
  };

  addToCart = () => {
    console.log("addToCart");
  };

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state, //get all (destruction)
        handleDetail: this.handleDetail,
        addToCart: this.addToCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  };
}
// Consumer
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };