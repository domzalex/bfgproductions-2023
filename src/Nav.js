import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    const [links, setLinks] = useState()
    let link

    useEffect(() => {
        const url = '/getLinks'
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setLinks(data)
            } catch (error) {
                console.log('error', error)
            }
        }
        fetchData()
    }, [])

    if (links) {
        link = links[0].link
    }

    return (
        <>
            <div className="nav">
                <Link className="home-link" to="/">
                    B.F.G. Productions
                </Link>
                <ul className="nav-link-group">
                    <a
                        className="nav-link"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfpmlHkx2qXkvwKM0JOvq80YkGUkYEnzUPt1yiLelrndY3yMw/viewform?usp=sf_link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Join B.F.G.
                    </a>
                    <a
                        className="nav-link"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSd8bJ1jqHwniyH7-QUuh7yFXE9LtY3IZMZWdxC5AznLpRMoPg/viewform?usp=sf_link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        B.F.G. Food Truck Survey
                    </a>
                    <a
                        className="nav-link"
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Cosmic Outpost Survey
                    </a>
                </ul>
            </div>
        </>
    )
}

export default Nav

//https://docs.google.com/forms/d/e/1FAIpQLSeqpnBj-2NWH8O7qhtB4yHeqymPREau7xhTAKltSD75MIfFSA/viewform?usp=sf_link
