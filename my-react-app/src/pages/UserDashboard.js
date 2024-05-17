import React from 'react';
import './UserDashboard.css';

const UserDashboard = () => {
  const handleAddToCart = (car) => {
    // Implement add to cart functionality
    console.log(`Added ${car} to shopping cart`);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="porsche_logo.png" alt="Porsche Logo" />
            Porsche
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link shopping-cart-btn" href="#">Shopping Cart</a>
              </li>
              <li className="nav-item">
                <a className="nav-link stock-btn" href="#">Stock</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container center">
        <h2>Welcome to the User Dashboard!</h2>
        <div className="car-list">
          {/* Car list data from database */}
          <div className="car-card">
            <h3>Car Model 1</h3>
            <button className="btn btn-primary" onClick={() => handleAddToCart("Car Model 1")}>Add to Cart</button>
          </div>
          <div className="car-card">
            <h3>Car Model 2</h3>
            <button className="btn btn-primary" onClick={() => handleAddToCart("Car Model 2")}>Add to Cart</button>
          </div>
          <div className="car-card">
            <h3>Car Model 3</h3>
            <button className="btn btn-primary" onClick={() => handleAddToCart("Car Model 3")}>Add to Cart</button>
          </div>
          {/* Add more cars here */}
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
