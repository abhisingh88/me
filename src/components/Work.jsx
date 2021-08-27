import React from 'react'
import { NavLink } from 'react-router-dom'
import './Work.css'

function Resume() {
    return (
        // <div className="d-flex my-5">
        <div className="container-fluid my-5">
            <div className="timeline-tag">
                <div className="card-container left-side">
                    <div className="card-content">
                        <h2>July 5 2021 - August 5 2021</h2>
                        <NavLink download to="files/ridenet.pdf" target="_blank"><p>RideNet Technologies LLP</p></NavLink>
                    </div>
                </div>
                <div className="card-container right-side">
                    <div className="card-content">
                        <h2>May 21 2021 - August 21 2021</h2>
                        <NavLink download to="files/conzura.pdf" target="_blank"><p>Conzura Soft Solutions</p></NavLink>
                    </div>
                </div>
            </div>
        </div>
        // </div >
    )
}

export default Resume
