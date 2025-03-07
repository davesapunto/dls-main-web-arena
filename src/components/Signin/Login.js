import React, { useState } from "react";
import { auth, googleProvider, facebookProvider } from "../firebase-config";
import { createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import { FaFacebook } from "react-icons/fa"; // Facebook Icon
import { NavLink } from "react-router";
import './Signin.css'; // Import CSS


const Login = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [C_PASSWORD, setC_PASSWORD] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();


    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password).then(() => {
        alert("Account Created Successfully!");
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Signed up with Google!");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleFacebookSignup = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      alert("Signed up with Facebook!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
    <div className="signup">
      <img src={require('../images/GIFS/222056.gif')} style=
      {
        {
          position: 'absolute',
          zIndex: -5,
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }/>
      <NavLink to='/HomePage'>
      <img src={require('../images/logo.png')} style=
      {
        {
          width: 350,
          height: 130,
          position: 'absolute',
          margin: 50,
          cursor: 'pointer'
        }
      }/>
      </NavLink>
      <div className="signup-container">
      <h2>LOG IN</h2>
      <form onSubmit={handleSignup}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <div className="social-buttons">
          
          <button type="button" className="google-btn" onClick={handleGoogleSignup}>
            <FcGoogle size={24} />
          </button>
        </div>

        <button type="submit" className="create-account-btn">PROCEED</button>
      </form>
    </div>
    </div>

    </>
  );
};

export default Login;