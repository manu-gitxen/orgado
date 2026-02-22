import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import { CartContext } from '../context/CartContext';
import '../assets/Styles/Checkout.css';
import { FiCreditCard, FiCheckCircle } from 'react-icons/fi';
import { FaPaypal, FaMoneyBillWave } from 'react-icons/fa';

const Checkout = () => {
    const { cartItems, setCartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const [paymentMethod, setPaymentMethod] = useState('card');
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const totalPrice = cartItems.reduce((total, item) => {
        const priceNumber = parseFloat(item.price.replace('$', ''));
        return total + priceNumber * (item.qty || 1);
    }, 0);

    const handlePayment = (e) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate payment processing delay
        setTimeout(() => {
            setIsProcessing(false);
            setIsSuccess(true);

            // Clear cart
            setCartItems([]);

            // Redirect to track order after 2 seconds
            setTimeout(() => {
                navigate('/track-order');
            }, 3500);
        }, 2500);
    };

    if (isSuccess) {
        return (
            <>
                <TopBar />
                <Header />
                <div className="checkout-wrapper d-flex align-items-center justify-content-center min-vh-70">
                    <div className="text-center success-card p-5 bg-white rounded-4 shadow">
                        <FiCheckCircle className="text-success display-1 mb-4 success-icon" />
                        <h2 className="fw-bold mb-3">Payment Successful!</h2>
                        <p className="text-muted mb-4 lead">Thank you for your order. We are processing it right now.</p>
                        <p className="small text-muted mb-0">Redirecting to tracking page...</p>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <TopBar />
            <Header />

            <div className="checkout-wrapper py-5">
                <div className="container">
                    <div className="row g-5">
                        {/* Delivery Details */}
                        <div className="col-lg-7">
                            <div className="checkout-section bg-white p-4 p-md-5 rounded-4 shadow-sm mb-4">
                                <h4 className="fw-bold mb-4">Billing Information</h4>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <label className="form-label small fw-bold text-muted">First name</label>
                                            <input type="text" className="form-control custom-input py-2" required />
                                        </div>
                                        <div className="col-sm-6">
                                            <label className="form-label small fw-bold text-muted">Last name</label>
                                            <input type="text" className="form-control custom-input py-2" required />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label small fw-bold text-muted">Email</label>
                                            <input type="email" className="form-control custom-input py-2" placeholder="you@example.com" required />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label small fw-bold text-muted">Address</label>
                                            <input type="text" className="form-control custom-input py-2" placeholder="1234 Main St" required />
                                        </div>
                                    </div>
                                </form>
                            </div>

                            {/* Payment Gateway Option */}
                            <div className="checkout-section bg-white p-4 p-md-5 rounded-4 shadow-sm">
                                <h4 className="fw-bold mb-4">Payment Method</h4>

                                <div className="payment-options">
                                    <label className={`payment-option-card ${paymentMethod === 'card' ? 'active' : ''}`}>
                                        <div className="d-flex align-items-center gap-3">
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                checked={paymentMethod === 'card'}
                                                onChange={() => setPaymentMethod('card')}
                                            />
                                            <FiCreditCard className="fs-4 text-primary" />
                                            <div>
                                                <h6 className="mb-0 fw-bold">Credit Card</h6>
                                                <small className="text-muted">Safe money transfer using your bank account.</small>
                                            </div>
                                        </div>
                                    </label>

                                    {paymentMethod === 'card' && (
                                        <div className="card-details-box mt-3 p-4 bg-light rounded-3">
                                            <div className="row g-3">
                                                <div className="col-12">
                                                    <input type="text" className="form-control custom-input" placeholder="0000 0000 0000 0000" />
                                                </div>
                                                <div className="col-6">
                                                    <input type="text" className="form-control custom-input" placeholder="MM/YY" />
                                                </div>
                                                <div className="col-6">
                                                    <input type="text" className="form-control custom-input" placeholder="CVV" />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <label className={`payment-option-card mt-3 ${paymentMethod === 'paypal' ? 'active' : ''}`}>
                                        <div className="d-flex align-items-center gap-3">
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                checked={paymentMethod === 'paypal'}
                                                onChange={() => setPaymentMethod('paypal')}
                                            />
                                            <FaPaypal className="fs-4 text-info" />
                                            <div>
                                                <h6 className="mb-0 fw-bold">PayPal</h6>
                                                <small className="text-muted">You will be redirected to PayPal website to complete your purchase.</small>
                                            </div>
                                        </div>
                                    </label>

                                    <label className={`payment-option-card mt-3 ${paymentMethod === 'cod' ? 'active' : ''}`}>
                                        <div className="d-flex align-items-center gap-3">
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                checked={paymentMethod === 'cod'}
                                                onChange={() => setPaymentMethod('cod')}
                                            />
                                            <FaMoneyBillWave className="fs-4 text-success" />
                                            <div>
                                                <h6 className="mb-0 fw-bold">Cash on Delivery</h6>
                                                <small className="text-muted">Pay with cash upon delivery.</small>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="col-lg-5">
                            <div className="checkout-summary bg-white p-4 p-md-5 rounded-4 shadow-sm sticky-md-top" style={{ top: '100px' }}>
                                <h4 className="fw-bold mb-4">Order Summary</h4>

                                <ul className="list-group mb-4 shadow-none cart-summary-list">
                                    {cartItems.map((item, index) => (
                                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <div className="d-flex align-items-center gap-3">
                                                <img src={item.img || item.imgsrc} alt={item.title || item.name} className="rounded" style={{ width: 50, height: 50, objectFit: 'contain' }} />
                                                <div>
                                                    <h6 className="my-0 small fw-bold">{item.title || item.name}</h6>
                                                    <small className="text-muted">Qty: {item.qty || 1}</small>
                                                </div>
                                            </div>
                                            <span className="text-muted">{item.price}</span>
                                        </li>
                                    ))}
                                    {cartItems.length === 0 && (
                                        <li className="list-group-item p-3 text-center text-muted">Your cart is empty.</li>
                                    )}
                                    <li className="list-group-item p-3 d-flex justify-content-between bg-light fw-bold">
                                        <span>Total (USD)</span>
                                        <strong className="text-success">${cartItems.length > 0 ? totalPrice.toFixed(2) : '0.00'}</strong>
                                    </li>
                                </ul>

                                <button
                                    onClick={handlePayment}
                                    disabled={cartItems.length === 0 || isProcessing}
                                    className="btn btn-success w-100 py-3 fw-bold rounded-3 pay-btn d-flex justify-content-center align-items-center gap-2"
                                >
                                    {isProcessing ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            Processing...
                                        </>
                                    ) : (
                                        <>Pay Now</>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
