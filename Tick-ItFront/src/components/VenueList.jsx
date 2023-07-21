import { Link } from "react-router-dom"
import * as React from 'react'

export default function VenueList(){
    return(
        <div className="main-container">
            <h2>Event List page</h2>
            <div className="venue">
                <h3>{/* ${Venue/:id} */}The Van Buren</h3>
                <p>City, State </p>
                <p><Link to='/venue/:id'>See Events</Link></p>
            </div>
        </div>
    )
}