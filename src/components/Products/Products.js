import React from 'react';
import './Product.css'
const Products = (props) => {
    // console.log(props)
    return (
        <div className='item'>
            <h2>This is from Product Component</h2>
            <h3>{props.item.name}</h3>
            <button className='product-btn' onClick={() => props.handleAddToCart(props.item)}>Product Info</button>
        </div>
    );
};

export default Products;