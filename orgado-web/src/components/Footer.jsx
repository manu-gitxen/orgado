import React, { useState, useEffect } from "react";
import "../assets/Styles/Footer.css";
import footerLogo from "../assets/logo/logo.webp"; 
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

//   show hide 
  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content text-center">
          
          {/*logo */}
          <div className="footer-logo mb-4">
            <a href="#">
              <img src={footerLogo} alt="Orgado" height="50" />
            </a>
          </div>

          {/*links */}
          <ul className="footer-nav d-flex flex-wrap justify-content-center gap-4 gap-lg-5 mb-4 list-unstyled">
            <li><a href="#">ABOUT OUR COMPANY</a></li>
            <li><a href="#">LATEST PRODUCTS</a></li>
            <li><a href="#">PAYMENT TYPE</a></li>
            <li><a href="#">AWARDS WINNINGS</a></li>
            <li><a href="#">WORLD MEDIA PARTNER</a></li>
            <li><a href="#">FLASH OFFERS</a></li>
          </ul>

          {/*icons */}
          <div className="social-links d-flex justify-content-center gap-3 mb-5">
            <a href="#" className="social-btn"><FaFacebookF /></a>
            <a href="#" className="social-btn"><FaTwitter /></a>
            <a href="#" className="social-btn"><FaLinkedinIn /></a>
            <a href="#" className="social-btn"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* 4. copyright */}


      <div className="copyright-area py-3">
        <div className="container text-center">
          <p className="mb-0 text-muted small">
            All Rights Reserved | Copyrighted by ©2023 <span className="fw-bold text-dark">BDevs</span>
          </p>
        </div>
      </div>

      {/* 5. scroll to top button */}
      <button 
        className={`scroll-top-btn ${showScroll ? "show" : ""}`} 
        onClick={scrollTop}
      >
        <FiArrowUp />
      </button>
    </footer>
  );
};

export default Footer;