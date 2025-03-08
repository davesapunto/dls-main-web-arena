import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import { FaHome, FaTrophy, FaCommentDots, FaNewspaper, FaSignOutAlt } from "react-icons/fa";
import "./UserDashboard.css";
import Logo from "../../assets/images/logos/LOGO_IGNITE_ARENA.png";
import Footer from "../Footer/Footer.js";
import OrganizeTournaments from "../OrganizeTournaments/OrganizeTournaments.js";
import NewsPage from "../NEWS/News.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SelectGame from "../GreyPage/GameSelect"; // ✅ Corrected import path

const SidebarItem = ({ Icon, label }) => (
  <li className="sidebar-item">
    <Icon className="sidebar-icon" />
    <span className="sidebar-text">{label}</span>
  </li>
);

const UserDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/login");
      } else {
        setUser(currentUser);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login"); 
    } catch (error) {
      console.error("Logout error:", error.message);
      alert("Failed to log out. Try again.");
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="tournament-container">
      <aside className="sidebar">
        <div className="logo-container">
          <img src={Logo} alt="Ignite Arena Logo" className="logo" />
        </div>
        <ul>
          <SidebarItem Icon={FaHome} label="Home" />
          <SidebarItem Icon={FaTrophy} label="Organize" />
          <SidebarItem Icon={FaCommentDots} label="Feedback" />
          <SidebarItem Icon={FaNewspaper} label="News" />
        </ul>

        <button onClick={handleLogout} className="logout-btn">
          <FaSignOutAlt className="sidebar-icon" /> Logout
        </button>
      </aside>

      <main className="main-content" style=
      {
        {
          padding: 0
        }
      }>
        <SelectGame />
        <OrganizeTournaments />
        <NewsPage />
        <Footer />
      </main>
    </div>
  );
};

export default UserDashboard;
