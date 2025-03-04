import React, { useState } from "react";
import { auth, googleProvider, facebookProvider } from "../firebase-config.js";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import { FaFacebook } from "react-icons/fa"; // Facebook Icon
import '../Signin/Signin.css'; // Import CSS

const Signup = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password).then(() => {
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
    <div className="signup-container">
      <h2>CREATE NEW ACCOUNT</h2>
      <form onSubmit={handleSignup}>
        <div className="input-group">
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        </div>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />

        <div className="social-buttons">
          <button type="button" className="facebook-btn" onClick={handleFacebookSignup}>
            <FaFacebook size={24} color="white" />
          </button>
          <button type="button" className="google-btn" onClick={handleGoogleSignup}>
            <FcGoogle size={24} />
          </button>
        </div>

        <button type="submit" className="create-account-btn">CREATE ACCOUNT</button>
      </form>
    </div>
  );
};

export default Signup;