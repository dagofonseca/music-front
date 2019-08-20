import React, { Component } from "react";
import "./styles/slider.css";
import { UncontrolledCarousel } from "reactstrap";
import Slide from "./Slide";
import { LeftArrow, RightArrow } from "./Arrow";
import img1 from "../images/story1.jpg";
import img2 from "../images/story2.jpg";
import img3 from "../images/story3.jpg";

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [img1, img2, img3],
            currentIndex: 0,
            translateValue: 0
        }
    }

    goToPrevSlide = () => {
        if (this.state.currentIndex === 0)
            return;

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + this.slideWidth()
        }))
    }

    goToNextSlide = () => {
        if (this.state.currentIndex === this.state.images.length - 1) {
            this.setState({
                currentIndex: 0,
                translateValue: 0
            })
            return ;
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue - this.slideWidth()
        }));
    }

    slideWidth = () => {
        return document.querySelector('.carrouselSlide').clientWidth
    }

    render() {
        const items = this.state.images.map((url, i) =>({
            src: url,
            altText: `Slide ${i}`,
            caption: `Slide ${i}`,
            header: `Slide ${i}`
        }));
        return (
            <div className="carrouselSlider">
                {/* <div className="sliderWrapper"
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.60s'
                    }}>
                    {
                        this.state.images.map((image, i) => (
                            <Slide key={i} image={image} />
                        ))
                    }
                </div>
                <LeftArrow goToPrevSlide={this.goToPrevSlide} />
                <RightArrow goToNextSlide={this.goToNextSlide} /> */}
                <UncontrolledCarousel items={items}/>
            </div>
        );
    }
}

export default Slider;