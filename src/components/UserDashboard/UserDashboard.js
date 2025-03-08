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
    // Check if the user is logged in
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/login"); // Redirect if not logged in
      } else {
        setUser(currentUser); // Set the logged-in user
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login"); // Redirect after logout
    } catch (error) {
      console.error("❌ Logout error:", error.message);
      alert("Failed to log out. Try again.");
    }
  };

  if (!user) {
    return null; // Prevents rendering until auth state is determined
  }

  return (
    <div className="tournament-container">
      {/* Sidebar - Stays Fixed on Left */}
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

        {/* Logout Button */}
        <button onClick={handleLogout} className="logout-btn">
          <FaSignOutAlt className="sidebar-icon" /> Logout
        </button>
      </aside>

      {/* Main Content - Starts on the Right */}
      <main className="main-content">
        <SelectGame />
        <OrganizeTournaments />
        <NewsPage />
        <Footer />
      </main>
    </div>
  );
};

export default UserDashboard;
