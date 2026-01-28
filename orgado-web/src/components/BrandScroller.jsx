import React from 'react';
import '../assets/Styles/BrandScroller.css';
import { FaLeaf, FaSpa, FaSeedling, FaHollyBerry, FaAppleAlt } from 'react-icons/fa';

const BrandScroller = () => {
   
    const brands = [
        { id: 1, name: 'Organist', sub: '100% Natural', icon: <FaLeaf /> },
        { id: 2, name: 'Kemistry', sub: 'Fresh Style', icon: <FaSpa /> },
        { id: 3, name: 'Cosmedico', sub: 'Haircare Products', icon: <FaSeedling /> },
        { id: 4, name: 'Organo', sub: 'Natural', icon: <FaHollyBerry /> },
        { id: 5, name: 'Cosmetix', sub: 'Organic Cosmetics', icon: <FaLeaf /> },
        { id: 6, name: 'Natural', sub: 'Since 2005', icon: <FaAppleAlt /> },
        { id: 7, name: 'Organist', sub: '100% Natural', icon: <FaLeaf /> },
        { id: 8, name: 'Kemistry', sub: 'Fresh Style', icon: <FaSpa /> },
        { id: 9, name: 'Cosmedico', sub: 'Haircare Products', icon: <FaSeedling /> },
        { id: 10, name: 'Organo', sub: 'Natural', icon: <FaHollyBerry /> },
        { id: 11, name: 'Cosmetix', sub: 'Organic Cosmetics', icon: <FaLeaf /> },
        { id: 12, name: 'Natural', sub: 'Since 2005', icon: <FaAppleAlt /> },
    ];

    return (
        <div className="brand-scroller-container">
            <div className="brand-scroller-track">
                {brands.map((brand, index) => (
                    <div key={`${brand.id}-${index}`} className="brand-item">
                        <div className="brand-logo-placeholder">
                            <span className="brand-logo-icon">{brand.icon}</span>
                            <span>{brand.name}</span>
                            {brand.sub && <span className="brand-subtext">{brand.sub}</span>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandScroller;
