import React from 'react'
import { FaMapMarkerAlt,FaFacebookF,FaLinkedinIn,FaInstagram,FaTwitter,   } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
const TopBar = () => {
  return (
    <div className="top-box py-2">
      <div className="container d-flex justify-content-between"> 
      
        <div className="contact-info">
            <span ><FiPhone /> +123 456 7890</span>
          <span className="ms-3"><FaMapMarkerAlt /> 123 Street, City</span>
          
        </div>

    
        <div className="social-icons">
          <span className="me-2"><FaFacebookF /></span>
          <span className="me-2"><FaTwitter /></span>
          <span className="me-2"><FaInstagram /></span>
          <span><FaLinkedinIn /></span>
        </div>
      </div>
    </div>
  )
}

export default TopBar