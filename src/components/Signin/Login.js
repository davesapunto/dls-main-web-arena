import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate for redirection
import { auth, googleProvider } from "../firebase-config";
import { signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import { NavLink } from "react-router-dom"; // ✅ Correct import
import "./Signin.css"; // Import CSS

const Login = () => {
  const navigate = useNavigate(); // ✅ Initialize navigation
  const [formData, setFormData] = useState({ email: "", password: "" });

  // Redirect logged-in users to dashboard
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard");
      }
    });
    return () => unsubscribe(); // Cleanup listener
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      alert("Login Successful!");
      navigate("/dashboard"); // ✅ Redirect to dashboard after login
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Signed in with Google!");
      navigate("/dashboard"); // ✅ Redirect after Google login
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="signup">
        <img
          src={require("../images/GIFS/222056.gif")}
          style={{
            position: "absolute",
            zIndex: -5,
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          alt="background"
        />
        <NavLink to="/HomePage">
          <img
            src={require("../images/logo.png")}
            style={{
              width: 350,
              height: 130,
              position: "absolute",
              margin: 50,
              cursor: "pointer",
            }}
            alt="logo"
          />
        </NavLink>
        <div className="signup-container">
          <h2>LOG IN</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div className="social-buttons">
              <button
                type="button"
                className="google-btn"
                onClick={handleGoogleSignup}
              >
                <FcGoogle size={24} />
              </button>
            </div>
            <button type="submit" className="create-account-btn">
              PROCEED
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
