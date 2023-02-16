import React from 'react'

function Events({ allEvents }) {
    let eventList

    const today = new Date()
    // const todayFormat = today.toDateString()

    if (allEvents && allEvents.length) {
        console.log(allEvents)
        eventList = allEvents.map((event) => {
            let eventDate = new Date(event.date)
            let dateFormat = new Date(event.date).toDateString()
            if (eventDate.getTime() >= today.getTime() - 86400000) {
                return (
                    <ul className="event" key={event._id}>
                        <li className="event-date">
                            {dateFormat} - {event.time}
                        </li>
                        <li className="event-name">{event.name}</li>
                        <li className="event-location">{event.location}</li>
                    </ul>
                )
            }
        })
    }
    return (
        <div className="events-container">
            <div className="events-list">{eventList}</div>
        </div>
    )
}

export default Events
