import React from 'react'
import Photo from './photo.jpg';
import Android from './android.png';
import Flutter from './flutter.png';
import Css from './css.png';
import Html from './html.png';
import Js from './js.png';
import Mongo from './mongo.png';
import Sql from './sql.jpg';
import Flask from './flask.png';
import Django from './django.png';
import Node from './node.png';
import Numpy from './numpy.png';
import Pandas from './pandas.png';
import Scikit from './scikit.png';
import { NavLink } from 'react-router-dom'
import './Home.css'


function Home() {
    let image_style = {
        height: "500px",
        width: "500px",
    }
    let skills_style = {
        height: "45px",
        width: "75px",
        filter: "grayscale(1)"
    }
    return (
        <div className="container my-5">
            <div className="row justify-content-start py-5 my-5" >
                <div className="col-1">

                </div>
                <div className="col-8 mx-0 py-0" style={{ width: "550px" }} >
                    <img src={Photo} style={image_style} alt="" />
                </div>
                <div className="col-3 my-0 py-0">
                    <div className="col align-self-center">
                        <div className="my_info">
                            <p className="py-0">Hello everyone, Glad to meet you</p>
                            <h6>I'm</h6>
                            <h3 className="my-0">Abhishek singh</h3>
                            <p>I'm intersted in fields like - Application devlopment | Robotics | Iot | Cyber security | ML | Digital marketing.</p>
                            <p>Solving real-world problems gives a diffrent kind of satisfaction to me.</p>
                            <p>I like meeting new peoples and taking new challenges and push myself to do something which helps to someone.</p>
                        </div>
                        <div>
                            <i className=" mx-1 fa fa-envelope"></i>
                            <p>abhishek523240@gmail.com</p>
                        </div>
                        <div>
                            <i className=" mx-1 fa fa-home"></i>
                            <p>Airoli | Navi Mumbai | India</p>
                        </div>
                        <div>
                            <div className="my-2">
                                <NavLink to="">
                                    <i className=" mx-1 fa fa-github" style={{ height: "40px", width: "50px" }}></i>
                                </NavLink>
                                <NavLink to="">
                                    <i className=" mx-1 fa fa-instagram" style={{ height: "40px", width: "50px" }}></i>
                                </NavLink>
                                <NavLink to="">
                                    <i className=" mx-1 fa fa-linkedin-square" style={{ height: "40px", width: "50px" }}></i>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <hr />
                <div className="row justify-content-start">
                    <div className="col-1">

                    </div>
                    <div className="col-6">
                        <h2>About Myself</h2>
                        <p>I'm 2nd year student of IT Engineering at SIES GST Nerul.</p>
                        <p>I'm always ready to accept new challenges, learning new things and meeting new peoples.</p>
                        <p>I feel very happy to do something which helps to the peoples.</p>
                    </div>
                    <div className="col-5">
                        <h2>Skills</h2>
                        <img src={Android} className="px-2 my-3" style={skills_style} alt="" />
                        <img src={Flutter} className="px-2 my-3" style={skills_style} alt="" />
                        <img src={Flask} className="px-2 my-3" style={skills_style} alt="" />
                        <img src={Django} className="px-2 my-3" style={skills_style} alt="" />
                        <img src={Node} className="px-2 my-3" style={skills_style} alt="" />
                        <img src={Sql} className="px-2 my-3" style={skills_style} alt="" />
                        <img src={Mongo} className="px-2 my-3" style={skills_style} alt="" />
                        <img src={Scikit} className="px-2 my-3" style={skills_style} alt="" />
                        <img src={Numpy} className="px-2 my-3" style={skills_style} alt="" />
                        <img src={Pandas} className="px-2 my-3" style={skills_style} alt="" />
                        <img src={Html} className="px-2 my-3" style={skills_style} alt="" />
                        <img src={Css} className="px-2 my-3" style={skills_style} alt="" />
                        <img src={Js} className="px-2 my-3" style={skills_style} alt="" />
                    </div>
                </div>
            </div>
            <hr />
            <div className="row justify-content-start">
                <div className="col-1">

                </div>
                <div className="col-10 my-5">
                    <h2>Description of Skills :</h2>
                    <ul>
                        <li>
                            <strong>Android</strong> : I know how to develop android apps using java with backend and i have also made some good projects like Tic tac toe game, Music player and Table Finder etc. and you can see them in project section.
                        </li>
                        <li>
                            <strong>Flutter</strong> : I know how to develop Flutter apps using dart with backend and i have made some good projects like stowatch, Todo app with backend and Calculator etc.
                        </li>
                        <li>
                            <strong>Flask</strong> : I had made some website using Python flask package like House Price predictor and Corona Predictor etc.
                        </li>
                        <li>
                            <strong>Django</strong> : Till now i had not made any big website i had just made a login website using Django but in future i'm planning to make a E-commerce website.
                        </li>
                        <li>
                            <strong>Node</strong> : I had made a chat applicaton using web socket and 1 mpre website using NodeJS and you can see them in Project section.
                        </li>
                        <li>
                            <strong>SQL</strong> : I have knowledge of working with Relation databases like MySQL, PostGres, Sqlite etc. and i also know about SQL to Perform CRUD operation on database.
                        </li>
                        <li>
                            <strong>NoSQL</strong> : I also have knowledge of working with NoSQL databases like MongoDB and performing CRUD operation.
                        </li>
                        <li>
                            <strong>Machine Learning</strong> : I have some knowledge of ML using SciKit Learn and in I'm also learning DL using Tensorflow. I also know about NumPy and Pandas for data visualization finding useful data, stardizing the data, checking the content in data coloums etc.
                        </li>
                        <li>
                            <strong>HTML | CSS</strong> : I also know about HTML and CSS for placing elements desiging them and making a very beutiful website.
                        </li>
                        <li>
                            <strong>JS</strong> : I know about Javascript to make the webpages interactive and perform some task based on some inputs and in JS i know basic as well as advance concept like AJAX, Regular expression etc.
                        </li>
                        <li>
                            <strong>ReactJS | AngularJs</strong> : I have experience of working with various JS frameworks like React and Angular to make single page appliction for smooth user experience. and you can see my project about these two in Project section from the NavBar. I had created this website also using ReactJS.
                        </li>
                    </ul>
                </div>


            </div >
        </div >
    )
}

export default Home
