import React from 'react';
import Frame from '../components/navigatebar';
import ProductsList from '../components/ProductsList'; // ProductList Component

function Categories() {
    return (
        <div>
            <Frame />
            <h1>Categories</h1>
            <ProductsList onProductClick={(product) => console.log('Product added:', product)} />
        </div>
    );
}

export default Categories;
