import ShoppingCart from "./ShoppingCart"
import VenueList from './VenueList'
import axios from 'axios'
import React, { useContext, useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Context from "../Context"

export default function Venue() {
    const BASE_URL = 'http://127.0.0.1:8000/events'
    const venueId = useParams()
    const [venue, setVenue] = useState([])
    const [event, setEvent] = useState([])
    // const { eventInfo, setEventInfo } = useContext(Context)

    useEffect(() => {
        const getEvents = async () => {
          const response = await axios.get(`${BASE_URL}event/${venue_name.event_name}`)
          setEvent(response)
        }
        getEvent()
    }, [])
    
    let navigate = useNavigate()
    const showEvents = (id) => {
        navigate(`/Event_name/${id}`)
      }
    return (
        <div className="main-container">
            <h2>Specific Event Page</h2>
            {
                venue.data.map((data) => (
                    <div key={data.events}>
                        <div className="item">
                            <p>{data.events}</p>
                            {/* <p><Link to={`/Venue${venue.venue_name}`}>Events</Link></p> */}
                            <p><button id="venueEvent"></button></p>
                        </div>
                        <div>
                            <p className="venueEvents">Venue Events</p>
                            {
                                events.data.map((event) => (
                                    <div key={event.event_name} onClick={() => showEvents(event.event_name)}>
                                        <ul>
                                            <li>
                                                <a>{event.event_name}</a>
                                            </li>
                                        </ul>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
            
        </div>
    )
}