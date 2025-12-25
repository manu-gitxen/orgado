import React from "react";
import homeLogo from "../assets/logo/logo2.png";
import "../assets/Styles/Header.css";
import { FiChevronDown } from "react-icons/fi";


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg  py-3">
      <div className="container-fluid px-2">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={homeLogo} alt="Orgado" height="40" className="me-2" />
        </a>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

     
        <div className="collapse navbar-collapse" id="mainNav">
  
          <ul className="navbar-nav  gap-5">
            <li className="nav-item dropdown">
              <a
                className="nav-link  dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Home <FiChevronDown className="dropdown-icon" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Home 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Home 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Home 3
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link  dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Shop <FiChevronDown className="dropdown-icon" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Shop Grid
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Shop List
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Product Details
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link  dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Pages <FiChevronDown className="dropdown-icon" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cart
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Checkout
                  </a>
                </li>
              </ul>
            </li>
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

          {/* Right Side */}
          <div className="d-flex align-items-center gap-3">
            {/* Search */}
            <div className="search-box position-relative">
              <input
                type="text"
                className=""
                placeholder="Search products..."
              />
              <i className="bi bi-search search-icon"></i>
            </div>

            {/* Cart */}
            <div className="icon-box position-relative">
              <i className="bi bi-bag"></i>
              <span className="badge">0</span>
            </div>

            {/* Wishlist */}
            <div className="icon-box position-relative">
              <i className="bi bi-heart"></i>
              <span className="badge">0</span>
            </div>

            {/* User */}
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
