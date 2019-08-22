import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import AlbumCard from "./AlbumCard";
import "./styles/common.css"
import axios from 'axios';
import imgTop50 from "../images/top50.png";
import imgTrending from "../images/trending.png";
import imgViral from "../images/viral.png";

const fakeData = [
    {
        Id: "1",
        Name: "Entre el amor y yo",
        Released: "1998"
    },
    {
        Id: "2",
        Name: "qué de raro tiene",
        Released: "1992"
    },
    {
        Id: "3",
        Name: "payaso",
        Released: 1964
    },
    {
        Id: "4",
        Name: "La cigarra",
        Released: 2000
    },
    {
        Id: "5",
        Name: "20 aniversario",
        Released: "2001"
    },
    {
        Id: "6",
        Name: "Mariachi",
        Released: "2010"
    }
]

class Album extends Component {
    constructor() {
        super();
        this.state = {
            albumList: null,
            error: false
        }
        this.fetchArtist = this.fetchArtist.bind(this);
        this.albumsCard = this.albumsCard.bind(this);
    }
    fetchArtist() {
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
        //this.fetchArtist();
        this.setState({ albumList: fakeData });
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
            <Container>
                <Row>
                    <Col>
                        <h2>your albums</h2>
                    </Col>
                </Row>
                <Row className="recommended">
                    <Col md="auto">
                        <img src={imgTop50} alt="top 50" />
                    </Col>
                    <Col md="auto">
                        <img src={imgViral} alt="viral" />
                    </Col>
                    <Col md="auto">
                        <img src={imgTrending} alt="trending" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Albums created by you</p>
                    </Col>
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