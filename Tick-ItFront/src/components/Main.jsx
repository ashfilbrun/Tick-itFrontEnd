import { Routes, Route } from 'react-router-dom'
import Venue from '../components/Venue'
import VenueList from '../components/VenueList'
import Event from '../components/Event'
import EventList from '../components/EventList'
import ShoppingCart from '../components/ShoppingCart'
import Home from '../components/Home'

export default function Main () {
  // const [cart, setCart] = useState('')
  // const { cartInfo, setCartInfo } = useContext(Context)
  // console.log(cartInfo)


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/event/:id' element={<Event />} />
        <Route path='/event' element={<EventList />} />
        <Route path='/venue/:id' element={<Venue />} />
        <Route path='/venue' element={<VenueList />} />
        <Route path='/cart' element={<ShoppingCart />} /> 
        {/* <Route path='/ShoppingCart/:id' element={<ShoppingCart />} />  */}
      </Routes>
    </>
  )

}