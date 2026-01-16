import React from "react";
import "../assets/Styles/ProductBannerArea.css";

const bannerProducts = [
  {
    id: 1,
    title: "Meat & Milk",
    subtitle: "Organic",
    description: "Premium Quality Meat & Milk",
    styleClass: "bg-meat",
  },
  {
    id: 2,
    title: "Vegetable",
    subtitle: "Organic",
    description: "Farm Fresh Vegetables",
    styleClass: "bg-veg",
  },
  {
    id: 3,
    title: "Food & Fruits",
    subtitle: "Organic",
    description: "Fresh Food and Fruits",
    styleClass: "bg-fruits",
  },
];

const ProductBannerArea = () => {
  const handleChange = (id) => ()=>{
    console.log(id);
    
  }
  return (
    <div>
      <div className="container my-5">
        <div className="row g-3">
          {bannerProducts.map((bannerProduct) => (
            <div className="col-lg-4 col-md-6 col-12" key={bannerProduct.id}>
              <div className={`category-card ${bannerProduct.styleClass}`}>
                <h6>{bannerProduct.subtitle}</h6>
                <h3>{bannerProduct.title}</h3>
                <p>{bannerProduct.description}</p>
                <button className="btn rounded-pill" onClick={handleChange(bannerProduct.id)}>Shop Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductBannerArea;
