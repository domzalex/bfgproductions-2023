import React from 'react'
import wrights from './img/wrights_logo.png'
import indio from './img/indio_logo.png'

function Partners() {
    return (
        <div className="partners-container">
            <h1>B.F.G. Proudly Partners With</h1>
            <div className="partners-banner">
                <a
                    className="partners-grid-item"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.indiobrewing.com"
                >
                    <img src={indio} alt="Indio Brewing logo" />
                </a>
                <a
                    className="partners-grid-item"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/Wrightsfishandchips/"
                >
                    <img src={wrights} alt="Wright's On The Green logo" />
                </a>
            </div>
        </div>
    )
}

export default Partners
