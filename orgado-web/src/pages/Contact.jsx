import React from "react";
import TopBar from "../components/TopBar";
import '../assets/Styles/Contact.css'
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

function Contact() {
      const handleSubmit = (e) =>{
        e.preventDefault();
        alert("Form submitted!");
    }
  return (
    <>
      <TopBar />
      <div className="container my-5 touch-tittle">
        <h1>Get in Touch</h1>
        <div className="container d-flex justify-content-between ">
          <div className=" input-box">
            <form onSubmit={handleSubmit}>
                
              <div className="mb-3 user-name row">
                <div className="col-md-6">
                
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                />
                </div>

                <div className="col-md-6">

                <label htmlFor="name" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Phone Number"
                />
                </div>
                
              </div>
             
              <div className="mb-3 user-email">
                
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="user-message">
                <textarea name="" id=""></textarea>
              </div>
              <button type="submit" className="">
                Submit Now
              </button>
            </form>
          </div>
          <div className=" ">
            <div className="support-info">
                <h4>Support Contact</h4>
                <div className="phone-info">
                <h6><span className="contact-icons">< FiPhone /></span> Phone</h6>
                <p>Mobile : (+88) 872-670-780</p>
                <p>Mobile : (+88) 842-640-789</p>
                </div>
                <div className="email-info">
                <h6><span className="contact-icons">< FiMail /></span> Email</h6>
                <p>Email: info@orgado.com</p>
                <p>Email: support@orgado.com</p>
                </div>
                <div className="location-info">
                <h6><span className="contact-icons">< FiMapPin /></span> Location</h6>
                <p>Address: 1234 Street Name, City, Country</p>

                </div>

              
            </div>
            

          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
