import React from "react";
import '../Footer/Footer.css'; // Import the CSS file
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About Us */}
        <div className="footer-section">
          <h3>ABOUT US</h3>
          <p>
            Dark League Studios was founded in July {new Date().getFullYear()}, and is the newest esports and gaming organizer in the industry. Our immediate goal is to be the top-of-mind grassroots events and esports organizer with the largest gaming community. Our vision is for the Philippines to be the Esports Tourism Destination in SEA by contributing to the sustainability of the industry, and making esports culture something all generations across the country can appreciate.
          </p>
        </div>

        {/* Contact Us */}
        <div className="footer-section">
          <h3>CONTACT US</h3>
          <p>For partnerships and sponsorships, you may directly contact</p>
          <a href="mailto:events@darkleaguestudios.com">
            events@darkleaguestudios.com
          </a>
        <p></p>
          <h4 className="mt-4">LIKE AND FOLLOW</h4>
          <div className="social-icons">
            <a href="https://www.tiktok.com/@darkleaguestudios"target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            <a href="https://www.facebook.com/darkIeaguestudios"target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com/darkleague_studios/"target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com/channel/DarkLeagueStudios"target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://www.linkedin.com/company/darkleaguestudios/posts/?feedView=all"target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>

        {/* Location */}
        <div className="footer-section">
          <h3>LOCATION</h3>
          <a href="https://maps.app.goo.gl/UBVABWZKGMVDL95Z7" target="_blank" rel="noopener noreferrer"
            style={{ color: "white", textDecoration: "underline" }} 
            >108 Central Building, E. Rodriguez Ave., Bagumbayan, Quezon City, Philippines
          </a>
          <a 
        href="https://maps.app.goo.gl/ssxvA7wdgGeHmtTv7" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img 
          src={require('../images/Dark League Studio Loc.png')} 
          alt="Dark League Studios Location" 
          style={{ width: "75%", maxWidth: "300px", marginTop: "10px", borderRadius: "8px" }}
        />
      </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Dark League Studios
      </div>
    </footer>
  );
};

export default Footer;