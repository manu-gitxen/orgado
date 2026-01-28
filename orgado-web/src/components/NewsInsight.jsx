import React from 'react';
import '../assets/Styles/NewsInsight.css';
import { FaUser, FaRegClock, FaArrowRight } from 'react-icons/fa'; 

const NewsInsight = () => {
    const newsItems = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', 
            author: 'Orgado Admin',
            date: '09/12/23 11:24 am',
            title: 'Things I Wish I Had Known About Angular When I Started New',
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', 
            author: 'John Smith',
            date: '09/12/23 11:22 am',
            title: 'Unique Ideas for Healthy Food You Haven’t heard yet',
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1625246333195-098e479720fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', 
            author: 'Jennifer Lee',
            date: '09/12/23 11:17 am',
            title: 'Five Data-Loading Patterns To Boost Web Performance',
        }
    ];

    return (
        <section className="news-insight-section">
            <div className="news-header">
                <span className="news-subtitle">News Insight</span>
                <h2 className="news-title">News From Orgado</h2>
            </div>

            <div className="news-grid">
                {newsItems.map((item) => (
                    <div key={item.id} className="news-card">
                        <div className="news-image-container">
                            <img src={item.image} alt={item.title} className="news-image" />
                        </div>
                        <div className="news-content">
                            <div className="news-meta">
                                <div className="news-meta-item">
                                    <FaUser className="news-meta-icon" />
                                    <span>{item.author}</span>
                                </div>
                                <div className="news-meta-item">
                                    <FaRegClock className="news-meta-icon" />
                                    <span>{item.date}</span>
                                </div>
                            </div>
                            <h3 className="news-card-title">{item.title}</h3>
                            <a href="#" className="read-more-link">
                                READ MORE <FaArrowRight className="arrow-icon" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewsInsight;
