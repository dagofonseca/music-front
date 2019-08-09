import React, { Component } from 'react';
import ArtistCard from "./ArtistCard";
import "./styles/common.css";
import axios from 'axios';


// const fakeData = [
//     {
//         Id: 1,
//         Name: "Vicente Fernandez"
//     },
//     {
//         Id: 2,
//         Name: "Lola Beltrán"
//     },
//     {
//         Id: 3,
//         Name: "Jose Alfredo Jimenez"
//     },
//     {
//         Id: 4,
//         Name: "Ana Gabriel"
//     },
//     {
//         Id: 5,
//         Name: "Chavela Vargas"
//     }
// ]

class Artist extends Component {
    constructor() {
        super();
        this.state = {
            artistList: null,
            error: false
        }
        this.fetchArtist = this.fetchArtist.bind(this);
    }
    fetchArtist() {
        axios(`${process.env.REACT_APP_API_URL}/artist`)
            .then(result => {
                this.setState({
                    artistList: result.data.Data,
                    error: false
                })                
            })
            .catch( error => {
                console.error(error);
                this.setState({error : true})
            })
    }
    componentDidMount() {
        this.fetchArtist();
    }
    render() {

        return (
            <div>
                <h2>Artistas</h2>
                <div id="component">
                    {this.state.artistList && this.state.artistList.map(item =>
                        <ArtistCard key={item.Id} artist={item} />
                    )}
                    {
                        this.state.error && <h4>Algo no salió como esperabamos. Dirigete al Inicio.</h4>
                    }
                </div>
            </div>
        );
    }
}

export default Artist;