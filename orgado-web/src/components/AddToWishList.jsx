import React, { useContext } from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { WishlistContext } from '../context/WishlistContext';

const AddToWishList = ({ product, className }) => {
  const { wishlistItems, addToWishlist, removeFromWishlist } = useContext(WishlistContext);

  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  const handleToggle = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={className || `btn btn-link p-0 ${isInWishlist ? 'text-danger' : 'text-muted'}`}
      style={className ? {} : { border: 'none', background: 'transparent' }}
    >
      {isInWishlist ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
    </button>
  );
};

export default AddToWishList;
