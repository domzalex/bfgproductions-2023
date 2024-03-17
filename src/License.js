import React from 'react'
import PCBCoC from './img/PCBCoC.png'

function License() {
    return (
        <div className="license">
            <h1>B.F.G. Productions is a <i>proud</i> member of the Panama City Beach <br></br><a href="https://www.pcbeach.org">Chamber of Commerce</a></h1>
            <div className='license-sub'>  
                <img src={PCBCoC}></img>
                <div className='license-contact-info'>
                    <h3>Member Contact:</h3>
                    <p>Daniel Henderson</p>
                    <a className="phone" href="tel:+8509196125">
                        +1 (850) 919-6125
                    </a>
                </div>
            </div>
            <h2><b>B.F.G. Productions PCB, LLC</b> is licensed and bonded in the state of Florida.</h2>
        </div>
    )
}

export default License