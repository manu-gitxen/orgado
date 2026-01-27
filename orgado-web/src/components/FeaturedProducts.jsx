import React from 'react';
import '../assets/Styles/FeaturedProducts.css';
import { FaStar, FaArrowRight } from 'react-icons/fa';

// Import images or use placeholders
// Banners
import icecream from '../assets/images/featuredProductsImgs/icecream.png'; // Placeholder
import veg from '../assets/images/featuredProductsImgs/veg.png'; // Placeholder

// Products
import prod1 from '../assets/images/trending-products/trendbeans.jpg';
import prod2 from '../assets/images/trending-products/trendchips.jpg';
import prod3 from '../assets/images/trending-products/trendmug.jpg';
import potatoImg from '../assets/images/flash-sale/potato.png';

const FeaturedProducts = () => {

    const topRated = [
        { id: 1, name: "Premium Broad bean", price: "$40.00", img: prod1 },
        { id: 2, name: "Triangular shaped", price: "$9.00", img: prod2 },
        { id: 3, name: "Ceramic Coffee Mug", price: "$12.00", img: prod3 },
    ];

    const popular = [
        { id: 1, name: "Premium Broad bean", price: "$40.00", img: prod1 },
        { id: 2, name: "Triangular shaped", price: "$9.00", img: prod2 },
        { id: 3, name: "Ceramic Coffee Mug", price: "$12.00", img: prod3 },
    ];

    return (
        <div className="featured-products-wrapper">
            {/* Top Banners Row */}
            <div className="row mb-5">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <div className="banner-card banner-img1" style={{ backgroundColor: '#F4F0EC' }}>
                        <div className="banner-content">
                            <span className="banner-tag">Organic</span>
                            <h3 className="banner-title">Meat & Milk</h3>
                            <p className="banner-subtitle">Premium quality meat & milk</p>
                            <a href="#" className="banner-btn">Shop Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="banner-card banner-img2" style={{ backgroundColor: '#EEF6EB' }}>
                        <div className="banner-content">
                            <span className="banner-tag">Organic</span>
                            <h3 className="banner-title">Vegetables</h3>
                            <p className="banner-subtitle">Premium quality Vegetables</p>
                            <a href="#" className="banner-btn">Shop Now</a>
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* Bottom Products Row */}
            <div className="row">
                {/* Top Rated Column */}
                <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
                    <div className="header-with-link">
                        <h3>Top Rated</h3>
                        <a href="#" className="view-all-link">View All <FaArrowRight size={12} /></a>
                    </div>
                    <div className="product-list">
                        {topRated.map(product => (
                            <div className="small-product-card" key={product.id}>
                                <img src={product.img} alt={product.name} className="small-product-img" />
                                <div className="small-product-info">
                                    <h4>{product.name}</h4>
                                    <div className="small-product-price">{product.price}</div>
                                    <div className="rating-stars">
                                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar style={{ color: '#ddd' }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Popular Column */}
                <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
                    <div className="header-with-link">
                        <h3>Popular</h3>
                        <a href="#" className="view-all-link">View All <FaArrowRight size={12} /></a>
                    </div>
                    <div className="product-list">
                        {popular.map(product => (
                            <div className="small-product-card" key={product.id}>
                                <img src={product.img} alt={product.name} className="small-product-img" />
                                <div className="small-product-info">
                                    <h4>{product.name}</h4>
                                    <div className="small-product-price">{product.price}</div>
                                    <div className="rating-stars">
                                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar style={{ color: '#ddd' }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Big Card Column */}
                <div className="col-xl-4 col-lg-12 col-md-12">
                    <div className="big-product-card">
                        <div className="big-product-content">
                            <span className="tag-freshly">Freshly</span>
                            <h2 className="big-product-title">Maitta Potato</h2>
                            <div className="big-product-price">From <strong>$9.00</strong></div>
                        </div>
                        <img src={potatoImg} alt="Maitta Potato" className="big-product-img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
