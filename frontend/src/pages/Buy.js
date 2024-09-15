import React, { useState, useEffect } from 'react';
import Frame from '../components/navigatebar';

function Buy() {
    const [cart, setCart] = useState([]);

    // Fetch cart items from localStorage
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    // Function to calculate total amount
    const getTotalAmount = () => {
        return cart.reduce((sum, product) => sum + product.Price, 0);
    };

    const placeOrder = () => {
        const totalAmount = getTotalAmount();
        console.log('Placing order with total amount:', totalAmount);
        // Clear the cart after placing the order
        localStorage.removeItem('cart');
        setCart([]);
    };

    return (
        <div>
            <Frame />
            <h1>Buy Page</h1>
            <div>
                <h2>Cart</h2>
                {cart.length > 0 ? (
                    <div>
                        <table border="1" cellPadding="10" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Product ID</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((product, index) => (
                                    <tr key={index}>
                                        <td>{product.ProductID}</td>
                                        <td>{product.ProductName}</td>
                                        <td>${product.Price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <h3>Total: ${getTotalAmount()}</h3>
                        <button onClick={placeOrder}>Place Order</button>
                    </div>
                ) : (
                    <p>Cart is empty</p>
                )}
            </div>
        </div>
    );
}

export default Buy;
