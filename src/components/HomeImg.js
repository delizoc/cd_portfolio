import "./HomeImgStyles.css";
import React from 'react'

import IntroImg from "../assets/intro-img.png";
import { Link } from "react-router-dom";

const HomeImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <h1>Hi, My name is Colette.</h1>
            <p>I'm a recent CS graduate && full stack developer.
            {/* <span class="txt-rotate" data-rotate="[ &quot;a Fullstack Developer&quot;, &quot;a Cancer Researcher&quot;, &quot;a recent CS graduate&quot; ]"></span> */}
            </p>
            <h1>Welcome.</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
    
  )
}

export default HomeImg