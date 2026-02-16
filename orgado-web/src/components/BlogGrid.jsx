import React from 'react';
import '../assets/Styles/BlogGrid.css';
import { FaUser, FaRegClock, FaArrowRight } from 'react-icons/fa';

const BlogGrid = () => {
    // Extended dummy data
    const blogItems = [
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
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            author: 'Sarah Jenkins',
            date: '09/11/23 10:00 am',
            title: 'Top 10 Superfoods to Boost Your Immune System',
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            author: 'Mike Ross',
            date: '09/10/23 09:15 am',
            title: 'How to Grow Your Own Organic Garden at Home',
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            author: 'Emily White',
            date: '09/09/23 02:30 pm',
            title: 'The Benefits of Plant-Based Diets for Long-Term Health',
        }
    ];

    return (
        <section className="blog-grid-section">
            <div className="blog-grid-header">
                <span className="blog-grid-subtitle">Our Blog</span>
                <h2 className="blog-grid-title">Latest News & Articles</h2>
            </div>

            <div className="blog-grid">
                {blogItems.map((item) => (
                    <div key={item.id} className="blog-card">
                        <div className="blog-image-container">
                            <img src={item.image} alt={item.title} className="blog-image" />
                        </div>
                        <div className="blog-content">
                            <div className="blog-meta">
                                <div className="blog-meta-item">
                                    <FaUser className="blog-meta-icon" />
                                    <span>{item.author}</span>
                                </div>
                                <div className="blog-meta-item">
                                    <FaRegClock className="blog-meta-icon" />
                                    <span>{item.date}</span>
                                </div>
                            </div>
                            <h3 className="blog-card-title">{item.title}</h3>
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

export default BlogGrid;
