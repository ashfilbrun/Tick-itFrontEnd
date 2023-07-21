import ShoppingCart from "./ShoppingCart"
import EventList from './EventList'

export default function Event(props) {
    const { id } = props.match.params
    const selectedItem = data.find((item) => item.id === parseInt(id));
    console.log(selectedItem)
    return(
        <div className="main-container">
            <h2>Specific Event Page</h2>
            <div className="event">
                <p>Type of Event</p>
                <p>Event Name</p>
                <p>Event Date</p>
                <p>Event Time</p>
                <p>Individual Ticket Price</p>
                <text input='quantity' placeHolder='Quantity of Tickets'></text>
                <button id='addtocart'>Add to Cart</button>
            </div>
        </div>
    )
}