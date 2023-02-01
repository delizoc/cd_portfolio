import React from "react";

import IntroImg from "../assets/intro-img.png";
import { Link } from "react-router-dom";
import "./HomeImgStyles.css";


function ProfileCard({text, onClick}){
    return(
        <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <h1>Hi! My name is Colette.</h1>
            <p>
              {`I'm a `}{" "}
              <span 
                className="txt-rotate"
                data-rotate='[ " Fullstack Developer, " Cancer Researcher", " Recent CS Grad"]'
              >
                <span className="wrap">{text}</span>
              </span>
            </p>
            <h1> </h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
    );
  }
export default ProfileCard;