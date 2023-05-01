import React from 'react'

function Staff() {
    return (
        <div className="staff-container">
            <div className="staff-card">
                <div className="staff-image dan"></div>
                <div className="staff-card-info">
                    <h1>Daniel Henderson</h1>
                    <p>Co-Owner, CEO</p>
                </div>
            </div>
            <div className="staff-card">
                <div className="staff-image chad"></div>
                <div className="staff-card-info">
                    <h1>Chad Honea</h1>
                    <p>Co-Owner</p>
                </div>
            </div>
            <div className="staff-card">
                <div className="staff-image alex"></div>
                <div className="staff-card-info">
                    <h1>Alex Domzalski</h1>
                    <p>Web Developer</p>
                </div>
            </div>
            <div className="staff-card">
                <div className="staff-image haleigh"></div>
                <div className="staff-card-info">
                    <h1>Haleigh Crochet</h1>
                    <p>Social Media Manager</p>
                </div>
            </div>
        </div>
    )
}

export default Staff
