import React from 'react'
import TodoWeb from './images/todoweb.jpg'
import Chat from './images/chat.jpg'
import Forum1 from './images/forum-1.jpg'
import Forum2 from './images/forum-2.jpg'
import HousePrice from './images/houseprice.jpg'


function WebApp() {
    let Alt = "Project Image";
    let proImg = {
        height: "300px",
        width: "300px",
    }
    return (
        <div>
            <div>
                <h5 className="py-2">Web Devlopments Projects</h5>
                <ul style={{ listStyle: "none" }}>
                    <li className="mt-3"><a href="https://github.com/abhisingh88/Web-Chat-App">Chat application using NodeJS and Socket</a></li>
                    <img src={Chat} alt={Alt} style={proImg} />
                    <li className="mt-3"><a href="https://github.com/abhisingh88/React-Todo">Todo app in React and Angular</a></li>
                    <img src={TodoWeb} alt={Alt} style={proImg} />
                    <li className="mt-3"><a href="https://github.com/abhisingh88/House-Price-Predictor">Flask website</a></li>
                    <img src={HousePrice} alt={Alt} style={proImg} />

                    <li className="mt-3"><a href="https://github.com/abhisingh88/forum_php">Forum</a></li>
                    <div className="flex">
                        <div className="">
                            <img src={Forum1} className="mx-2" alt={Alt} style={proImg} />
                            <img src={Forum2} className="mx-2" alt={Alt} style={proImg} />
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default WebApp
