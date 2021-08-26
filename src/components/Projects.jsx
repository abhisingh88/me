import React from 'react'
import './Projects.css'
import Tic from './test/tic.jpg'
import Cal from './test/calculator.jpg'
import Clock from './test/clock.jpg'
import Music from './test/music.jpg'
import Table from './test/table.jpg'
import Todo from './test/todo.jpg'
import HousePrice from './test/houseprice.jpg'
import TodoWeb from './test/todoweb.jpg'
import Chat from './test/chat.jpg'

function Projects() {
    let Alt = "Project Image";
    let proImg = {
        height: "400px",
        width: "400px",
    }
    return (
        <div className="container">
            <div className="text-center my-5 py-2">
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
                    <p className="py-2">I'm also planning to work on a research paper implmentation</p>
                </ul>
                <hr />
                <h5 className="mt-5 py-2">Web Devlopments Projects</h5>
                <ul>
                    <li className="mt-3"><a href="https://github.com/abhisingh88/Web-Chat-App">Chat application using NodeJS and Socket</a></li>
                    <img src={Chat} alt={Alt} style={proImg} />
                    <li className="mt-3"><a href="https://github.com/abhisingh88/React-Todo">Todo app in React and Angular</a></li>
                    <img src={TodoWeb} alt={Alt} style={proImg} />
                    <li><a href="https://github.com/abhisingh88/House-Price-Predictor">Some Flask and Django website</a></li>
                </ul>
                <hr />
                <h5>ML Projects</h5>
                <ul>
                    <li className="mt-5"><a href="https://github.com/abhisingh88/House-Price-Predictor">House price predictor</a></li>
                    <img src={HousePrice} style={proImg} alt={Alt} />
                </ul>
                <hr />
                <h5>Personal Projects</h5>
                <p>Click on the title to see the source code</p>
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
