import React from "react";
import '../Header/header.css';
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import Signup from "../Signin/SignIn";
import MainContent from "./mainContent";

const Header = (signin) => {

  const SignInButton = () => {
    return(
    <div className = "SignInButton">
      <a href="#">Sign In</a>
      <a href="#">Sign Up</a>
    </div>
    )
  }

  const [active, setActive] = useState(false);
    return (
        <div className="app-container" style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}>
      {/* Header */}
      <header className="header">
        <div className="nav-container">
          <img src={require('../images/logo.png')} alt="Dark League Arena Logo" className="logo" />
          <nav>
            <ul className="nav-links">
              <li><a href="#">Home</a></li>
              <li><a href="tournaments">Organize Tournament</a></li>
              <li><a href="#">Arena</a></li>
              <li><a href="#">Feedback</a></li>
              <li><a href="#">News</a></li>
              <li><a className = "sign-in" 
              onClick={() => {active ? setActive(false) : setActive(true)}}>
                <FaUser />
                </a></li>
            </ul>
          </nav>
          {active ? <SignInButton/> : null}
        </div>
      </header>

      {/* Main Content */}
      
      {signin.isTrue ? <Signup/> : <MainContent/>}
    
      
    </div>
    );
}

export default Header