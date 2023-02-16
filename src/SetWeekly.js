import React from 'react'
import WeeklyList from './WeeklyEvent'

function SetWeekly({ weeklies }) {
    //Needing to figure out a better way of populating weekly events based off if a date has events or not
    let monday
    let tuesday
    let wednesday
    let thursday
    let friday
    let saturday
    let sunday

    if (weeklies && weeklies.length) {
        monday = weeklies.map((weekly) => {
            if (weekly.date === 'Monday') {
                return <WeeklyList key={weekly} weekly={weekly} />
            }
        })

        tuesday = weeklies.map((weekly) => {
            if (weekly.date === 'Tuesday') {
                return <WeeklyList key={weekly} weekly={weekly} />
            }
        })

        wednesday = weeklies.map((weekly) => {
            if (weekly.date === 'Wednesday') {
                return <WeeklyList key={weekly} weekly={weekly} />
            }
        })

        thursday = weeklies.map((weekly) => {
            if (weekly.date === 'Thursday') {
                return <WeeklyList key={weekly} weekly={weekly} />
            }
        })

        friday = weeklies.map((weekly) => {
            if (weekly.date === 'Friday') {
                return <WeeklyList key={weekly} weekly={weekly} />
            }
        })

        saturday = weeklies.map((weekly) => {
            if (weekly.date === 'Saturday') {
                return <WeeklyList key={weekly} weekly={weekly} />
            }
        })

        sunday = weeklies.map((weekly) => {
            if (weekly && weekly.date === 'Sunday') {
                return <WeeklyList key={weekly} weekly={weekly} />
            }
        })
    }

    function emptyCheck(date) {
        if (date) {
            if (date.every((element) => element == undefined)) {
                return (
                    <ul className="weekly-event">
                        <li className="weekly-empty">
                            🚫 No events scheduled 🚫
                        </li>
                    </ul>
                )
            } else {
                return date
            }
        }
    }

    return (
        <div className="weekly-event-list">
            <div className="weekly-date">
                <h1 className="weekdate-name">Monday</h1>
                <div className="selected-events">{emptyCheck(monday)}</div>
            </div>
            <div className="weekly-date">
                <h1 className="weekdate-name">Tuesday</h1>
                <div className="selected-events">{emptyCheck(tuesday)}</div>
            </div>
            <div className="weekly-date">
                <h1 className="weekdate-name">Wednesday</h1>
                <div className="selected-events">{emptyCheck(wednesday)}</div>
            </div>
            <div className="weekly-date">
                <h1 className="weekdate-name">Thursday</h1>
                <div className="selected-events">{emptyCheck(thursday)}</div>
            </div>
            <div className="weekly-date">
                <h1 className="weekdate-name">Friday</h1>
                <div className="selected-events">{emptyCheck(friday)}</div>
            </div>
            <div className="weekly-date">
                <h1 className="weekdate-name">Saturday</h1>
                <div className="selected-events">{emptyCheck(saturday)}</div>
            </div>
            <div className="weekly-date">
                <h1 className="weekdate-name">Sunday</h1>
                <div className="selected-events">{emptyCheck(sunday)}</div>
            </div>
        </div>
    )
}

export default SetWeekly
