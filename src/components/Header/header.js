import React from "react";
import '../Header/header.css';
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import Signup from "../Signin/SignIn";
import MainContent from "./mainContent";
import { Link } from "react-scroll";

const Header = (props) => {

  const [signin, setSignin] = useState(false);
  const [active, setActive] = useState(false);
  
  const SignInButton = () => {
    return(
    <div className = "SignInButton">
      <a href="#" onClick={() => 
        {
          setSignin(true)
          setActive(false)
        }}>Sign In</a>
      <a href="#">Sign Up</a>
    </div>
    )
  }

    return (
        <div className="app-container" style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}>
      {/* Header */}
      <header className={`${props.headerclass}`}>
        <div className="nav-container">
          <img src={require('../images/logo.png')} alt="Dark League Arena Logo" className="logo" />
          <nav>
            <ul className="nav-links">
              <Link to="home" smooth={true} duration={500}><li onClick={() => setSignin(false)}>Home</li></Link>
              <Link to="tournaments" smooth={true} duration={500} offset={-50}><li>Organize Tournament</li></Link>
              <li>Feedback</li>
              <li>News</li>
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
      
      {signin ? <Signup/> : <MainContent/>}
    
      

    </div>
    );
}

export default Header