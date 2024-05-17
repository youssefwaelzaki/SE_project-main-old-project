import React from 'react';
import { Link } from 'react-router-dom';
import './ProceedToPayment.css';

const ProceedToPayment = () => {
  const carPrice = 50000; // Replace with dynamic data from the database

  return (
    <div className="proceed-to-payment-page">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="porsche_logo.png" alt="Porsche Logo" />
            Porsche
          </a>
        </div>
      </nav>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Proceed to Payment</h2>
        <div className="card payment-card">
          <div className="card-body">
            <p className="card-text"><strong>Car Price:</strong> ${carPrice}</p>
            <button className="btn btn-primary payment-button">Pay Now</button>
          </div>
        </div>
        <div className="button-container mt-4">
          <Link to="/userinfo" className="dashboard-button">User Info</Link>
          <Link to="/stock" className="dashboard-button">Stock</Link>
          <Link to="/userdashboard" className="dashboard-button">Back to Dashboard</Link>
        </div>
      </div>
    </div>
  );
};

export default ProceedToPayment;
