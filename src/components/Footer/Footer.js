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
            <a href="#"><FaTiktok /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        {/* Location */}
        <div className="footer-section">
          <h3>LOCATION</h3>
          <p>
            108 Central Building, E. Rodriguez Ave., Bagumbayan, Quezon City, Philippines
          </p>
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