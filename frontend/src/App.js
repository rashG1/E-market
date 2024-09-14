import React, { useState } from 'react';
import ProductsList from './components/ProductsList';
import axios from 'axios';

function App() {
    const [cart, setCart] = useState([]);

    // Function to handle the product click and add it to the cart
    const handleProductClick = (product) => {
        setCart([...cart, product]);
        console.log('Product added to cart:', product);
    };

    // Function to place the order
    const placeOrder = () => {
        const totalAmount = cart.reduce((sum, product) => sum + product.Price, 0);
        const order = {
            customerID: 1, // Assuming customerID is 1 for now
            totalAmount: totalAmount,
            products: cart.map((product) => ({
                ProductID: product.ProductID,
                Quantity: 1, // Assuming quantity is 1 for simplicity
                Price: product.Price
            }))
        };

        // Send order to backend
        axios.post('http://localhost:5000/api/orders', order)
            .then((response) => {
                console.log('Order placed:', response.data);
                setCart([]); // Clear the cart after placing the order
            })
            .catch((error) => {
                console.error('Error placing order:', error);
            });
    };

    return (
        <div>
            <h1>Welcome to the Online Store</h1>
            {/* Pass handleProductClick to ProductList component */}
            <ProductsList onProductClick={handleProductClick} />

            {/* Display cart */}
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

export default App;
