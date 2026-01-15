import React from "react";
import trendbnr from "../assets/images/banner-imgs/trendingbnr-1.jpg";

const TrendingProducts = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
            <a href="/">
              <div className="trending-banner p-relative mb5">
                <div className="w-img">
                  <img src={trendbnr} alt="" />
                </div>
                <div className="trending-banner-text">
                  <h5>Organic</h5>
                  <h3>Fresh Masala</h3>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xxl-9 col-xl-8 col-lg-8">
            <div className="row">
              <div className="col-xxl-4 col-xl-5 col-lg-4">
                <div className="bd-section__title-wrapper mb-40">
                  <div className="bd-section__title mb-40">
                    <h1>You May Missed</h1>
                  </div>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-7 col-lg-8">
                <div className="bd-trending__tab-wrapper mb-40 p-relative">
                  <div className="trending-nav">
                    <nav>
                      <div className="nav nav-tabs">
                        <button className="nav-item">View All</button>
                        <button className="nav-item">New Arrival</button>
                        <button className="nav-item">Best Sale</button>
                        <button className="nav-item">Trending</button>
                      </div>
                    </nav>
                  </div>
                  <div className="navigation-button">
                    <button className="trending-button-prev" tabIndex={0} aria-label="Previous slide" aria-controls="swiper-wrapper-96599e551666ffcb">
                        <i class="fa-regular fa-angle-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-trending-wrapper"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
