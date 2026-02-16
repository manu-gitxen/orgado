import React from 'react';
import Header from '../components/Header';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import BlogGrid from '../components/BlogGrid';
import { LoginWarnModal } from '../components/LoginWarnModal';

const Blog = () => {
    return (
        <div>
            <TopBar />
            <Header />

            {/* Simple Page Header similar to About Us */}
            <div className="container mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <h1 className="display-4 fw-bold mb-4">Our Blog</h1>
                        <p className="lead text-muted">
                            Insights, tips, and stories from the Orgado team.
                        </p>
                    </div>
                </div>
            </div>

            <BlogGrid />
    
            <LoginWarnModal />
        </div>
    );
};

export default Blog;
