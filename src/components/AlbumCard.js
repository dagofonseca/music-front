import React from 'react';
import imagePlaceholder from "../images/image-placeholder.jpg";


function AlbumCard(props) {
    return (
        <div className="card artist-card">
            <img className="card-img-top" src={imagePlaceholder} alt="Artist" />
            <div className="card-body">
                <h5 className="card-title">{props.album.Name}</h5>
                <p>{props.album.Released}</p>
                <div className="linkContainer">
                    <a href="#" className="badge badge-dark">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}

export default AlbumCard;