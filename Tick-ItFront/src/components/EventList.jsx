import { Link } from "react-router-dom"
import * as React from 'react'

export default function EventList(){
    return(
        <div className="main-container">
            <h2>Event List page</h2>
            <div className="event">
                <h3>
                    {/* ${Event/:id} */}
                    CREEDENCE CLEARWATER REVIVAL:
                    Live on tour!</h3>
                <p>Date</p>
                <p>Time</p>
                <p><Link to='/event/:id'>Buy Ticket(s)</Link></p>
            </div>
        </div>
    )
}

