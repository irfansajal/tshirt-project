import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from './Cart';
import Tshirt from './Tshirt';
import './Home.css';
import toast from 'react-hot-toast';



const Home = () => {
    const tshirt = useLoaderData();
    const [cart,setCart] = useState([]);

     const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists){
           toast('you have already added this t-shirt')
        }
        else{
            const newCart = [...cart,tshirt];
            setCart(newCart);
        }
       
     }
     const handleRemoveFromCart = id => {
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
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
            <Cart cart ={cart}
            handleRemoveFromCart={handleRemoveFromCart}
            ></Cart>
        </div>
        </div>
    );
};

export default Home;