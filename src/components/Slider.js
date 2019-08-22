import React, { Component } from "react";
import "./styles/slider.css";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    Container,
    Row,
    Col,
    Button
} from "reactstrap";
import img1 from "../images/story1.jpg";
import img2 from "../images/story2.jpg";
import img3 from "../images/story3.jpg";

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                {
                    src: img1,
                    caption: "descripción de artistas"
                },
                {
                    src: img2,
                    caption: "descripción de álbums"
                },
                {
                    src: img3,
                    caption: "descripción de canciones"
                }],
            activeIndex: 0
        }
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.carouselText = this.carouselText.bind(this);
        this.registerButton = this.registerButton.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.state.images.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.state.images.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }
    carouselText(index) {
        if (index === 0) {
            return (
                <Col xs={{ size: 4, offset: 3 }} md={{ size: 3, offset: 1 }}>
                    <div className="carouselText" style={{ color: "black" }}>
                        <h2>Artistas</h2>
                        <p>Los mejores artistas independientes reunidos en un solo lugar.</p>
                    </div>
                </Col>
            );
        }
        else if (index === 1) {
            return (
                <Col xs={{ size: 4, offset: 3 }} md={{ size: 3, offset: 5 }}>

                    <div className="carouselText">
                        <h2>Álbums</h2>
                        <p>Los mejores álbumes reunidos en un solo lugar.</p>
                    </div>
                </Col>
            );
        }
        else {
            return (
                <Col xs={{ size: 4, offset: 3 }} md={{ size: 3, offset: 8 }}>
                    <div className="carouselText">
                        <h2>Canciones</h2>
                        <p>Las mejores canciones reunidas en un solo lugar.</p>
                        <Button className="blurButton">
                            <a href="/home" >
                                Registrarse
                        </a>
                        </Button>
                    </div>                    
                </Col>

            );
        }
    }
    registerButton(index) {
        if (index === 2) {
            return (
              <p>hola</p>  
            );
        }
    }
    render() {
        const { activeIndex } = this.state;
        const items = this.state.images.map((image, i) => {
            return (
                <CarouselItem
                    key={i}
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                >
                    <img className="w-100" src={image.src} alt={image.caption} />

                </CarouselItem>
            );
        });
        return (
            <Container fluid className="carrouselSlider">
                <Row>
                    {this.carouselText(activeIndex)}
                    {/* {this.registerButton(activeIndex)} */}
                    <Carousel
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous}
                        autoPlay={false}
                    >
                        {items}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                    </Carousel>
                </Row>
            </Container>
        );
    }
}

export default Slider;