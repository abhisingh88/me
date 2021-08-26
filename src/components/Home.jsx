import React from 'react'
import Photo from './images/photo.jpg';
import Android from './images/android.png';
import Flutter from './images/flutter.png';
import Css from './images/css.png';
import Html from './images/html.png';
import Js from './images/js.png';
import Mongo from './images/mongo.png';
import Sql from './images/sql.jpg';
import Flask from './images/flask.png';
import Django from './images/django.png';
import Node from './images/node.png';
import Numpy from './images/numpy.png';
import Pandas from './images/pandas.png';
import Scikit from './images/scikit.png';
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
                            <p>I'm intersted in fields like - Application devlopment | ML | Iot | Cyber security | Digital marketing.</p>
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
                                <a href="https://github.com/abhisingh88">
                                    <i className=" mx-1 fa fa-github" style={{ height: "40px", width: "50px" }}></i>
                                </a>
                                <a href="">
                                    <i className=" mx-1 fa fa-instagram" style={{ height: "40px", width: "50px" }}></i>
                                </a>
                                <a href="https://www.linkedin.com/in/abhisingh88">
                                    <i className=" mx-1 fa fa-linkedin-square" style={{ height: "40px", width: "50px" }}></i>
                                </a>
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
                        <p>I'm 3rd year student of IT Engineering at SIES GST Nerul.</p>
                        <p>I'm always ready to accept new challenges, learning new things and meeting new peoples.</p>
                        <p>I love to do things which people want to use.</p>
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



            </div >
        </div >
    )
}

export default Home
