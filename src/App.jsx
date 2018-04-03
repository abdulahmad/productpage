import React, { Component } from 'react';
import ProductPage from './components/product/ProductPage/ProductPage';

class App extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="App">
        <ProductPage />
      </div>
    );
  }
}

export default App;
