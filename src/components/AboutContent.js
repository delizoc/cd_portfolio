import "./AboutContentStyles.css";

import React from 'react';
import { Link } from "react-router-dom";
import Portfolio1 from "../assets/profile1.JPG";
import Portfolio2 from "../assets/profile2.jpg";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm a dynamic, motivated, results-oriented Developer who enjoys developing innovative solutions that drive technological advancement.
                I have two undergraduate degrees, one in Computer Science and the other in Biology. In my free time I enjoy anything outdoors!</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>      
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={Portfolio1} className="img" alt=""/>
                </div>
                <div className="img-stack bottom">
                    <img src={Portfolio2} className="img" alt=""/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default AboutContent