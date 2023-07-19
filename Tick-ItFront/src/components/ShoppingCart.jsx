import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Context from '../Context';

const addToCart = (eventId, variantInfo) => {
  const [cart, setCart] = useState()

  useEffect(() => {
    commerce.cart.retrieve()
      .then(res => {
        setCart(res)
      })
  })


  return (
    <div className='modal'>
      <div className='shoppingCart'>
      </div>
    </div>
  )
}


export default ShoppingCart