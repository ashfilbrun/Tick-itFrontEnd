import { Link, useNavigate } from "react-router-dom"
import * as React from "react"
import axios from "axios"
import { useState, useEffect } from "react"

export default function EventList(props) {
    const { events, setEvents } = props
    const getEvents = async () => {
        const res = await axios.get("http://127.0.0.1:8000/events")
        console.log(res.data)
        setEvents(res.data)
    }
    useEffect(() => {
        getEvents()
    }, [])

    let navigate = useNavigate()
    const showEvent = (event) => {
        navigate(`${event.id}`)
    }

    return events ? (
        <div className='main-container'>
            <h2>Events</h2>
            <div className='event'>
                {events.map((event) => (
                    <div
                        key={event.id}
                        className='event-info'
                        onClick={() => showEvent(event)}
                    >
                        <div className='eventBox'>
                            <h3>{event.event_name}</h3>
                            <ul className='eventUl'>
                                <li>{event.event_type}</li>
                                <li>Event date: {event.event_date}</li>
                                <li>Event time: {event.event_time}</li>
                                <li>Ticket price: ${event.ticket_price}</li>
                                <li>Tickets left: {event.ticket_quantity}</li>
                                <li>
                                    <button id='addToCart'>
                                        Add ticket to cart
                                    </button>
                                </li>
                                {/* <Link to={{pathname: `/Event`, state: {name: event}}}>View details</Link> */}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ) : (
        <div>Loading...</div>
    )
}
