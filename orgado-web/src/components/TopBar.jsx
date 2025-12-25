import React from 'react'
import { FaMapMarkerAlt,FaFacebookF,FaLinkedinIn,FaInstagram,FaTwitter, FaPinterest } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import '../assets/Styles/TopBar.css'

const TopBar = () => {
  return (
    <div className="top-box ">
      <div className="container-fluid d-flex justify-content-between top-bar-1"> 
      
        <div className="contact-info d-flex">
            <a href='tel:+02587898250'><span className='' ><FiPhone className="phone-left" /> +(02) 587 - 898 -250</span></a>
            <div className="v-bar-1">|</div>
          <span className=""><FaMapMarkerAlt className='mx-1' /> Favicon, New York, USA - 254230</span>
          
        </div>

    
        <div className="social-icons d-flex">
          <span className=""><FaFacebookF /></span>
          <div className="v-bar-1">|</div>
          <span className=""><FaTwitter /></span>
          <div className="v-bar-1">|</div>
          <span className=""><FaInstagram /></span>
          <div className="v-bar-1">|</div>
          <span><FaPinterest/></span>
        </div>
      </div>
      <div className="container-fluid top-bar-2"> 
      
        <div className="preference-info d-flex justify-content-between  align-items-center">
          <div className='d-flex gap-3 mt-1 top-bar-2-links'>
            <a href="#"><h6>About Us</h6></a>
            <div className="v-bar-2">|</div>
            <a href="#"><h6>My account</h6></a>
            
            </div>
            <div className='d-flex gap-3 top-bar-selects'>
              <select name="" id="">
                <option value="">English</option>
              </select>
              <div className="v-bar-2">|</div>
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