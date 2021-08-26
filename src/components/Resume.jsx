import React from 'react'
import ResumeDoc from './resume.jpg'

function Resume() {
    return (
        <div className="d-flex">
            <div className="m-auto">
                <img src={ResumeDoc} alt="Resume Not loaded properly" />
            </div>
        </div>
    )
}

export default Resume
