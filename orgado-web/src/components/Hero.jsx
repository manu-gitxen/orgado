import React from 'react';
import '../assets/Styles/Hero.css';


import heroMainImage from '../assets/images/banner-imgs/banner-3.webp'; 
import offerShape from '../assets/images/banner-imgs/discount-shape.webp'; 

import curlyArrow from '../assets/icon/swirl.png'; 

import leafTop from '../assets/images/banner-imgs/banner-shape-2.webp'; 

import berryDeco from '../assets/images/banner-imgs/banner-shape-1.webp'; 

const Hero = () => {
  return (
    <section className="hero-section">
      
      
      <div className="hero-berry-wrapper d-none d-xl-block">
        <img src={berryDeco} alt="" className="hero-berry" />
      </div>

      <div className="container-fuild position-relative container-for-hero">
        <div className="row align-items-center">
          
          {/*hero tittle */}
          <div className="col-lg-6 col-md-12 order-2 order-lg-1">
            <div className="hero-content position-relative">
              
              {/* leaf */}
              <img src={leafTop} alt="" className="hero-leaf-top d-none d-lg-block" />

              <h1 className="display-3 fw-bold mb-3 hero-title">
                Organic <br />
                Fresh Food
              </h1>
              <p className="lead text-muted mb-4 hero-desc">
                Discover organic, sustainable food from our organic farm and fresh vegetable, and food.
              </p>
              
              <div className="hero-btn-group d-flex align-items-center gap-4">
                <button className="btn btn-success rounded-pill px-5 py-3 fw-bold">
                  Shop Now
                </button>
                
                
                <img src={curlyArrow} alt="" className="hero-curly-arrow" />
              </div>
            </div>
          </div>

        
          <div className="col-lg-6 col-md-12 order-1 order-lg-2 mb-5 mb-lg-0">
            <div className="hero-image-wrapper text-center position-relative">
              <img 
                src={heroMainImage} 
                alt="Organic Food" 
                style={{width:583}}
                className="img-fluid hero-main-img " 
              />          
              <div className="discount-badge-wrapper">
                <img src={offerShape} alt="" className="offer-shape-img" />
                <div className="discount-text">
                  <span className="percent">50%</span>
                  <span className="off">OFF</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;