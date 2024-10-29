import React from 'react'
import './App.css'
import Hero from './Hero'
// import EventContainer from './EventContainer'
import Services from './Services'
// import Partners from './Partners'
import License from './License'

function App() {
    // const [events, setEvents] = useState()
    // const [weekly, setWeekly] = useState()

    // useEffect(() => {
    //     const url = '/getEvents'
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(url)
    //             const data = await response.json()
    //             setEvents(data)
    //         } catch (error) {
    //             console.log('error', error)
    //         }
    //     }
    //     fetchData()
    // }, [])
    // useEffect(() => {
    //     const url = '/getWeekly'
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(url)
    //             const data = await response.json()
    //             setWeekly(data)
    //         } catch (error) {
    //             console.log('error', error)
    //         }
    //     }
    //     fetchData()
    // }, [])

    return (
        <>
            <Hero />
            {/* <EventContainer weekly={weekly} events={events} /> */}
            <License />
            <Services />
            {/* <Partners /> */}
            
        </>
    )
}

export default App
