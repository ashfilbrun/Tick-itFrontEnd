import ShoppingCart from "./ShoppingCart"
import VenueList from './VenueList'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Venue() {
    const [events, setEvents] = useState([])

    let navigate = useNavigate()
    const showEvent = (event) => {
        navigate(`${event._id}`)
    }
    const getEvents = async () => {
        const eventList = await axios.get('http://127.0.0.1:8000/venues')
        setEvents(eventList.event_name)
    }

    useEffect(() => {
        getEvents()
    }, [])
    
    return events ? (
        <div className="main-container">
            <div className="venueEvents">
            {
                events.map((event, id) => (
                    <div onClick={() => showEvent(event)} key={event._id}>
                        <h2>{event.event_name}</h2>
                    </div>
            ))}
            </div>
        </div>
    ) : <h3>Loading...</h3>
}