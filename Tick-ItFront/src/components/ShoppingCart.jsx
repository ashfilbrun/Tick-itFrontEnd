import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Context from '../Context';



export default function ShoppingCart () {
  const addToCart = (eventId, variantInfo) => {
    const [cart, setCart] = useState()
  
    // useEffect(() => {
    //   commerce.cart.retrieve()
    //     .then(res => {
    //       setCart(res)
    //     })
    // })
  
  
    return (
      <div className='container'>
        <div className='shoppingCart'>
          <h3>Shopping Cart</h3>
          <div className='item'>
            <item />
            <button id='removeBtn'>Delete Item</button>
            <button id='addQuantityBtn'>+</button>
            <button id='subQuantityBtn'>-</button>
          </div>
          <button id='deleteCartBtn'>Empty Shopping Cart</button>
        </div>
      </div>
    )
  }
}
