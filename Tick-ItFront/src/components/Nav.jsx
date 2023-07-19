import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Context from '../Context'

export default function Header () {
  const { userInfo, setUserInfo } = useContext(Context)

  return (
    <div className='navBar'>
      <ul className='navItems'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/EventList'></Link></li>
        <li><Link to='/VenueList'></Link></li>
        <li><Link to='/ShoppingCart'></Link></li>
      </ul>
    </div>
  )
}