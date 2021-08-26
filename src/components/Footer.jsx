import React from 'react'

function Footer() {
    let footerstyle = {
        position: "relative",
        top: "42vh",
        width: "100%",
        height: "80px"
    }
    return (
        <div className='bg-dark text-light' style={footerstyle}>
            <footer className='text-center py-3'>
                Copyright &copy; - Abhishek singh
            </footer>
        </div>
    )
}

export default Footer
