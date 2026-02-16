import React, { createContext, useState, useEffect } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState(() => {
        try {
            const storedWishlist = localStorage.getItem('wishlistItems');
            return storedWishlist ? JSON.parse(storedWishlist) : [];
        } catch (error) {
            console.error("Failed to load wishlist from localStorage", error);
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
        } catch (error) {
            console.error("Failed to save wishlist to localStorage", error);
        }
    }, [wishlistItems]);

    const addToWishlist = (item) => {
        setWishlistItems((prevItems) => {
            if (!prevItems.find((i) => i.id === item.id)) {
                return [...prevItems, item];
            }
            return prevItems;
        });
    };

    const removeFromWishlist = (id) => {
        setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};
