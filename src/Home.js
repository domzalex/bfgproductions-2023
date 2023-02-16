import React from 'react'
import Hero from './Hero'
import WeeklyEventContainer from './WeeklyEventContainer'
import Events from './Events'
import Services from './Services'

function Home({ allEvents, weeklies }) {
    return (
        <div>
            <Hero />
            <WeeklyEventContainer weeklies={weeklies} />
            <Events allEvents={allEvents} />
            <Services />
        </div>
    )
}

export default Home
