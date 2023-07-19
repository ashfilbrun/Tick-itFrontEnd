import { Link } from 'react-router-dom'


export default function Nav () {
  
  return (
    <div className='container'>
      <div className='navBar'>
        <ul className='navItems'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/event'>Event</Link></li>
          <li><Link to='/venue'>Venue</Link></li>
          <li><Link to='/cart'>Cart</Link></li>
        </ul>
      </div>
    </div>
  )
}