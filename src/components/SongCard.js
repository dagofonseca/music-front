import React from 'react';
import imagePlaceholder from "../images/image-placeholder.jpg";
import "./styles/songCard.css";

function SongCard(props) {
    return (
        <div className="card song-card">
            <img className="card-img-top" src={imagePlaceholder} alt="Song" />
            <div className="card-body">
                <h5 className="card-title">{props.song.Title}</h5>
                <p>Género: {props.song.Genre}</p>
                <div className="linkContainer">
                    <a href="#" className="badge badge-dark">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}

export default SongCard;