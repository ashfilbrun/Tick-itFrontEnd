import ShoppingCart from "./ShoppingCart"
import VenueList from './VenueList'
import { Link } from 'react'

export default function Event(){
    return(
        <div className="main-container">
            <h2>Specific Event Page</h2>
            <div className="item">
                <p>Venue Name</p>
                <p>Address of Venue</p>
                <p>Hours of operation</p>
                <p>Seating Type</p>
                <p>Capacity of Venue</p>
                <p><Link to='venue/:id/events'>Events</Link></p>
            </div>
        </div>
    )
}