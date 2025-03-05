import React from "react";
import '../Header/header.css';
import Signup from "../Signin/SignIn";
const Header = (signin) => {
    return (
        <div className="app-container" style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}>
      {/* Header */}
      <header className="header">
        <div className="nav-container">
          <img src={require('../images/logo.png')} alt="Dark League Arena Logo" className="logo" />
          <nav>
            <ul className="nav-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Organize Tournament</a></li>
              <li><a href="#">Arena</a></li>
              <li><a href="#">Feedback</a></li>
              <li><a href="#">News</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      
      {signin.isTrue ? <Signup/> : 
      <main className="content" 
      style=
      {
        { 
          backgroundImage: `url(${require('../images/background1.png')})` 
        }
      }/>}

      
    </div>
    );
}

export default Header