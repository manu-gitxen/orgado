import React from "react";
import trendbnr from "../assets/images/banner-imgs/trendingbnr-1.jpg";
import "../assets/Styles/TrendingProducts.css";
import { useState } from "react";

const TrendingProducts = () => {
  const [activeTab, setActiveTab] = useState("view-all");
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
            <a href="/">
              <div className="trending-banner position-relative mb-5">
                <div className="w-img">
                  <img
                    src={trendbnr}
                    alt=""
                    className="rounded-4"
                    style={{ width: "100%", display: "block" }}
                  />
                </div>

        
                <div
                  className="trending-banner-text position-absolute"
                  style={{ top: "30px", left: "30px", zIndex: 2 }}
                >
                  <h5
                    style={{
                      color: "white",
                      fontWeight: "400",
                      marginBottom: "5px",
                    }}
                  >
                    Organic
                  </h5>
                  <h3
                    style={{
                      color: "white",
                      fontWeight: "700",
                      fontSize: "32px",
                    }}
                  >
                    Fresh Masala
                  </h3>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xxl-9 col-xl-8 col-lg-8">
            <div className="row">
              <div className="col-xxl-4 col-xl-5 col-lg-4">
                <div className="bd-section__title-wrapper">
                  <div className="bd-section__title ">
                    <h1>You May Missed</h1>
                  </div>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-7 col-lg-8">
                <div className="bd-trending__tab-wrapper p-relative  d-flex justify-content-end align-items-center ">
                  <div className="trending-nav">
                    <nav>
                      <div className="nav justify-content-end border-0 me-5">
                        <button
                          className={`nav-link border-0 bg-transparent p-0 me-4 ${
                            activeTab === "view-all"
                              ? "active-tab"
                              : "text-muted"
                          }`}
                          onClick={() => setActiveTab("view-all")}
                          style={{
                            fontWeight: "600",
                            fontSize: "16px",
                            transition: "0.5s",
                          }}
                        >
                          {/* {activeTab === "view-all" && (
                            <span
                              style={{ color: "#FFB800", marginRight: "5px" }}
                            >
                              •
                            </span>
                          )} */}
                          View All
                        </button>
                        <button
                          className={`nav-link border-0 bg-transparent p-0 me-4 ${
                            activeTab === "new-arrival"
                              ? "active-tab"
                              : "text-muted"
                          }`}
                          onClick={() => setActiveTab("new-arrival")}
                          style={{
                            fontWeight: "600",
                            fontSize: "16px",
                            transition: "0.3s",
                          }}
                        >
                          {/* {activeTab === "new-arrival" && (
                            <span
                              style={{ color: "#FFB800", marginRight: "5px" }}
                            >
                              •
                            </span>
                          )} */}
                          New Arrival
                        </button>
                        <button
                          className={`nav-link border-0 bg-transparent p-0 me-4 ${
                            activeTab === "best-sale"
                              ? "active-tab"
                              : "text-muted"
                          }`}
                          onClick={() => setActiveTab("best-sale")}
                          style={{
                            fontWeight: "600",
                            fontSize: "16px",
                            transition: "0.3s",
                          }}
                        >
                          {/* {activeTab === "best-sale" && (
                            <span
                              style={{ color: "#FFB800", marginRight: "5px" }}
                            >
                              •
                            </span>
                          )} */}
                          Best Sale
                        </button>
                        {/* Tab: Trending */}
                        <button
                          className={`nav-link border-0 bg-transparent p-0 ${
                            activeTab === "trending"
                              ? "active-tab"
                              : "text-muted"
                          }`}
                          onClick={() => setActiveTab("trending")}
                          style={{
                            fontWeight: "600",
                            fontSize: "16px",
                            transition: "0.3s",
                          }}
                        >
                          {/* {activeTab === "trending" && (
                            <span
                              style={{ color: "#FFB800", marginRight: "5px" }}
                            >
                              •
                            </span>
                          )} */}
                          Trending
                        </button>
                      </div>
                    </nav>
                  </div>
                  <div className="trending-navigation-buttons d-flex gap-2">
                    <button className="trending-btn prev-btn">
                      
                    </button>

                    <button className="trending-btn next-btn">
                      <i className="fa-regular fa-angle-right"></i>
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
