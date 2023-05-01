// import React, { useEffect, useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    // const [links, setLinks] = useState()
    // let link

    // useEffect(() => {
    //     const url = '/getLinks'
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(url)
    //             const data = await response.json()
    //             setLinks(data)
    //         } catch (error) {
    //             console.log('error', error)
    //         }
    //     }
    //     fetchData()
    // }, [])

    // if (links) {
    //     link = links[0].link
    // }

    return (
        <>
            <div className="nav">
                <Link className="home-link" to="/">
                    B.F.G. Productions
                </Link>
                {/* <ul className="nav-link-group">
                    <Link className="nav-link" to="/staff">
                        The B.F.G. Team
                    </Link>
                </ul> */}
            </div>
        </>
    )
}

export default Nav

//https://docs.google.com/forms/d/e/1FAIpQLSeqpnBj-2NWH8O7qhtB4yHeqymPREau7xhTAKltSD75MIfFSA/viewform?usp=sf_link
