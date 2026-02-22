import React, { useState, useEffect } from "react";
import logo from "../assets/logo/logo2.png";
import "../assets/Styles/HeaderStyleTwo.css";
import {
  FiChevronDown, FiShoppingBag, FiHeart, FiUser, FiMenu, FiX
} from "react-icons/fi";
import { Link } from "react-router-dom";

const HeaderStyleTwo = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 90);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`h2-header-section ${isSticky ? "h2-sticky" : ""}`}>
      <div className="container h-100">
        <div className="h2-header-inner">

          <div className="h2-logo-area">
            <a href="/">
              <img src={logo} alt="Orgado" className="h2-logo-img" />
            </a>
          </div>


          <nav className={`h2-nav-area ${menuOpen ? "active" : ""}`}>
            <ul className="h2-nav-list">
              <li className="h2-nav-item">
                <Link to="/" className="h2-nav-link">Home <FiChevronDown /></Link>
              </li>
              <li className="h2-nav-item">
                <a href="/" className="h2-nav-link">Shop <FiChevronDown /></a>
              </li>
              <li className="h2-nav-item">
                <a href="/" className="h2-nav-link">Pages <FiChevronDown /></a>
              </li>
              <li className="h2-nav-item"><a href="/" className="h2-nav-link">Blog</a></li>
              <li className="h2-nav-item"><a href="/" className="h2-nav-link">Contact</a></li>
              <li className="h2-nav-item"><Link to="/track-order" className="h2-nav-link">Track Order</Link></li>
            </ul>
          </nav>


          <div className="h2-actions-area">
            <div className="h2-icon-box">
              <FiShoppingBag /><span className="h2-badge">0</span>
            </div>
            <div className="h2-icon-box">
              <FiHeart /><span className="h2-badge">0</span>
            </div>
            <div className="h2-icon-box">
              <FiUser />
            </div>


            <button
              className="h2-menu-trigger d-lg-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default HeaderStyleTwo;