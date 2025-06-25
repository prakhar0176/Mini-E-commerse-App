import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import axiosInstance from '../api/axiosInstance';


const Cart = () => {
    const { cartItems, fetchCart, updateCart, removeFromCart } = useCart();
    const navigate = useNavigate();

    const handleCheckout = async () => {
        try {
            const res = await axiosInstance.post('/orders/place/');
            alert('Order placed successfully!');
            fetchCart(); // clear cart view
            navigate('/order-success');
        } catch (err) {
            console.error(err);
            alert('Error placing order');
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                cartItems.map(item => (
                    <div key={item.id}>
                        <h4>{item.product.name}</h4>
                        <p>₹ {item.product.price}</p>
                        <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateCart(item.id, e.target.value)}
                        />
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                ))
            )}
            <button onClick={handleCheckout} disabled={cartItems.length === 0}>Checkout</button>
        </div>
    );
};

export default Cart;
