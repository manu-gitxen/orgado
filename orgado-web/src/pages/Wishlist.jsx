import React, { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';
import { CartContext } from '../context/CartContext';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { FaTrash, FaShoppingCart } from 'react-icons/fa';

const Wishlist = () => {
    const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (item) => {
        addToCart(item);
        removeFromWishlist(item.id);
    };

    return (
        <>
            <Header />
            <div className="container mt-5">
                <h2 className="mb-4">My Wishlist ❤️</h2>
                {wishlistItems.length === 0 ? (
                    <div className="text-center">
                        <h3>Your wishlist is empty!</h3>
                        <Link to="/" className="btn btn-primary mt-3">Go Shopping</Link>
                    </div>
                ) : (
                    <div className="row">
                        {wishlistItems.map((item) => (
                            <div key={item.id} className="col-md-4 mb-4">
                                <div className="card h-100 shadow-sm">
                                    <img src={item.img || item.imgsrc} className="card-img-top p-3" alt={item.title || item.name} style={{ height: '200px', objectFit: 'contain' }} />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{item.title || item.name}</h5>
                                        <p className="card-text text-muted">{item.price}</p>
                                        <div className="mt-auto d-flex justify-content-between">
                                            <button
                                                className="btn btn-outline-danger"
                                                onClick={() => removeFromWishlist(item.id)}
                                                title="Remove from Wishlist"
                                            >
                                                <FaTrash />
                                            </button>
                                            <button
                                                className="btn btn-success"
                                                onClick={() => handleAddToCart(item)}
                                                title="Add to Cart"
                                            >
                                                <FaShoppingCart /> Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Wishlist;
