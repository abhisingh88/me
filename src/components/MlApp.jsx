import React from 'react'
import HousePrice from './images/houseprice.jpg'

function MlApp() {
    let Alt = "Project Image";
    let proImg = {
        height: "300px",
        width: "300px",
    }
    return (
        <div>
            <h5>ML Projects</h5>
            <ul style={{ listStyle: "none" }}>
                <li className="mt-5"><a href="https://github.com/abhisingh88/House-Price-Predictor">House price predictor</a></li>
                <img src={HousePrice} style={proImg} alt={Alt} />
            </ul>
        </div>
    )
}

export default MlApp
