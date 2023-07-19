import { Routes, Route } from 'react-router-dom'
import { useState, useContext } from 'react'
import Venue from './Venue'
import VenueList from './VenueList'
import Event from './Event'
import EventList from './EventList'
import Context from './Context'
import ShoppingCart from './ShoppingCart'

export default function Main () {
  const [cart, setCart] = useState('')
  const { cartInfo, setCartInfo } = useContext(Context)
  console.log(cartInfo)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Event/:id' element={<Event />} />
        <Route path='/EventList' element={<EventList />} />
        <Route path='/Venue/:id' element={<Venue />} />
        <Route path='/VenueList' element={<VenueList />} />
        <Route path='/ShoppingCart' element={<ShoppingCart />} /> 
        {/* <Route path='/ShoppingCart/:id' element={<ShoppingCart />} />  */}
      </Routes>
    </>
  )

}