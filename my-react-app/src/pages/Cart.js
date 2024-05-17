import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch cart items from the local storage or API
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(items);
  }, []);

  const handleProceedToPayment = (item) => {
    // Navigate to the ProceedToPayment page with the selected item
    navigate('/ProceedToPayment', { state: { item } });
  };

  return (
    <div className="cart-page">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="porsche_logo.png" alt="Porsche Logo" />
            Porsche
          </a>
        </div>
      </nav>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Cart</h2>
        <div className="row">
          {cartItems.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img src={item.imageUrl} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Price: ${item.price}</p>
                  <button className="btn btn-primary" onClick={() => handleProceedToPayment(item)}>
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="button-container">
          <Link to="/userinfo" className="dashboard-button">User Info</Link>
          <Link to="/stock" className="dashboard-button">Stock</Link>
          <Link to="/userdashboard" className="dashboard-button">Back to Dashboard</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
