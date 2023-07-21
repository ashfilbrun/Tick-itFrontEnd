import { Link } from "react-router-dom"
import * as React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function EventList() {
    const [events, setEvents] = useState
    const getEvents = async () => {
        res = await axios.get('localhost:8000/events')
        setEvents(res)
    }
    useEffect(() => {
        getEvents()
    }, [])
        
    return events ? (
        <div className="main-container">
            <h2>Event List page</h2>
            <div className="event">
                <h3>
                    {/* ${Event/:id} */}
                    CREEDENCE CLEARWATER REVIVAL:
                    Live on tour!</h3>
                <p>Date</p>
                <p>Time</p>
                <p><Link to={`/event/${event.id}`}>Buy Ticket(s)</Link></p>
            </div>
        </div>
    ) : <div>Loading...</div>
}

