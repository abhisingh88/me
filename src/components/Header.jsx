import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            <div className="container-fluid">
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/me" style={{ fontFamily: "cursive", fontSize: "22px", backgroundColor: "brown", width: "100px" }}>Abhishek</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="row">
                                    <div className="col align-self-end">
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                                <li className="nav-item px-3">
                                                    <NavLink className="nav-link" aria-current="page" to="/me/">Home</NavLink>
                                                </li>
                                                <li className="nav-item px-3">
                                                    <NavLink className="nav-link" to="/me/projects">Projects</NavLink>
                                                </li>
                                                <li className="nav-item px-3">
                                                    <NavLink className="nav-link" to="/me/resume">Resume</NavLink>
                                                </li>
                                                <li className="nav-item px-3">
                                                    <NavLink className="nav-link" to="/me/experience">Work Experience</NavLink>
                                                </li>
                                                <li className="nav-item px-3">
                                                    <NavLink className="nav-link" to="/me/contact">Contact</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
