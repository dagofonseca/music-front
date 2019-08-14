import React, { Component } from 'react';
import "./styles/home.css"

class Home extends Component {
  constructor(){
    super();    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e,targetId) {
    const anchorTarget = document.getElementById(targetId)
    e.preventDefault();
    anchorTarget.scrollIntoView({
      behavior:"smooth"      
    })
  }

  render() {

    return (
      <div id="homeContainer">
        <div className="homeSection">
          <div id="logoText">
            <h2>Muxsis</h2>
            <h3>una plataforma para músicos independientes</h3>
          </div>
          <div id="buttonMore">
            <div className="blurButton">
              <a href="#carouselHome"
                 onClick={(e) => this.handleClick(e, "carouselHome")} >
                conocer más
            </a>
            </div>
          </div>
        </div>
        <div className="homeSection" id="carouselHome" >
          algo
      </div>
      </div>
    );
  }
}

export default Home;