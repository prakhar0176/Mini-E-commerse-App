import React, { createContext, useState, useContext } from 'react';
import axiosInstance from '../api/axiosInstance';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const fetchCart = async () => {
        const res = await axiosInstance.get('/cart/');
        setCartItems(res.data);
    };

    const addToCart = async (productId) => {
        await axiosInstance.post('/cart/add/', { product_id: productId });
        fetchCart();
    };

    const updateCart = async (itemId, quantity) => {
        await axiosInstance.put(`/cart/update/${itemId}/`, { quantity });
        fetchCart();
    };

    const removeFromCart = async (itemId) => {
        await axiosInstance.delete(`/cart/remove/${itemId}/`);
        fetchCart();
    };

    return (
        <CartContext.Provider value={{ cartItems, fetchCart, addToCart, updateCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
