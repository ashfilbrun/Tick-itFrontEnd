import { Routes, Route } from 'react-router-dom'
import Venue from '../components/Venue'
import VenueList from '../components/VenueList'
import Event from '../components/Event'
import EventList from '../components/EventList'
import ShoppingCart from '../components/ShoppingCart'
import Header from '../components/Header'
import Home from '../components/Home'
import { useState } from 'react'

export default function Main () {
  // const [cart, setCart] = useState('')
  // const { cartInfo, setCartInfo } = useContext(Context)
  // console.log(cartInfo)
  const [events, setEvents] = useState([])
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/EventList/:id' element={<Event events={events} />} />
        <Route path='/eventlist' element={<EventList events={events} setEvents={setEvents} />}  />
        <Route path='/venue/:id' element={<Venue />} />
        <Route path='/venue' element={<VenueList />} />
        <Route path='/cart' element={<ShoppingCart />} /> 
        {/* <Route path='/ShoppingCart/:id' element={<ShoppingCart />} />  */}
      </Routes>
    </>
  )
}