import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import '../assets/Styles/TrackOrder.css';
import { FiSearch, FiPackage, FiTruck, FiCheckCircle } from 'react-icons/fi';

const TrackOrder = () => {
    const [orderId, setOrderId] = useState('');
    const [email, setEmail] = useState('');
    const [isTracking, setIsTracking] = useState(false);

    const handleTrack = (e) => {
        e.preventDefault();
        if (orderId && email) {
            setIsTracking(true);
        }
    };

    return (
        <>
            <TopBar />
            <Header />

            <div className="track-order-wrapper">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h1 className="fw-bold section-title display-4">Track Your Order</h1>
                        <p className="text-muted lead">Enter your order ID and email to see the current status of your shipment.</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10">
                            <div className="track-card shadow-sm p-4 rounded-4 bg-white mb-5">
                                <form onSubmit={handleTrack}>
                                    <div className="row g-4 align-items-end">
                                        <div className="col-md-5">
                                            <label htmlFor="orderId" className="form-label fw-bold text-muted small mb-2">Order ID</label>
                                            <input
                                                type="text"
                                                className="form-control custom-input py-3"
                                                id="orderId"
                                                placeholder="e.g. #ORG12345"
                                                value={orderId}
                                                onChange={(e) => setOrderId(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-5">
                                            <label htmlFor="email" className="form-label fw-bold text-muted small mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                className="form-control custom-input py-3"
                                                id="email"
                                                placeholder="your@email.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-2 text-center text-md-start">
                                            <button type="submit" className="btn btn-success w-100 py-3 fw-bold rounded-3 track-btn">
                                                <FiSearch className="me-2" /> Track
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            {isTracking && (
                                <div className="tracking-result p-5 rounded-4 bg-white shadow-sm mt-4">
                                    <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-4">
                                        <div>
                                            <h4 className="fw-bold mb-1">Order {orderId}</h4>
                                            <p className="text-muted mb-0 small">Estimated Delivery: <strong>Tomorrow, 10:00 AM - 2:00 PM</strong></p>
                                        </div>
                                        <span className="badge bg-success-subtle text-success py-2 px-3 fs-6 rounded-pill">In Transit</span>
                                    </div>

                                    <div className="timeline-wrapper">
                                        <div className="timeline-item active">
                                            <div className="timeline-icon"><FiCheckCircle /></div>
                                            <div className="timeline-content">
                                                <h6 className="fw-bold mb-1">Order Placed</h6>
                                                <p className="text-muted small mb-0">Nov 12, 08:30 AM</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item active">
                                            <div className="timeline-icon"><FiPackage /></div>
                                            <div className="timeline-content">
                                                <h6 className="fw-bold mb-1">Order Packed</h6>
                                                <p className="text-muted small mb-0">Nov 13, 09:15 AM</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item current">
                                            <div className="timeline-icon"><FiTruck /></div>
                                            <div className="timeline-content">
                                                <h6 className="fw-bold mb-1">In Transit</h6>
                                                <p className="text-muted small mb-0">Out for delivery to destination</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-icon"></div>
                                            <div className="timeline-content">
                                                <h6 className="fw-bold text-muted mb-1">Delivered</h6>
                                                <p className="text-muted small mb-0">Pending</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrackOrder;
