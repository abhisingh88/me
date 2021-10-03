import React from 'react'
import { NavLink } from 'react-router-dom'
import './Work.css'

function Resume() {
    return (
        // <div className="d-flex my-5">
        <div className="container-fluid my-5">
            <div className="container my-1">
                <div className="mx-5">
                    <p>Click on Company Name or see doc here 👉
                        <a className="ml-4 px-2" href="https://www.linkedin.com/in/abhisingh88">
                            <i className=" mx-1 fa fa-linkedin-square" style={{ height: "50px", width: "50px" }}></i>
                        </a>
                    </p>
                </div>
            </div>
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
