import React from "react";
import TopBarStyleTwo from "../components/TopBarStyleTwo";
import "../assets/Styles/Contact.css";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import HeaderStyleTwo from "../components/HeaderStyleTwo";
import { useState } from "react";
import useForm from "../customHooks/useForm";

function Contact() {
  const { formData, handleChange } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <>
      <TopBarStyleTwo />
      <HeaderStyleTwo />

      <div className="container mb-5 mt-5">
        <h1 className="fw-bold mb-5 section-title">Get in Touch</h1>
        <div className="row g-5">
          <div className="col-lg-8 col-md-12">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <label
                    htmlFor="name"
                    className="form-label fw-bold text-muted small"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    id="name"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label
                    htmlFor="phone"
                    className="form-label fw-bold text-muted small"
                  >
                    Phone
                  </label>
                  <input
                    type="number"
                    className="form-control custom-input"
                    id="phone"
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* emaill */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="form-label fw-bold text-muted small"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control custom-input"
                  id="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* textares */}
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="form-label fw-bold text-muted small"
                >
                  Messages
                </label>
                <textarea
                  className="form-control custom-input"
                  id="message"
                  rows="5"
                  placeholder="Messages"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className=" form-submit-btn ">
                Submit Now
              </button>
            </form>
          </div>

          {/* contacgt info */}
          <div className="col-lg-4 col-md-12">
            <div className="support-card p-4 h-100">
              <h4 className="fw-bold mb-4">Support Contact</h4>

              <div className="contact-item mb-4 d-flex gap-3">
                <div className="icon-box">
                  <FiPhone />
                </div>
                <div className="contact-details">
                  <h6 className="fw-bold mb-1">Phone</h6>
                  <p className="mb-0 text-muted small">
                    Mobile: (+88) 872-670-780
                  </p>
                  <p className="mb-0 text-muted small">
                    Mobile: (+88) 422-655-793
                  </p>
                </div>
              </div>

              <div className="contact-item mb-4 d-flex gap-3">
                <div className="icon-box">
                  <FiMail />
                </div>
                <div className="contact-details">
                  <h6 className="fw-bold mb-1">Email</h6>
                  <p className="mb-0 text-muted small">Info@example.com</p>
                  <p className="mb-0 text-muted small">Contact@example.com</p>
                </div>
              </div>
              <div className="contact-item d-flex gap-3">
                <div className="icon-box">
                  <FiMapPin />
                </div>
                <div className="contact-details">
                  <h6 className="fw-bold mb-1">Location</h6>
                  <p className="mb-0 text-muted small">
                    Abbot Favicon Kinney, New York,
                    <br /> USA - 254230
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ifram map */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="map-container rounded-3 overflow-hidden">
              <iframe
                title="New York Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1647858966778!5m2!1sen!2sbd"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
