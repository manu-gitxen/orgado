import { useState, useEffect, useContext } from "react";
import homeLogo from "../assets/logo/logo2.png";
import "../assets/Styles/Header.css";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const { wishlistItems } = useContext(WishlistContext);
  const { cartItems } = useContext(CartContext);

  const toggleNav = () => setNavOpen(!navOpen);
  const closeNav = () => {
    setNavOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };
  // scroll event
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > 90) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      const loginStatus = localStorage.getItem("isLogin") === "true";
      setIsLogin(loginStatus);
    };

    checkLogin();

    window.addEventListener("storage", checkLogin);

    return () => {
      window.removeEventListener("storage", checkLogin);
    };
  }, []);

  return (
    <>
      <header
        className={`main-header-wrapper ${isSticky ? "sticky-active" : ""}`}
      >
        <nav className="navbar navbar-expand-lg py-3">
          <div className="container-fluid px-2 flex-wrap">
            {/* logo */}
            <a
              className="navbar-brand d-flex align-items-center me-auto me-lg-0"
              href="#"
            >
              <img src={homeLogo} alt="Orgado" height="40" />
            </a>

            {/*  search box 576px and 991px */}
            <div className="d-none d-sm-block d-lg-none mx-auto">
              <div
                className="search-box position-relative"
                style={{ width: "240px" }}
              >
                <input type="text" placeholder="Search..." />
                <i className="bi bi-search search-icon"></i>
              </div>
            </div>

            {/*  mobile Icons and toggler  < 992px*/}
            <div className="d-flex d-lg-none align-items-center gap-2">
              {/* wishlist on < 992px */}
              <div className="icon-box position-relative">
                <Link to='/wishlist' className="text-decoration-none icon-box p-0 m-0">
                  <i className="bi bi-heart "></i>
                  <span className="badge">{wishlistItems.length}</span>
                </Link>
              </div>

              {/* cart on <992px */}
              <div className="icon-box position-relative">
                {isLogin ?
                  <Link to='/Cart' className="icon-box">
                    <i className="bi bi-bag"></i>
                    <span className="badge">{cartItems.length}</span>
                  </Link>
                  : <Link to='/Login' state={{ showCartAccessWarning: true }} className="icon-box">
                    <i className="bi bi-bag"></i>
                  </Link>

                }
              </div>

              {/*toggle menu */}
              <button
                className="navbar-toggler"
                type="button"
                onClick={toggleNav}
                aria-expanded={navOpen}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            {/* nav menu */}
            <div className={`navbar-collapse ${navOpen ? "show" : ""}`}>
              <ul className="navbar-nav ">
                {/* home */}
                <li
                  className={`nav-item dropdown ${openDropdown === "home" ? "open" : ""}`}
                >
                  <Link
                    to="/"
                    className="nav-link dropdown-toggle"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown("home");
                    }}
                  >
                    Home <FiChevronDown className="dropdown-icon" />
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/" onClick={closeNav}>
                        Home 1
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/" onClick={closeNav}>
                        Home 2
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/" onClick={closeNav}>
                        Home 3
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* shop */}
                <li
                  className={`nav-item dropdown ${openDropdown === "shop" ? "open" : ""}`}
                >
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
                    <li>
                      <a className="dropdown-item" href="#" onClick={closeNav}>
                        Shop Grid
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={closeNav}>
                        Shop List
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={closeNav}>
                        Product Details
                      </a>
                    </li>
                  </ul>
                </li>

                {/* pages */}
                <li
                  className={`nav-item dropdown ${openDropdown === "pages" ? "open" : ""}`}
                >
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
                    <li>
                      <a className="dropdown-item" href="#" onClick={closeNav}>
                        About Us
                      </a>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Cart" onClick={closeNav}>
                        Cart
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={closeNav}>
                        Checkout
                      </a>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/wishlist" onClick={closeNav}>
                        Wishlist
                      </Link>
                    </li>
                  </ul>
                </li>

                {/*blog contact and track order nav links  */}
                <li className="nav-item">
                  <a className="nav-link dropdown-toggle" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link dropdown-toggle" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link dropdown-toggle" href="#">
                    Track Order
                  </a>
                </li>
              </ul>

              {/*  icons  >992px */}
              <div className="d-lg-flex d-none align-items-center gap-3">
                <div className="search-box position-relative">
                  <input type="text" placeholder="Search products..." />
                  <i className="bi bi-search search-icon"></i>
                </div>

                <div className="icon-box position-relative cart-icon">
                  {isLogin ?
                    <Link to='/Cart' className="icon-box">
                      <i className="bi bi-bag"></i>
                      <span className="badge">{cartItems.length}</span>
                    </Link>
                    : <Link to='/Login' state={{ showCartAccessWarning: true }} className="icon-box">
                      <i className="bi bi-bag"></i>
                    </Link>

                  }
                </div>

                <div className="icon-box position-relative wishlist-icon">
                  <Link to='/wishlist' className="icon-box">
                    <i className="bi bi-heart"></i>
                    <span className="badge">{wishlistItems.length}</span>
                  </Link>
                </div>

                <div className="icon-box user-icon">
                  {isLogin ? (
                    <Link to="/UserAccount" className="icon-box">
                      <i className="bi bi-person-check"></i>
                    </Link>
                  ) : (
                    <Link to="/login" className="icon-box">
                      <i className="bi bi-person-x"></i>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* search row < 576px) */}
        <div className="container-fluid d-block d-sm-none pb-3 px-3 bg-white mt-3">
          <div className="search-box position-relative w-100 m-0 ">
            <input
              type="text"
              placeholder="Search products..."
              className="w-100 input-576"
            />
            <i className="bi bi-search search-icon"></i>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
