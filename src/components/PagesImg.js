import "./PagesImgStyles.css";
import React, { Component } from 'react'

class PagesImg extends Component {
  render(){    
    return (
      <div className="pages-img">
        <div className = "img">
            <img className="page-img" src={this.props.image} alt="IntroImg" />
        </div>
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  };
};

export default PagesImg;