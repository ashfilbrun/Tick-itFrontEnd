import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Context from '../Context'


export default function Nav () {
  
  return (
    <div className='container'>
      <div className='navBar'>
        <ul className='navItems'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/EventList'>Events</Link></li>
          <li><Link to='/venue'>Venues</Link></li>
          <li><Link to='/ShoppingCart'>Cart</Link></li>
        </ul>
      </div>
    </div>
  )
}