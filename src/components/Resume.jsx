import React from 'react'
import ResumeDoc from './images/resumedocs.jpg'
import { NavLink } from 'react-router-dom'


function Resume() {
    return (
        <div className="d-flex my-5">
            <div className="m-auto">
                <NavLink download to="files/Resume.pdf" target="_blank"><img src={ResumeDoc} alt="Resume Not loaded properly" /></NavLink>
            </div>
        </div >
    )
}

export default Resume
