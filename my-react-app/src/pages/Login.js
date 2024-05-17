import React from 'react';
import './Login.css';

const LoginPage = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="porsche_logo.png" alt="Porsche Logo" /> {/* Add the Porsche logo image */}
            Porsche
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link home-btn" href="Main Page.html">Home</a> {/* Added href attribute */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <div className="container center">
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control custom-login-input" id="username" placeholder="Enter username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control custom-login-input" id="password" placeholder="Enter password" />
            </div>
            <button type="submit" className="btn btn-primary btn-block custom-login-btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
