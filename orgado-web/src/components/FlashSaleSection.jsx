
import React from "react";
import TrendingProducts from "./TrendingProducts"; 
import bean from "../assets/images/trending-products/trendbeans.jpg";
import "../assets/Styles/FlashSaleSection.css";

const FlashSaleSection = () => {

  
  const flashSaleDesign = (
    <div>
        <div className="flash_sale_title">
            <h1>⚡Flash Sale!</h1>
        </div>
        <div className="flash-sale-box p-4   mb-4 text-center">
            <span className="badge s rounded-circle p-3">NEW</span>
            <div className="brocoli-content">
                <p>⭐⭐⭐⭐⭐</p>
                <p>Stock : <span className="text-success">Avialable</span></p>
            </div>
        </div>
        <div className="potato-banner">
            <div className="potato-banner-content">
                <p>Freshly</p>
                <h3>Maitta Potato</h3>
                <p><span className="from-text">From</span> <span className="from-price">$9.00</span></p>
            </div>
            <div className="potato-hot-item">
                <h4>HOT <span className="potato-hot-item-span">Item</span></h4>
            </div>
        </div>
    </div>
  );

  
  return (
    <TrendingProducts 
        title="You May Browse"
        disableScroll={true}
        sidebarContent={flashSaleDesign}
    />
  );
};

export default FlashSaleSection;