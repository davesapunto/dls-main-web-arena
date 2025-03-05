import React from "react";
import '../Header/header.css';
import { FaUser } from "react-icons/fa";
import { useState } from "react";

const Header = () => {

  const [active, setActive] = useState(false);

  const SignInButton = () => {
    return (
        <div className="SignInButton">
          <a className = "Button" href="#">Sign In</a>
          <a className = "Button" href="#">Sign Up</a>
        </div>
    );
}

    return (
      <div className="app-container" style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}>
        {/* Header */}
        <header className="header">
          <div className="nav-container">
            <img src={require('../images/logo.png')} alt="Dark League Arena Logo" className="logo" />
            <nav>
              <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Organize Tournaments</a></li>
                <li><a href="#">Arena</a></li>
                <li><a href="#">Feedback</a></li>
                <li><a href="#">News</a></li>
                <li><a className="sign-in" href="#" onClick={() => 
                  {
                      active ? setActive(false) : setActive(true)
                  }}> <FaUser /></a></li>
                  
              </ul>
              {active ? <SignInButton/> : null}
            </nav>
            
          </div>
        </header>

        <main className="content" 
          style={
            { 
              backgroundImage: `url(${require('../images/background1.png')})` 
            }
          }/>
        
      </div>
    );
}

export default Header