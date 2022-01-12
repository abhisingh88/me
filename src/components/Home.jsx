import React from "react";
import Photo from "./images/me2.jpg";
import Android from "./images/android.png";
import Flutter from "./images/flutter.png";
import Css from "./images/css.png";
import Html from "./images/html.png";
import Js from "./images/js.png";
import Mongo from "./images/mongo.png";
import Sql from "./images/sql.jpg";
import Flask from "./images/flask.png";
import Django from "./images/django.png";
import Node from "./images/node.png";
import java from "./images/java.png";
import azure from "./images/azure.png";
import Scikit from "./images/scikit.png";
import Tf from "./images/tf.png";
import ReactJs from "./images/reactjs.png";
import "./Home.css";

function Home() {
  let image_style = {
    height: "20em",
    width: "20em",
    "borderRadius": "12px",
  };
  let skills_style = {
    height: "45px",
    width: "75px",
    // filter: "grayscale(1)",
  };
  return (
    <div className="container mt-0">
      <div className="row justify-content-start py-2 my-5">
        <div className="col-1"></div>
        <div className="col-3 mx-0 py-0" style={{ width: "20em" }}>
          <img src={Photo} style={image_style} alt="" />
        </div>
        <div className="col-md-3 mx-2">
          <div className="col align-self-center">
            <div className="my_info mx-4 ">
              <h2 className="pt-1">Hello!!</h2>
              <h6>I'm</h6>
              <h3 className="my-0" style={{fontFamily:"cursive"}}>Abhishek singh</h3>
              <p>I'm 3rd year engineering student.</p>
              <p>
                Deeply passionate about software development, Cloud, AI & IoT.
              </p>
              <p>I strongly believe in team work & learning from peoples.</p>
            </div>
            <div className="mx-4">
              <i className=" mx-1 fa fa-home"></i>
              <p>Airoli | Navi Mumbai | India</p>
            </div>
            <div className="mx-4">
              <div className="my-2">
                <a href="https://github.com/abhisingh88">
                  <i
                    className=" mx-1 fa fa-github"
                    style={{ height: "4em", width: "4em" }}
                  ></i>
                </a>

                <a href="https://www.linkedin.com/in/abhisingh88">
                  <i
                    className=" mx-1 fa fa-linkedin-square"
                    style={{ height: "4em", width: "4em" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      <div>
        <hr />
        <div className="row justify-content-start">
          <div className="col-1"></div>
          <div className="col-5">
            <h2>Education</h2>
            <i className="fa fa-graduation-cap"></i>
            <h5 className="my-2">Bachelor's Degree in Infomation Technology</h5>
            <p>SIES Graduate School of Technology</p>
            <p className="my-0">2019 - 2023</p>
          </div>
          <div className="col-5">
            <h2>Skills</h2>
            <img
              src={ReactJs}
              className="px-2 my-3"
              style={skills_style}
              alt=""
            />
            <img src={Html} className="px-2 my-3" style={skills_style} alt="" />
            <img src={Css} className="px-2 my-3" style={skills_style} alt="" />
            <img src={Js} className="px-2 my-3" style={skills_style} alt="" />
            <img
              src={Flask}
              className="px-2 my-3"
              style={skills_style}
              alt=""
            />
            <img
              src={Django}
              className="px-2 my-3"
              style={skills_style}
              alt=""
            />
            <img src={Node} className="px-2 my-3" style={skills_style} alt="" />
            <img src={Sql} className="px-2 my-3" style={skills_style} alt="" />
            <img
              src={Mongo}
              className="px-2 my-3"
              style={skills_style}
              alt=""
            />
            <img
              src={Scikit}
              className="px-2 my-3"
              style={skills_style}
              alt=""
            />
            <img
              src={Tf}
              className="px-2 my-3"
              style={skills_style}
              alt=""
            />
            
            <img
              src={azure}
              className="px-2 my-3"
              style={skills_style}
              alt=""
            />
            
            <img
              src={java}
              className="px-2 my-3"
              style={skills_style}
              alt=""
            />
            
            <img
              src={Android}
              className="px-2 my-3"
              style={skills_style}
              alt=""
            />
            <img
              src={Flutter}
              className="px-2 my-3"
              style={skills_style}
              alt=""
            />
          </div>
        <div className="col-lg-1"></div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Home;
