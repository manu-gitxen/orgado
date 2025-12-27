import React from 'react';
import '../assets/Styles/ServiceInfo.css';
import { FiTruck, FiRefreshCw, FiShield, FiHeadphones } from "react-icons/fi";

const Features = () => {
  return (
    <section className="features-section">
      <div className="container-fluid">
        <div className="features-wrapper bg-white rounded-3 shadow-sm p-4 mt-4">
          <div className="row g-4">
            
         {/* shippin */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-12">
              <div className="feature-item d-flex align-items-center gap-3">
                <div className="icon-wrapper">
                  <FiTruck className="feature-icon" />
                </div>
                <div className="feature-content">
                  <h6 className="feature-title mb-1">Free Shipping</h6>
                  <p className="feature-desc mb-0">On All Order Over $599</p>
                </div>
              </div>
            </div>

            {/* returns*/}
            <div className="col-xl-3 col-lg-3 col-md-6 col-12">
              <div className="feature-item d-flex align-items-center gap-3">
                <div className="icon-wrapper">
                  <FiRefreshCw className="feature-icon" />
                </div>
                <div className="feature-content">
                  <h6 className="feature-title mb-1">Easy Returns</h6>
                  <p className="feature-desc mb-0">30 Day Returns Policy</p>
                </div>
              </div>
            </div>

            {/*payment */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-12">
              <div className="feature-item d-flex align-items-center gap-3">
                <div className="icon-wrapper">
                  <FiShield className="feature-icon" />
                </div>
                <div className="feature-content">
                  <h6 className="feature-title mb-1">Secure Payment</h6>
                  <p className="feature-desc mb-0">100% Secure Guarantee</p>
                </div>
              </div>
            </div>

            {/*support */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-12">
              <div className="feature-item d-flex align-items-center gap-3 border-0">
                <div className="icon-wrapper">
                  <FiHeadphones className="feature-icon" />
                </div>
                <div className="feature-content">
                  <h6 className="feature-title mb-1">Special Support</h6>
                  <p className="feature-desc mb-0">24/7 Dedicated Support</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;