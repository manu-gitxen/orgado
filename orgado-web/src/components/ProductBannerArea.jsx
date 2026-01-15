import React from "react";


import "../assets/Styles/ProductBannerArea.css";

const ProductBannerArea = () => {
  return (
    <div>
      
        <div className="container my-5">
          <div className="row g-3">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="category-card bg-meat">
                <h6>Organic</h6>
                <h3>Meat & Milk</h3>
                <p>Premium quality meat & milk</p>
                <button className="btn  rounded-pill">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="category-card bg-veg">
                <h6>Organic</h6>
                <h3>Vegetable</h3>
                <p>Premium quality meat & milk</p>
                <button className="btn  rounded-pill">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="category-card bg-fruits">
                <h6>Organic</h6>
                <h3>Food and Fruits</h3>
                <p>Premium quality meat & milk</p>
                <button className="btn  rounded-pill">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default ProductBannerArea;
