import React from 'react';
import imagePlaceholder from "../images/image-placeholder.jpg";
import "./styles/artistCard.css";

function ArtistCard(props) {
    return (
        <div className="card artist-card">
            <img className="card-img-top" src={imagePlaceholder} alt="Artist" />
            <div className="card-body">
                <h5 className="card-title">{props.artist.Name}</h5>
                <div className="linkContainer">
                    <a href="#" className="badge badge-dark">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}

export default ArtistCard;