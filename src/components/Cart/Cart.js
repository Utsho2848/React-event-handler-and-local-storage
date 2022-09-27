import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    const { price, shipping } = cart;
    console.log(cart)
    return (
        <div className='cart'>
            <h2>This is From Cart</h2>
            <h3>Items Selected:{cart.length}</h3>
            <h4>Price:{ }</h4>
            <p>Shipping Charge:{ }</p>
            <p>Tax:{ }</p>
            <h3>Total Cost:{ }</h3>
        </div>
    );
};

export default Cart;