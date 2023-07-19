// import { useContext } from "react"
// import Context from "../Context"
import { Link } from 'react-router-dom'
import Nav from './Nav'
// import logo_img from '..assets/tickitlogo.png'

export default function Header () {
  return (
    <div className='container'>
      <h1>hello</h1>
      <div>
        <div className='header'>
          <Link to='/'>
            <h1>Tick-It</h1>
          </Link>
          {/* <Link to='/'><img className='logo' src={logo_img} alt='Tick-It'/></Link> */}
          <Nav />
        </div>
      </div>
    </div>
  )
}