import React from 'react'
// import foodTruck from './img/foodtruck_white.png'
// import vendorVillage from './img/vendor_white.png'
import musician from './img/musician_white.png'
import dj from './img/dj_white.png'

function Services() {
    return (
        <div className='services-container'>
            <h1 className='services-main-title'>Join the B.F.G. Network</h1>
            <div className='home-services'>
                <a className="service-grid-item" target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfpmlHkx2qXkvwKM0JOvq80YkGUkYEnzUPt1yiLelrndY3yMw/viewform?usp=sf_link">
                    <div className='services-inner'>
                        <img src={musician} alt="" />
                        <div className='services-title'>
                            <h1>Musicians</h1>
                            <p>Sign up to join the band roster</p>
                        </div>
                    </div>
                </a>
                <a className="service-grid-item" target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfpmlHkx2qXkvwKM0JOvq80YkGUkYEnzUPt1yiLelrndY3yMw/viewform?usp=sf_link">
                    <div className='services-inner'>
                        <img src={dj} alt="" />
                        <div className='services-title'>
                            <h1>DJ/KJ</h1>
                            <p>Sign up to join the DJ/KJ roster</p>
                        </div>
                    </div>
                </a>
                {/* <a className="service-grid-item" target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSd8bJ1jqHwniyH7-QUuh7yFXE9LtY3IZMZWdxC5AznLpRMoPg/viewform?usp=sf_link">
                    <div className='services-inner'>
                        <img src={foodTruck} alt="" />
                        <div className='services-title'>
                            <h1>Food Truck</h1>
                            <p>Sign up your food truck</p>
                        </div>
                    </div>
                </a>
                <a className="service-grid-item" target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSeqpnBj-2NWH8O7qhtB4yHeqymPREau7xhTAKltSD75MIfFSA/viewform?usp=sf_link">
                    <div className='services-inner'>
                        <img src={vendorVillage} alt="" />
                        <div className='services-title'>
                            <h1>Vendor Village</h1>
                            <p>Sign up for the Vendor Village</p>
                        </div>
                    </div>
                </a> */}
            </div>
        </div>
    )
}

export default Services