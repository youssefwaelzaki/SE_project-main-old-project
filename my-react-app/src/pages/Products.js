import React, { useState } from 'react';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState('');

  const handleAddProduct = () => {
    if (newProduct.trim() !== '') {
      setProducts([...products, newProduct]);
      setNewProduct('');
    }
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h2 className="heading">Manage Products</h2>
      <div className="add-product-container">
        <input
          type="text"
          className="product-input"
          placeholder="Enter product name"
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
        />
        <button className="add-btn" onClick={handleAddProduct}>Add Product</button>
      </div>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <span>{product}</span>
            <button className="delete-btn" onClick={() => handleDeleteProduct(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
