import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from './cart';
import Tshirt from './Tshirt';
import './Home.css';



const Home = () => {
    const tshirt = useLoaderData();
    const [cart,setCart] = useState([]);

     const handleAddToCart = tshirt => {
        const newCart = [...cart,tshirt];
        setCart(newCart);
     }

    return (
        <div className='home-container'>
        <div className="t-shirts-container">
        {
            tshirt.map(tshirt => <Tshirt
            key={tshirt._id}
            tshirt ={tshirt}
            handleAddToCart={handleAddToCart} >   

            </Tshirt>)
          }
        </div>
        <div className="cart-container">
            <Cart cart ={cart}></Cart>
        </div>
        </div>
    );
};

export default Home;