import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiPhone, FiChevronDown } from "react-icons/fi";
import '../assets/Styles/TopBarStyleTwo.css';

const TopBarStyle2 = () => {
  return (
    <div className="tb2-section-wrapper">
      
      
      <div className="tb2-green-header">
        <div className="container d-flex justify-content-between align-items-center">
          
          
          <div className="tb2-shipping-text d-none d-md-block">
            <span className="tb2-small-text">We ship to over 150 countries & region</span>
          </div>

         
          <div className="tb2-top-links ms-auto ms-md-0">
            <a href="#">About Us</a>
            <span className="tb2-divider-light">|</span>
            <a href="#">Wishlist</a>
          </div>

        </div>
      </div>

     
      <div className="tb2-white-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          
        
          <div className="tb2-contact-info d-flex align-items-center gap-4">
            <div className="d-flex align-items-center gap-2">
               <FiPhone className="tb2-icon-green" />
               <span className="tb2-contact-text">+(02) 587 - 898 -250</span>
            </div>
            
            <span className="tb2-divider-gray d-none d-sm-block">|</span>
            
            <div className="d-flex align-items-center gap-2 d-none d-sm-flex">
               <FaMapMarkerAlt className="tb2-icon-green" />
               <span className="tb2-contact-text">Favicon, New York, USA - 254230</span>
            </div>
          </div>

          
          <div className="tb2-preferences d-flex align-items-center gap-4">
             <div className="tb2-select-group">
                <span className="tb2-select-label">English</span> 
                <FiChevronDown className="tb2-chevron" />
             </div>
             <div className="tb2-divider-gray">|</div>
             <div className="tb2-select-group">
                <span className="tb2-select-label">USD</span> 
                <FiChevronDown className="tb2-chevron" />
             </div>
          </div>
          
        </div>
      </div>

    </div>
  );
};

export default TopBarStyle2;