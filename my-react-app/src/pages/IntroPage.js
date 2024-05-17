import React from 'react';
import { Link } from 'react-router-dom';
import './IntroPage.css';

const IntroPage = () => {
  return (
    <div className="intro-page">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="./src/porsche_logo.png" alt="Porsche Logo" /> {/* Add the Porsche logo image */}
            Porsche
          </a>
        </div>
      </nav>

      <div className="container welcome-container">
        <h1 className="welcome-text">Welcome to <span className="italic">Porsche</span></h1>
        <p className="welcome-paragraph">Explore our legendary automobiles and rich history.</p>
        <Link to="/MainPage" className="get-started-button mt-3">Get Started</Link>
      </div>
    </div>
  );
}

export default IntroPage;
