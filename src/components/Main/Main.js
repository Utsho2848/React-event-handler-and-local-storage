import React, { useEffect, useState } from 'react';
import { addToDb, getDataFromDb } from "../../utilities/fakedb";
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Main.css'
const Main = () => {
    const [cart, setCart] = useState([]);
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    useEffect(() => {
        const storedData = getDataFromDb();
        const savedCart = [];
        for (const id in storedData) {
            const addedProduct = items.find(product => product.id === id);
            console.log(addedProduct)
            if (addedProduct) {
                const quantity = storedData[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
            // else {

            // }

        }
        setCart(savedCart);
    }, [items])

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);

        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart);
        addToDb(selectedProduct.id)
        // 49.5
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