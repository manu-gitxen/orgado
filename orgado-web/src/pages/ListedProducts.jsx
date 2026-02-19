import React from 'react'
import TopBar from '../components/TopBar'
import Header from '../components/Header'

import FeaturedProducts from '../components/FeaturedProducts'
import TrendingProducts from '../components/TrendingProducts'
import ProductBannerArea from '../components/ProductBannerArea'
import FlashSaleSection from '../components/FlashSaleSection'
import BrowseCatg from '../components/BrowseCatg'

const ListedProducts = () => {
    return (
        <div>
            <TopBar />
            <Header />
            <div className="container mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                        <h1 className="display-4 fw-bold mb-4">Listed Products</h1>
                        <div>
                            <FeaturedProducts />
                        </div>
                        <div>
                            <TrendingProducts />
                        </div>
                        <div>
                            <ProductBannerArea />
                        </div>
                        <div>
                            <FlashSaleSection />
                        </div>
                        <div>
                            <BrowseCatg />
                        </div>
                        <p className="lead text-muted">
                            Insights, tips, and stories from the Orgado team.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ListedProducts