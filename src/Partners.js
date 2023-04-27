import React from 'react'
import legends from './img/legends_logo.png'
import tincup from './img/tincup_logo.png'
import wrights from './img/wrights_logo.png'
import indio from './img/indio_logo.png'

function Partners() {
    return (
        <>
            <h1>B.F.G. Proudly Partners With</h1>
            <div className='partners-banner'>
                <a className="partners-grid-item" target="_blank" rel="noreferrer" href="https://www.spiritsusa.com">
                    <img src={tincup} alt="Tin Cup Grill logo" />   
                </a>
                <a className="partners-grid-item" target="_blank" rel="noreferrer" href="https://tincupgrill.com">
                    <img src={legends} alt="Legends Distillery logo" />
                </a>
                <a className="partners-grid-item" target="_blank" rel="noreferrer" href="https://www.indiobrewing.com">
                    <img src={indio} alt="Indio Brewing logo" />
                </a>
                <a className="partners-grid-item" target="_blank" rel="noreferrer" href="https://www.facebook.com/Wrightsfishandchips/">
                    <img src={wrights} alt="Wright's On The Green logo" />
                </a>
            </div>
        </>
    )
}

export default Partners