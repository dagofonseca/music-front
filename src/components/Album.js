import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import AlbumCard from "./AlbumCard";
import "./styles/common.css"
import axios from 'axios';
import imgTop50 from "../images/top50.png";
import imgTrending from "../images/trending.png";
import imgViral from "../images/viral.png";

class Album extends Component {
    constructor() {
        super();
        this.state = {
            albumList: null,
            error: false
        }
        this.fetchAlbum = this.fetchAlbum.bind(this);
        this.albumsCard = this.albumsCard.bind(this);
    }
    fetchAlbum() {
        axios(`${process.env.REACT_APP_API_URL}/album`)
            .then(result => {
                this.setState({
                    albumList: result.data.Data,
                    error: false
                })
            })
            .catch(error => {
                console.error(error);
                this.setState({ error: true })
            })
    }

    componentDidMount() {
        this.fetchAlbum();
        //this.setState({ albumList: fakeData });
    }

    albumsCard() {
        const { albumList } = this.state;
        if (albumList === null || albumList.length === 0) {
            return <div>No hay resultados</div>
        }
        const response = albumList.map((album, key) => {
            return (
                <Col lg="5" xl="4">
                    <AlbumCard key={key} album={album} />
                </Col>
            );
        });
        return response;
    }

    render() {

        return (
            <Container fluid className="albumContainer" >
                <Row>
                    <h2 className="albumSectionTitle">Your Albums</h2>
                </Row>
                <Row className="recommended">
                    <Col md="auto" >
                        <div className="recommendedItem">
                            <img src={imgTop50} alt="top 50" />
                            <div className="recommendedImgText">
                                <h2>Top 50</h2>
                                <p>The best songs</p>
                            </div>
                        </div>
                    </Col>
                    <Col md="auto">
                        <div className="recommendedItem">
                            <img src={imgViral} alt="viral" />
                            <div className="recommendedImgText">
                                <h2>Viral</h2>
                                <p>The most listened</p>
                            </div>
                        </div>
                    </Col>
                    <Col md="auto">
                        <div className="recommendedItem">
                            <img src={imgTrending} alt="trending" />
                            <div className="recommendedImgText">
                                <h2>Trending</h2>
                                <p>The most new</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <p className="yourAlbums">
                        Albums created by you
                    </p>
                </Row>
                <Container>
                    <Row>
                        {this.albumsCard()}
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default Album;