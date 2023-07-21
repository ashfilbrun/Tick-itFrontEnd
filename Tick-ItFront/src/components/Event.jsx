import ShoppingCart from "./ShoppingCart"
import EventList from './EventList'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, Link, useLocation, useParams } from 'react-router-dom'


export default function Event(props) {
    // const location = useLocation()
    // const eventData = location.state.name
    const [events, setEvents] = useState('')
    let { id } = useParams()

    // let navigate = useNavigate()
    // const showEvent = (event) => {
    //     navigate(`${event._id}`)
    // }
    // const getEvents = async () => {
    //     // const eventList = await axios.get('http://127.0.0.1:8000/events/')
    //     setEvents(name)
    // }

    useEffect(() => {
        let selectedEvent = props.events.find(
            (event) => event.id === parseInt(id)
        )
        setEvents(selectedEvent)
    }, [props.events, id])
    
    return events ? (
        <div className="main-container">
            <h2>Specific Event Page</h2>
            <div className="specificEvents">
            {/* {
                events.map((event, id) => (
                    <div onClick={() => showEvent(event)} key={event._id}>
                        <p>{event.event_name}</p>
                    </div>
            ))} */}
                <h1>{events.event_name}</h1>
            </div>
        </div>
    ) : <h3>Loading...</h3>
}