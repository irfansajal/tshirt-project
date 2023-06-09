import React from 'react';
import './Cart.css'


const Cart = ({cart,handleRemoveFromCart}) => {
let message;
  if(cart.length === 0){
    message = <p>Please add some items</p>
  }
else{
    message = <div>
      <h3>Thanks for visiting our site</h3>
    </div>
  }
 
    return (
    
        <div>
           <h2 className= {cart.length === 1 ? 'blue' : 'red'}>Order Summary: {cart.length}</h2>
           <p className={`bold bordered ${cart.length ===3 ? 'yellow': 'purple'}`}>Something</p>
           
           {cart.length > 2 ? <span className='yellow'> Buy more </span> : <span>fokira</span>}

           {message}
         
           {
         cart.map(tshirt => <p key={tshirt._id}>
            {tshirt.name} 
            <button onClick={()=> handleRemoveFromCart(tshirt._id)}>Delete</button> 
           
         </p>)
         
           }
           {
            cart.length === 2 && <p>Double bonanza</p>
           }
           {
            cart.length === 3 || <h3> Tinta to hoilona!!</h3>
           }
          
        </div>  
    );
};

export default Cart;

/* 
*.conditional rendering
1.use if else to set a variable that will contain an element , components
2.ternary oparetor: condition ? 'for true' : 'false'
3.logical &&: (if the condition is true then the next thing will be displayed)
4.logical || (if the condition is false then the next thing will be displayed)
*/


/* 
1.use ternary
2.ternary inside template string */