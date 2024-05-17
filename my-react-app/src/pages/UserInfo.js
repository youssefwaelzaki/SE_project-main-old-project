import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './UserInfo.css';

const UserInfo = () => {
  const [user, setUser] = useState({
    email: '',
    fullName: ''
  });

  useEffect(() => {
    // Fetch user info from the local storage or API
    const userInfo = JSON.parse(localStorage.getItem('user')) || {
      email: 'user@example.com',
      fullName: 'John Doe'
    };
    setUser(userInfo);
  }, []);

  return (
    <div className="user-info-page">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="porsche_logo.png" alt="Porsche Logo" />
            Porsche
          </a>
        </div>
      </nav>
      <div className="container mt-5">
        <h2 className="text-center mb-4">User Info</h2>
        <div className="card user-info-card">
          <div className="card-body">
            <p className="card-text"><strong>Email:</strong> {user.email}</p>
            <p className="card-text"><strong>Full Name:</strong> {user.fullName}</p>
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

export default UserInfo;
