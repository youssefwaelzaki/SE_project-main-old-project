import React from 'react';
import './ResetPassword.css';

const ResetPassword = () => {
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
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control custom-reset-input" id="email" placeholder="Enter your email" />
            </div>
            <button type="submit" className="btn btn-primary btn-block custom-reset-btn">Reset Password</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
