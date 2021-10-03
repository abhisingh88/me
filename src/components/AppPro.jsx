import React from 'react'
import Tic from './images/tic.jpg'
import Cal from './images/calculator.jpg'
import Clock from './images/clock.jpg'
import Music from './images/music.jpg'
import Table from './images/table.jpg'
import Todo from './images/todo.jpg'

function AppPro() {
    let Alt = "Project Image";
    let proImg = {
        height: "300px",
        width: "300px",
    }
    return (
        <div>
            <div>
                <h4 className="mt-1">App Development Projects</h4>
                <ul className="my-2" style={{ listStyle: "none" }}>
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
            </div>
        </div>
    )
}

export default AppPro
