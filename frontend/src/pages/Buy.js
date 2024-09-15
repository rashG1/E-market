import React, { useState } from 'react';
import Frame from '../components/navigatebar';

function Buy() {
    const [cart, setCart] = useState([]);

    const placeOrder = () => {
        const totalAmount = cart.reduce((sum, product) => sum + product.Price, 0);
        // Define order logic here
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
