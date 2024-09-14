// src/components/ProductsList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductsList({ onProductClick }) {
    const [products, setProducts] = useState([]);

    // Fetch products from the backend
    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            {products.length > 0 ? (
                <table border="1" cellPadding="10" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.ProductID}>
                                <td>{product.ProductID}</td>
                                <td>
                                    {/* Clicking the product name adds it to the cart */}
                                    <button onClick={() => onProductClick(product)}>
                                        {product.ProductName}
                                    </button>
                                </td>
                                <td>${product.Price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No products available.</p>
            )}
        </div>
    );
}

export default ProductsList;
