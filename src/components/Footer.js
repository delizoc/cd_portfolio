import "./FooterStyles.css";
import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <p><FaHome size={20} style={{color:"#fff", marginRight: "2rem" }}/>Seattle, WA</p>
                </div>
                <div className="phone">
                    <p><FaPhone size={20} style={{color:"#fff", marginRight: "2rem" }}/>425-275-2549</p>
                </div>
                <div className="email">
                    <p><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem" }}/>delizcol000@gmail.com</p>
                </div>
            </div>
            <div className="right">
                <p></p>
                <div className="social">
                <a href="https://www.linkedin.com/in/colette-delizo-478521117/"><FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem" }}/></a>
                <a href="https://github.com/delizoc"><FaGithub size={30} style={{color:"#fff", marginRight: "1rem" }}/></a>
                <a href="https://www.facebook.com/lette.delizo"><FaFacebook size={30} style={{color:"#fff", marginRight: "1rem" }}/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer