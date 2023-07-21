import ShoppingCart from "./ShoppingCart"
import EventList from "./EventList"
import axios from "axios"
import React, { useState, useEffect } from "react"
import { useNavigate, Link, useLocation, useParams } from "react-router-dom"

export default function Event(props) {
    const [events, setEvents] = useState("")
    let { id } = useParams()

    useEffect(() => {
        let selectedEvent = props.events.find(
            (event) => event.id === parseInt(id)
        )
        setEvents(selectedEvent)
    }, [props.events, id])

    return events ? (
        <div className='main-container'>
            <div className='specificEvents'>
                <h2>{events.event_name}</h2>
                <p>Event type: {events.event_type}</p>
                <p>
                    {" "}
                    {events.event_date} @ {events.event_time}
                </p>
                <p>{events.event_description}</p>
            </div>
        </div>
    ) : (
        <h3>Loading...</h3>
    )
}
