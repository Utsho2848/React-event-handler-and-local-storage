import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    console.log(cart)
    // const { price, shipping } = cart;
    let price = 0;
    let shipping = 0;
    let tax = 0;
    let total = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        price = price + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
        tax = parseFloat((price * 0.1).toFixed(2));
        total = price + shipping + tax;
    }
    // console.log(cart)
    return (
        <div className='cart'>
            <h2>This is From Cart</h2>
            <h3>Items Selected:{quantity}</h3>
            <h4>Price:{price}</h4>
            <p>Shipping Charge:{shipping}</p>
            <p>Tax:{tax}</p>
            <h3>Total Cost:{total}</h3>
        </div>
    );
};

export default Cart;