import { Link, useNavigate } from "react-router-dom"
import * as React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function VenueList() {
    const [venues, setVenues] = useState([])
    const getVenues = async () => {
        const res = await axios.get('http://127.0.0.1:8000/venues')
        console.log(res.data)
        setVenues(res.data)
    }
    useEffect(() => {
        getVenues()
    }, [])

    let navigate = useNavigate()
        const showVenue = (id) => {
            navigate(`/Venue/${id}`)
    }
    
    return venues ? (
        <div className="main-container">
            <h2>Venues</h2>
            <div className="venue">
                {
                    venues.map((venue) => (
                        <div key={venue.venue_name} className="venue-info" onClick={() => showVenue(venue)}>
                            <div className="venueBox">
                                <h3>{venue.venue_name}</h3>
                                <ul className="venueUl">
                                    <li><Link to={`${venue.url}`} target="_blank">{venue.venue_name} (more info)</Link></li>
                                    <li>Address: {venue.address}</li>
                                    <li>{venue.description}</li>
                                    <li><Link to={`/VenueList${venue.id}`}><button id="addToCart">See events</button></Link></li>
                                </ul>
                                
                            </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    ) : <div>Loading...</div>
}

