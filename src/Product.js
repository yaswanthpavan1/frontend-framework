import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Child component that receives the update function as a prop
function ProductDetails({ name, price, description, updateProduct }) {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px' }}>
      <h2>{name}</h2>
      <p><strong>Price:</strong> ${price}</p>
      <p><strong>Description:</strong> {description}</p>
      <button onClick={updateProduct}>Update Product Details</button>
    </div>
  );
}

ProductDetails.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  updateProduct: PropTypes.func.isRequired,
};

// Parent component that manages the product state
function Product() {
  // State for the product details
  const [product, setProduct] = useState({
    name: 'Example Product',
    price: 99.99,
    description: 'This is an example product description.',
  });

  // Method to update the product details
  const updateProduct = () => {
    setProduct({
      name: 'Updated Product',
      price: 149.99,
      description: 'This is an updated product description.',
    });
  };

  return (
    <div>
      <h1>Product Information</h1>
      <ProductDetails
        name={product.name}
        price={product.price}
        description={product.description}
        updateProduct={updateProduct} // Passing the update function as a prop
      />
    </div>
  );
}

export default Product;
