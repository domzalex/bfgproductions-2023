import React from 'react'
import bfg2 from './img/bfg2.jpg'

function Footer() {
    return (
        <div className="footer">
            <img className="footer-img" src={bfg2} alt="bfg logo"></img>
            <div className="socials">
                <a
                    className="facebook"
                    href="https://www.facebook.com/BFGProductionsATL"
                    target="_blank"
                    rel="noreferrer"
                >
                    Facebook
                </a>
                <a
                    className="youtube"
                    href="https://www.youtube.com/channel/UCiuF_mTwcQRTYUVBGYbNnRA"
                    target="_blank"
                    rel="noreferrer"
                >
                    YouTube
                </a>
            </div>
            <div className="contact">
                <a className="phone" href="tel:+4706601276">
                    +1 (470) 660-1276
                </a>
                <a className="email" href="mailto:info@bfgproductionsatl.com">
                    info@bfgproductionsatl.com
                </a>
            </div>
            <img className="footer-img" src={bfg2} alt="bfg logo"></img>
        </div>
    )
}

export default Footer
