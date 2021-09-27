import React from 'react'

function Contact() {
    return (
        <div className="container">
            <h2 className="text-center my-3">Contact me</h2>
            <div className="row align-items-center mx-3" >
                <div className="contact_info">
                    <div className="info_item">
                        <i className="fa fa-graduation-cap"></i>
                        <h5>Address</h5>
                        <h6>Nerul, Navi Mumbai, India</h6>
                        <p>SIES Graduate School of Technology</p>
                    </div>
                    <div className="info_item">
                        <i className="fa fa-envelope-o"></i>
                        <p>abhishek523240@gmail.com</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact
