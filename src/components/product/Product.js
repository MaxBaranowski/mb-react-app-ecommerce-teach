import React, { Component } from 'react';
import styled from "styled-components";
import { ProductConsumer } from "../../services/context";

class Product extends Component {
  render() {
    const { id, title, img, proce, inCart } = this.props.product;

    return (
      <ProductWrapper>
        <h3>{title}</h3>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div`

`;


export default Product;