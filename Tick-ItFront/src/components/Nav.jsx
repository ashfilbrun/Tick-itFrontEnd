import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Context from '../Context'


export default function Nav () {
  
  return (
    <div className='container'>
      <div className='navBar'>
        <ul className='navItems'>
          <li id='navList'><Link to='/'>Home</Link></li>
          <li id='navList'><Link to='/EventList'>Events</Link></li>
          <li id='navList'><Link to='/venue'>Venues</Link></li>
          <li id='navList'><Link to='/ShoppingCart'>Cart</Link></li>
        </ul>
      </div>
    </div>
  )
}