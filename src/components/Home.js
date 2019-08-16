import React, { Component } from 'react';
import Slider from "./Slider";
import img1 from "../images/landing-page.jpg";
import img2 from "../images/amplifier.jpg";
import img3 from "../images/disc.jpg";
import img4 from "../images/girl.jpg";
import img5 from "../images/microphone.jpg";
import img6 from "../images/guitar.jpg";
import "./styles/home.css"

class Home extends Component {
  constructor() {
    super();
    this.state = { 
      backgroundImages: [img1, img2, img3, img4, img5, img6],
      borders: [], 
      lastSection: 1 
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.calculateBorders = this.calculateBorders.bind(this);
    this.calculateSection = this.calculateSection.bind(this);
    this.changeBackground = this.changeBackground.bind(this);
  }

  componentDidMount() {
    this.calculateBorders()
    window.addEventListener('resize', () => this.calculateBorders());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.calculateBorders());
  }

  handleClick(e, targetId) {
    const anchorTarget = document.getElementById(targetId)
    e.preventDefault();
    anchorTarget.scrollIntoView({
      behavior: "smooth"
    })
  }

  handleMouseMove(e) {
    let currentHorizontalPosition = e.screenX;
    this.changeBackground(currentHorizontalPosition);
  }

  changeBackground(currentHorizontalPosition) {
    const targetSection = this.calculateSection(currentHorizontalPosition);

    if (targetSection !== this.state.lastSection) {
      let images = document.getElementsByClassName("backImg");
      images[targetSection].style.zIndex = "1";
      images[this.state.lastSection].style.zIndex = "0";
      this.setState({ lastSection: targetSection });
    }
  }

  calculateSection(currentHorizontalPosition) {
    const { borders } = this.state;
        
    if(currentHorizontalPosition <= borders[0]){
      return 0;
    }
    else if(currentHorizontalPosition > borders[borders.length - 1]){      
      return borders.length;
    }
    else{
      for (let index = 1; index < borders.length; index++) {
        if(currentHorizontalPosition <= borders[index] && 
           currentHorizontalPosition > borders[index-1] )
        {
          return index;
        }        
      }
    }
  }

  calculateBorders() {
    const width = window.innerWidth;
    const firstBorder = width / this.state.backgroundImages.length;
    let response = [firstBorder];
    for (let borderNumber = 2; borderNumber < this.state.backgroundImages.length; borderNumber++) {
      response.push(firstBorder * borderNumber);
    }    
    this.setState({borders: response});
  }

  render() {
    return (
      <div id="homeContainer">
        <div className="homeSection"
          onMouseMove={this.handleMouseMove} >
          {this.state.backgroundImages.map( (item, i) => (
            <div className="backImg" key={i}
              style={{ backgroundImage: `url(${item})` }} >
            </div>
          ))}

          <div id="contentFirstHomeSection">
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
        </div>

        <div className="homeSection" id="carouselHome" >
          <Slider />
        </div>
      </div>
    );
  }
}

export default Home;