import ShoppingCart from "./ShoppingCart"
import EventList from './EventList'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Event() {
    const [events, setEvents] = useState([])

    let navigate = useNavigate()
    const showEvent = (event) => {
        navigate(`${event._id}`)
    }
    const getEvents = async () => {
        const eventList = await axios.get('http://127.0.0.1:8000/events/')
        setEvents(eventList.data.data)
    }

    useEffect(() => {
        getEvents()
    }, [])
    
    return events ? (
        <div className="main-container">
            <h2>Specific Event Page</h2>
            <div className="specificEvents">
            {
                events.map((event, id) => (
                    <div onClick={() => showEvent(event)} key={event._id}>
                        <p>{event.event_name}</p>
                    </div>
            ))}
            </div>
        </div>
    ) : <h3>Loading...</h3>
}