import React from 'react'
import CustomerReview from './CustomerReview'
import FeaturedProducts from './FeaturedProducts'

const FeaturedSection = () => {
    return (
        <section className="container mt-5 mb-5">
            <div className="row">
                <div className="col-xxl-3 col-xl-4 col-lg-4">
                    <CustomerReview />
                </div>
                <div className="col-xxl-9 col-xl-8 col-lg-8">
                    <FeaturedProducts />
                </div>
            </div>
        </section>
    )
}

export default FeaturedSection
