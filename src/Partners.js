import React from 'react'
import cherryst from './img/partner-logos/cherryst.png'
import dicks from './img/partner-logos/dicks.jpg'
import freedomSmall from './img/partner-logos/freedom-small.jpeg'
import hammerhead from './img/partner-logos/hammerhead.png'
import indio from './img/partner-logos/indio.png'
import tobbSmall from './img/partner-logos/tobb-small.jpeg'

function Partners() {
    return (
        <div className="partners-container">
            <h1>B.F.G. Proudly Partners With</h1>
            <div className="partners-banner">
                <a
                    className="partners-grid-item"
                    target="_blank"
                    rel="noreferrer"
                    href="https://cherrystreetbrewing.com"
                >
                    <img src={cherryst} alt="" />
                </a>
                <a
                    className="partners-grid-item"
                    target="_blank"
                    rel="noreferrer"
                    href="https://dickslastresort.com"
                >
                    <img src={dicks} alt="" />
                </a>
                <a
                    className="partners-grid-item"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.freedombrewandshine.com"
                >
                    <img src={freedomSmall} alt="" />
                </a>
                <a
                    className="partners-grid-item"
                    target="_blank"
                    rel="noreferrer"
                    href="https://hammerheadfreds.com"
                >
                    <img src={hammerhead} alt="" />
                </a>
                <a
                    className="partners-grid-item"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.indiobrewing.com"
                >
                    <img src={indio} alt="" />
                </a>
                <a
                    className="partners-grid-item"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/p/Old-Beach-Bar-PCB-61550522964611/"
                >
                    <img src={tobbSmall} alt="" />
                </a>
            </div>
        </div>
    )
}

export default Partners
