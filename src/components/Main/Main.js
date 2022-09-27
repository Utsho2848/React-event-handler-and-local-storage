import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Main.css'
const Main = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    const [cart, setCart] = useState([]);
    const handleAddToCart = (product) => {
        console.log(product)
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='main'>
            <div>
                {
                    items.map(item => <Products key={item.id} item={item} handleAddToCart={handleAddToCart}></Products>)
                }

            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;