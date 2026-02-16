import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
    return (
        <>
            <Header />
            <div className="container mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <h1 className="text-center mb-4 display-4 fw-bold">About Orgado</h1>
                        <p className="lead text-center text-muted mb-5">
                            We are passionate about bringing nature's best to your doorstep. Orgado is your trusted partner for fresh, organic, and sustainable products.
                        </p>

                        <div className="row align-items-center mb-5">
                            <div className="col-md-6">
                                <img
                                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop"
                                    alt="Our Farm"
                                    className="img-fluid rounded shadow-sm"
                                />
                            </div>
                            <div className="col-md-6 mt-4 mt-md-0">
                                <h2 className="mb-3">Our Story</h2>
                                <p>
                                    Founded in 2023, Orgado started with a simple mission: to make organic food accessible to everyone. We believe that what you eat matters, not just for your health, but for the planet.
                                </p>
                                <p>
                                    We work directly with local farmers who share our commitment to sustainable agriculture. By cutting out the middlemen, we ensure that you get the freshest produce at fair prices, while our farmers get a fair wage for their hard work.
                                </p>
                            </div>
                        </div>

                        <div className="row mb-5">
                            <div className="col-md-4 text-center">
                                <div className="p-4 border rounded shadow-sm h-100">
                                    <h3 className="h5 fw-bold">100% Organic</h3>
                                    <p className="text-muted small">Certified organic produce, free from harmful pesticides and chemicals.</p>
                                </div>
                            </div>
                            <div className="col-md-4 text-center mt-3 mt-md-0">
                                <div className="p-4 border rounded shadow-sm h-100">
                                    <h3 className="h5 fw-bold">Locally Sourced</h3>
                                    <p className="text-muted small">Supporting local communities and reducing carbon footprint.</p>
                                </div>
                            </div>
                            <div className="col-md-4 text-center mt-3 mt-md-0">
                                <div className="p-4 border rounded shadow-sm h-100">
                                    <h3 className="h5 fw-bold">Eco-Friendly</h3>
                                    <p className="text-muted small">Sustainable packaging and zero-waste initiatives.</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <h2 className="mb-4">Join Our Journey</h2>
                            <p className="mb-4">Be a part of the organic revolution. Eat healthy, live better.</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
