import React from 'react'

function Footer() {
    let footerstyle = {
        position: "relative",
        top: "42vh",
        width: "100%",
        height: "150px"
    }
    return (
        <div className='bg-dark text-light' style={footerstyle}>
            <footer className='text-center'>
                {/* <p>"The goal is not to be better than the other man, but your previous self."</p> */}
                <p>Want to connect?</p>
                <p>Follow Me on <a href="https://github.com/abhisingh88">
                    <i className=" mx-1 fa fa-github" style={{ height: "40px", width: "50px" }}></i>
                </a>

                    <a href="https://www.linkedin.com/in/abhisingh88">
                        <i className=" mx-1 fa fa-linkedin-square" style={{ height: "40px", width: "50px" }}></i>
                    </a>
                </p>
            </footer>
        </div>
    )
}

export default Footer
