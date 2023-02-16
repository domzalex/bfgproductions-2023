import React from 'react'

function WeeklyList({ weekly }) {
    return (
        <ul className="weekly-event">
            <div className="weekly-name-date">
                <li className="weekly-name">{weekly.name}</li>
                <li className="weekly-time">{weekly.time}</li>
            </div>
            <li className="weekly-location">{weekly.location}</li>
        </ul>
    )
}

export default WeeklyList
