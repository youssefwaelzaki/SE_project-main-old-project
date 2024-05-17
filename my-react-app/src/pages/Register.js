import React from 'react';
import './Register.css';

const RegistrationPage = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="porsche_logo.png" alt="Porsche Logo" /> {/* Add the Porsche logo image */}
            Porsche
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link home-btn" href="MainPage.js">Home</a> {/* Added href attribute */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <div className="container center">
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" className="form-control custom-register-input" id="firstName" placeholder="Enter your first name" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" className="form-control custom-register-input" id="lastName" placeholder="Enter your last name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control custom-register-input" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmEmail">Confirm Email</label>
              <input type="email" className="form-control custom-register-input" id="confirmEmail" placeholder="Confirm your email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control custom-register-input" id="password" placeholder="Enter your password" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" className="form-control custom-register-input" id="confirmPassword" placeholder="Confirm your password" />
            </div>
            <button type="submit" className="btn btn-primary btn-block custom-register-btn">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
