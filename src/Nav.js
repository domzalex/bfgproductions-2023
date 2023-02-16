import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
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
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfFY4qg3rcyOHVytOT6pV8PDyJKqiI_oPU2cEym8qYmDKVfdA/viewform?usp=sf_link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        B.F.G. Vendor Survey
                    </a>
                </ul>
            </div>
        </>
    )
}

export default Nav
