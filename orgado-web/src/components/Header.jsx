import { useState } from "react";
import homeLogo from "../assets/logo/logo2.png";
import "../assets/Styles/Header.css";
import { FiChevronDown } from "react-icons/fi";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleNav = () => setNavOpen(!navOpen);
  const closeNav = () => {
    setNavOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="navbar navbar-expand-lg py-3">
      <div className="container-fluid px-2">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={homeLogo} alt="Orgado" height="40" />
        </a>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
          aria-expanded={navOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav */}
        <div className={`navbar-collapse ${navOpen ? "show" : ""}`}>
          <ul className="navbar-nav gap-lg-5">
            {/* Home */}
            <li className={`nav-item dropdown ${openDropdown === "home" ? "open" : ""}`}>
              <a
                href="#"
                className="nav-link dropdown-toggle"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("home");
                }}
              >
                Home <FiChevronDown className="dropdown-icon" />
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" onClick={closeNav}>Home 1</a></li>
                <li><a className="dropdown-item" href="#" onClick={closeNav}>Home 2</a></li>
                <li><a className="dropdown-item" href="#" onClick={closeNav}>Home 3</a></li>
              </ul>
            </li>

            {/* Shop */}
            <li className={`nav-item dropdown ${openDropdown === "shop" ? "open" : ""}`}>
              <a
                href="#"
                className="nav-link dropdown-toggle"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("shop");
                }}
              >
                Shop <FiChevronDown className="dropdown-icon" />
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" onClick={closeNav}>Shop Grid</a></li>
                <li><a className="dropdown-item" href="#" onClick={closeNav}>Shop List</a></li>
                <li><a className="dropdown-item" href="#" onClick={closeNav}>Product Details</a></li>
              </ul>
            </li>

            {/* Pages */}
            <li className={`nav-item dropdown ${openDropdown === "pages" ? "open" : ""}`}>
              <a
                href="#"
                className="nav-link dropdown-toggle"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("pages");
                }}
              >
                Pages <FiChevronDown className="dropdown-icon" />
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" onClick={closeNav}>About Us</a></li>
                <li><a className="dropdown-item" href="#" onClick={closeNav}>Cart</a></li>
                <li><a className="dropdown-item" href="#" onClick={closeNav}>Checkout</a></li>
              </ul>
            </li>

            {/* Simple links */}
<li className="nav-item">
              <a className="nav-link  dropdown-toggle" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  dropdown-toggle" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  dropdown-toggle" href="#">
                Track Order
              </a>
            </li>
          </ul>

          {/* Right side (desktop only for now) */}
          <div className="d-lg-flex d-none align-items-center gap-3">
            <div className="search-box position-relative">
              <input type="text" placeholder="Search products..." />
              <i className="bi bi-search search-icon"></i>
            </div>

            <div className="icon-box position-relative">
              <i className="bi bi-bag"></i>
              <span className="badge">0</span>
            </div>

            <div className="icon-box position-relative">
              <i className="bi bi-heart"></i>
              <span className="badge">0</span>
            </div>

            <div className="icon-box">
              <i className="bi bi-person"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
