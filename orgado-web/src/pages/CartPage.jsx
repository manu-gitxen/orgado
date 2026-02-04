import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FaTrash } from 'react-icons/fa';
import Header from '../components/Header';

const CartPage = () => {
  
  const { cartItems, setCartItems } = useContext(CartContext);

 
  const handleRemove = (id) => {
    const newCart = cartItems.filter((item) => item.id !== id);
    setCartItems(newCart);
  };


  const totalPrice = cartItems.reduce((total, item) => {
    const priceNumber = parseFloat(item.price.replace('$', ''));
    return total + priceNumber * (item.qty || 1);
  }, 0);

  return (
    <>
      <Header />
      {cartItems.length === 0 ? (
        <h2 className="text-center mt-5">Your Cart is Empty! 🛒</h2>
      ) : (
        <div className="container mt-5">
          <h2 className="mb-4">Your Shopping Cart</h2>
          <div className="row">
 
            <div className="col-md-8">
              {cartItems.map((item, index) => (
                <div key={index} className="card mb-3 shadow-sm">
                  <div className="row g-0 align-items-center">
                    <div className="col-md-2">
                      <img
                        src={item.img || item.imgsrc}
                        alt={item.title || item.name}
                        className="img-fluid rounded-start p-2"
                        style={{ height: '100px', objectFit: 'contain' }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{item.title || item.name}</h5>
                        <p className="card-text text-muted">
                          Price: {item.price} | Qty: {item.qty || 1}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-2 text-center">
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="btn btn-outline-danger btn-sm"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            
            <div className="col-md-4">
              <div className="card p-4 shadow-sm bg-light">
                <h4>Order Summary</h4>
                <hr />
                <div className="d-flex justify-content-between mb-3">
                  <span>Total Items:</span>
                  <strong>{cartItems.length}</strong>
                </div>
                <div className="d-flex justify-content-between mb-4">
                  <span>Total Price:</span>
                  <strong className="text-success">${totalPrice.toFixed(2)}</strong>
                </div>
                <button className="btn btn-success w-100 py-2">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


export default CartPage;