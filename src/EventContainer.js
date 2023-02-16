import React, { useRef } from 'react'
import Events from './Events'
import Weekly from './WeeklyEventContainer'

function EventContainer({ weekly, events }) {
    const eventToggleBackground = useRef()
    const eventDiv = useRef()
    const mainHeader = useRef()

    function toggleMain() {
        eventDiv.current.style.transform = 'translateX(-100vw)'
        eventToggleBackground.current.style.transform = 'translateX(50vw)'
        mainHeader.current.style.borderBottom = 'solid 1px black'
    }
    function toggleWeekly() {
        eventDiv.current.style.transform = 'translateX(0vw)'
        eventToggleBackground.current.style.transform = 'translateX(0vw)'
        mainHeader.current.style.borderBottom = 'solid 1px white'
    }

    return (
        <>
            <div className="event-container">
                <div
                    ref={eventToggleBackground}
                    className="event-header-background"
                ></div>
                <div ref={mainHeader} className="main-event-header">
                    <h1 onClick={toggleWeekly} className="weekly-title">
                        Weekly Events
                    </h1>
                    <h1 onClick={toggleMain} className="main-title">
                        Main Calendar
                    </h1>
                </div>
                <div ref={eventDiv} className="inner-event-container">
                    <Weekly weeklies={weekly} />
                    <Events allEvents={events} />
                </div>
            </div>
        </>
    )
}

export default EventContainer
