import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FaShoppingCart } from "react-icons/fa";


const AddToCartButton = ({ product }) => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleAddToCart = () => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      alert("Item already in cart!");
    } else {
      setCartItems([...cartItems, product]);
      alert("Added to cart!");
    }
  };

  return (
    <button onClick={handleAddToCart} className="btn btn-primary">
        <FaShoppingCart />
    </button>
  );
};

export default AddToCartButton;