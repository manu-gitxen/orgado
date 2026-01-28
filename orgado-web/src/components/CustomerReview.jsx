import React from 'react';
import '../assets/Styles/CustomerReview.css';
import { FaStar, FaGooglePlay, FaApple } from 'react-icons/fa';

import userImg from '../assets/images/browse-cat/image1.png';       

const CustomerReview = () => {
    return (
        <div className="customer-review-wrapper">
            
            <div className="customer-review-card">
                <div className="reviewer-img">
                    <img src={userImg} alt="Sagor Omi" />
                </div>
                <div className="review-content">
                    <h5>Sagor Omi</h5>
                    <p>" All the generators on the Internet tend to repeat predefined, making this the true generator human made pesticides and fertilizers genetically "</p>
                    <div className="review-stars">
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                </div>
            </div>

            
            <div className="app-download-card"> 
                <div className="app-download-content">
                    <h5>Download the App</h5>
                    <p>Make your life easier</p>
                    <div className="app-buttons">
                        <a href="#" className="app-btn">
                            <FaApple size={24} />
                            <div className="text-start">
                                <span>Available on the</span>
                                <strong>App Store</strong>
                            </div>
                        </a>
                        <a href="#" className="app-btn">
                            <FaGooglePlay size={20} />
                            <div className="text-start">
                                <span>Get it on</span>
                                <strong>Google Play</strong>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;
