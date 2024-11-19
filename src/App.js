import React, { useState } from 'react';
import './App.css';
import Product from './Product';

function App() {
  // Product state
  const [product, setProduct] = useState({
    name: 'Book of React',
    price: 25,
    description: 'A comprehensive guide to React development.'
  });

  // Method to update the product details
  const updateProductDetails = () => {
    setProduct({
      name: 'Advanced React Book',
      price: 35,
      description: 'An advanced guide for React developers.'
    });
  };

  return (
    <div className="App">
      <h1>Product Information</h1>
      <Product product={product} updateProductDetails={updateProductDetails} />
    </div>
  );
}

export default App;
