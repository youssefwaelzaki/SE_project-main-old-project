import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Stock.css';

const Stock = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    // Fetch stock data from the API
    axios.get('http://localhost:5000/api/stock')
      .then(response => {
        setStockData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the stock data!', error);
      });
  }, []);

  return (
    <div className="stock-page">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="porsche_logo.png" alt="Porsche Logo" />
            Porsche
          </a>
        </div>
      </nav>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Stock</h2>
        <div className="row">
          {stockData.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img src={item.imageUrl} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">Price: ${item.price}</p>
                  <button className="btn btn-primary" onClick={() => handleAddToCart(item)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="button-container">
          <Link to="/userinfo" className="dashboard-button">User Info</Link>
          <Link to="/cart" className="dashboard-button">Cart</Link>
          <Link to="/userdashboard" className="dashboard-button">Back to Dashboard</Link>
        </div>
      </div>
    </div>
  );

  function handleAddToCart(item) {
    // Logic to handle adding item to cart
    console.log('Add to Cart:', item);
  }
};

export default Stock;
