import React from 'react'
import SetWeekly from './SetWeekly'

function WeeklyEventContainer({ weeklies }) {
    return (
        <div className="weekly-events">
            <div className="weekly-list">
                <SetWeekly weeklies={weeklies} />
            </div>
        </div>
    )
}

export default WeeklyEventContainer
