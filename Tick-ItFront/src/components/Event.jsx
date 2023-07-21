import ShoppingCart from "./ShoppingCart"
import EventList from './EventList'
import { useParams } from "react-router-dom"

export default function Event(props) {
    let { id } = useParams()
    return(
        <div className="main-container">
            <h2>Specific Event Page</h2>
            <div className="event">
                <p>Type of Event</p>
                <p>Event Name</p>
                <p>Event Date</p>
                <p>Event Time</p>
                <p>Individual Ticket Price</p>
                <text input='quantity' placeholder='Quantity of Tickets'></text>
                <button id='addtocart'>Add to Cart</button>
            </div>
        </div>
    )
}