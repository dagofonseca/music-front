import React from 'react';
import {
    Card, CardImg, CardBody,
    Row, Col
} from 'reactstrap';
import imgPlaceholder from "../images/album-placeholder.png";
import "./styles/albumCard.css";


function AlbumCard(props) {
    return (
        <div>
            <Card>
                <Row noGutters>
                    <Col md="4">
                        <CardImg top src={imgPlaceholder}
                            alt="album cover"
                        />
                    </Col>
                    <Col md="8">
                        <CardBody>
                            <div className="property">
                                <p style={{ color: "orange" }}>Artist:</p>
                                <p className="propertyValue">el artista</p>
                            </div>
                            <div className="property">
                                <p style={{ color: "orange" }}>Album:</p>
                                <p className="propertyValue">{props.album.Name}</p>
                            </div>
                            <div className="property">
                                <p style={{ color: "orange" }}>Released:</p>
                                <p className="propertyValue">{props.album.Released}</p>
                            </div>
                            <div className="property">
                                <p style={{ color: "orange" }}>Genre:</p>
                                <p className="propertyValue">Contemporaneo</p>
                            </div>
                        </CardBody>
                    </Col>
                </Row>
            </Card>
        </div>
    );
}

export default AlbumCard;