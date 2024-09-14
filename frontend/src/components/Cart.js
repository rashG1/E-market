// src/components/Cart.js
import React from 'react';

const Cart = ({ cart, onCheckout }) => {
    return (
        <div>
            <h2>Your Cart</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.ProductName} - ${item.Price}
                    </li>
                ))}
            </ul>
            <button onClick={onCheckout}>Checkout</button>
        </div>
    );
};

export default Cart;
