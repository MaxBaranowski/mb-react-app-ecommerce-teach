import React, { Component } from 'react';
import './App.css';
import { ProductProvider } from "./services/context";
import Navigation from "./layout/navigation/Navigation";

class App extends Component {
  render() {
    return (
      <ProductProvider>
        <Navigation />
      </ProductProvider>
    );
  }
}

export default App;
