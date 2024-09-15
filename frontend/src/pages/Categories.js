import React from 'react';
import Frame from '../components/navigatebar';
import ProductsList from '../components/ProductsList'; // ProductList Component

function Categories() {
    // Add product to localStorage when clicking the product
    const handleProductClick = (product) => {
        const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = [...currentCart, product];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        console.log('Product added to cart:', product);
    };

    return (
        <div>
            <Frame />
            <h1>Categories</h1>
            <ProductsList onProductClick={handleProductClick} />
        </div>
    );
}

export default Categories;
