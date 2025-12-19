import React from 'react'
import { FaMapMarkerAlt,FaFacebookF,FaLinkedinIn,FaInstagram,FaTwitter,   } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import '../assets/Styles/TopBar.css'
const TopBar = () => {
  return (
    <div className="top-box ">
      <div className="container-fluid d-flex justify-content-between top-bar-1"> 
      
        <div className="contact-info">
            <span ><FiPhone /> +(02) 587 - 898 -250</span>
          <span className="ms-3"><FaMapMarkerAlt /> Favicon, New York, USA - 254230</span>
          
        </div>

    
        <div className="social-icons">
          <span className="me-2"><FaFacebookF /></span>
          <span className="me-2"><FaTwitter /></span>
          <span className="me-2"><FaInstagram /></span>
          <span><FaLinkedinIn /></span>
        </div>
      </div>
      <div className="container-fluid top-bar-2"> 
      
        <div className="preference-info d-flex justify-content-between  align-items-center">
          <div className='d-flex gap-3 mt-1'>
            <h6>About</h6>
            <h6>My account</h6>
            </div>
            <div className='d-flex gap-3 top-bar-selects'>
              <select name="" id="">
                <option value="">English</option>
              </select>
              <select name="" id="">
                <option value="">USD</option>
              </select>
            </div>

          
        </div>

      </div>
    </div>
  )
}

export default TopBar