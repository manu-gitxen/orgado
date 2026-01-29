import React from 'react';
import '../assets/Styles/CustomerReview.css';
import { FaStar, FaGooglePlay, FaApple } from 'react-icons/fa';
import userImg1 from '../assets/images/review-img/person-1.png'
import userImg2 from '../assets/images/review-img/person-2.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const reviews = [
    {
        name: "Sagor Omi",
        review: "All the generators on the Internet tend to repeat predefined, making this the true generator human made pesticides and fertilizers genetically",
        rating: 5,
        img: userImg1
    },
    {
        name: "John Doe",
        review: "Amazing service and fresh products! I highly recommend Orgado for anyone looking for quality organic food.",
        rating: 5,
        img: userImg2
    },
    {
        name: "Jane Smith",
        review: "fast delivery and great packaging. The vegetables were fresh and the app is very easy to use.",
        rating: 4,
        // img: userImg3
    },
]

const CustomerReview = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: true,
        arrows: false,
    };
    return (
        <div className="customer-review-wrapper">

            <div className="customer-review-card">
                <div className="reviewer-scroll">
                    <Slider {...settings}>
                        {reviews.map((review, index) => (
                            <div key={index} className="review-slide-item">
                                <div className="reviewer-img">
                                    <img src={review.img} alt={review.name} />
                                </div>
                                <div className="review-content">
                                    <h5>{review.name}</h5>
                                    <p>"{review.review}"</p>
                                    <div className="review-stars">
                                        {Array.from({ length: review.rating }, (_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
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
