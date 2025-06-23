import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cartItems, fetchCart, updateCart, removeFromCart } = useCart();

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
        </div>
    );
};

export default Cart;
