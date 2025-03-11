import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, DB } from "../firebase-config";
import { setDoc, doc } from "firebase/firestore";
import { signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { FcGoogle } from "react-icons/fc"; 
import { NavLink } from "react-router-dom"; 
import "./Signin.css"; 

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      alert("Login Successful!");
      navigate("/dashboard"); 
    } catch (error) {
      alert(error.message);
      setFormData({...formData, email: '', password: ''});
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;
      console.log(user);

      await setDoc(doc(DB, 'users', user.uid), {
        email: user.email,
        username: user.displayName,
        darkcoins: 0
      }).then(() => {
        alert('USER LOGGED IN');
        navigate('/dashboard');
      });

      alert("Signed in with Google!");
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="signup">
        <img
          src={require("../images/unnamed.jpg")}
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
