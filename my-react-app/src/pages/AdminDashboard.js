import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="porsche_logo.png" alt="Porsche Logo" />
            Admin Dashboard
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Add Users</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Add Products</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container center">
        <h2>Welcome to the Admin Dashboard!</h2>
        <div className="admin-functions">
          <button className="btn btn-primary">Add Users</button>
          <button className="btn btn-danger">Delete Users</button>
          <button className="btn btn-primary">Add Products</button>
          <button className="btn btn-danger">Delete Products</button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
