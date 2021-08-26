import React from 'react'
import './Projects.css'
import Tic from './images/tic.jpg'
import Cal from './images/calculator.jpg'
import Clock from './images/clock.jpg'
import Music from './images/music.jpg'
import Table from './images/table.jpg'
import Todo from './images/todo.jpg'
import HousePrice from './images/houseprice.jpg'
import TodoWeb from './images/todoweb.jpg'
import Chat from './images/chat.jpg'
import Forum1 from './images/forum-1.jpg'
import Forum2 from './images/forum-2.jpg'
import Forum3 from './images/forum-3.jpg'
import Forum4 from './images/forum-4.jpg'

function Projects() {
    let Alt = "Project Image";
    let proImg = {
        height: "400px",
        width: "400px",
    }
    return (
        <div className="container">
            <div className="text-center my-5 py-2">
                <p>Click on the title to see the source code</p>
                <h4 className="mt-1">App Devlopment Projects</h4>
                <ul className="my-2">
                    <li className="mt-5"><a href="https://github.com/abhisingh88/Android-TicTacToe" >Tic tac toe</a></li>
                    <img src={Tic} alt={Alt} style={proImg} />
                    <li className="mt-5"><a href="https://github.com/abhisingh88/Android-TableCalculator" >Table Finder</a></li>
                    <img src={Table} alt={Alt} style={proImg} />
                    <li className="mt-5"><a href="https://github.com/abhisingh88/Android-MusicPlayer" >Music Player</a></li>
                    <img src={Music} alt={Alt} style={proImg} />
                    <li className="mt-5"><a href="https://github.com/abhisingh88/Todo-Flutter" >Todo app with backend</a></li>
                    <img src={Todo} alt={Alt} style={proImg} />
                    <li className="mt-5"><a href="https://github.com/abhisingh88/Flutter-Calculator" >Calculator</a></li>
                    <img src={Cal} alt={Alt} style={proImg} />
                    <li className="mt-5"><a href="https://github.com/abhisingh88/Stopwatch-Flutter" >StopWatch</a></li>
                    <img src={Clock} alt={Alt} style={proImg} />
                </ul>
                <hr />
                <h5 className="mt-5 py-2">Web Devlopments Projects</h5>
                <ul>
                    <div>
                        <li className="mt-3"><a href="https://github.com/abhisingh88/Web-Chat-App">Chat application using NodeJS and Socket</a></li>
                        <img src={Chat} alt={Alt} style={proImg} />
                    </div>
                    <div>
                        <li className="mt-3"><a href="https://github.com/abhisingh88/React-Todo">Todo app in React and Angular</a></li>
                        <img src={TodoWeb} alt={Alt} style={proImg} />
                    </div>
                    <div>
                        <li className="mt-3"><a href="https://github.com/abhisingh88/House-Price-Predictor">Flask website</a></li>
                        <img src={HousePrice} alt={Alt} style={proImg} />
                    </div>
                    <div>
                        <li className="mt-3"><a href="https://github.com/abhisingh88/forum_php">Forum</a></li>
                        <div className="flex">
                            <div className="row">
                                <img src={Forum1} alt={Alt} style={proImg} />
                                <img src={Forum2} alt={Alt} style={proImg} />
                                <img src={Forum3} alt={Alt} style={proImg} />
                            </div>
                        </div>
                    </div>
                </ul>
                <hr />
                <h5>ML Projects</h5>
                <ul>
                    <li className="mt-5"><a href="https://github.com/abhisingh88/House-Price-Predictor">House price predictor</a></li>
                    <img src={HousePrice} style={proImg} alt={Alt} />
                </ul>
                <hr />
                <h5>Other Personal Projects</h5>
                <ul>
                    <li><a href="https://github.com/abhisingh88/Personal-Projects/tree/main/Tkinter">Notepad</a></li>
                    <li><a href="https://github.com/abhisingh88/Personal-Projects/tree/main/Jarvis">Jarvis</a></li>
                    <li><a href="https://github.com/abhisingh88/Personal-Projects/tree/main/Tkinter">Calculator Using Tkinter</a></li>
                    <li><a href="https://github.com/abhisingh88/Personal-Projects/tree/main/Snake">Snake game</a></li>
                    <li><a href="https://github.com/abhisingh88/Personal-Projects/tree/main/Flappy%20Bird">Flappy game</a></li>
                </ul>
                <hr />
            </div>
        </div>
    )
}

export default Projects
