import React, { Component } from 'react';
import SongCard from "./SongCard";
import "./styles/common.css";
import axios from 'axios';

// const fakeData = [
//     {
//         Id: 1,
//         Title: "canción 1",
//         Released: "2000",
//         Genre: "Ranchera"
//     },
//     {
//         Id: 2,
//         Title: "canción 2",
//         Released: "2001",
//         Genre: "Ranchera"
//     },
//     {
//         Id: 3,
//         Title: "canción 3",
//         Released: "2000",
//         Genre: "Ranchera"
//     },
//     {
//         Id: 4,
//         Title: "canción 4",
//         Released: "2000",
//         Genre: "Ranchera"
//     },
//     {
//         Id: 5,
//         Title: "canción 5",
//         Released: "2000",
//         Genre: "Ranchera"
//     },
//     {
//         Id: 6,
//         Title: "canción 6",
//         Released: "2000",
//         Genre: "Ranchera"
//     },
//     {
//         Id: 7,
//         Title: "canción 7",
//         Released: "2000",
//         Genre: "Ranchera"
//     },
//     {
//         Id: 8,
//         Title: "canción 8",
//         Released: "2000",
//         Genre: "Ranchera"
//     },
//     {
//         Id: 9,
//         Title: "canción 9",
//         Released: "2000",
//         Genre: "Ranchera"
//     }
// ]

class Song extends Component {
    constructor() {
        super();
        this.state = {
            songList: null,
            error: false
        }
        this.fetchArtist = this.fetchArtist.bind(this);
    }
    fetchArtist() {
        axios(`${process.env.REACT_APP_API_URL}/song`)
            .then(result => {
                this.setState({
                    songList: result.data.Data,
                    error: false
                })
                console.log(result.data.Data);
            })
            .catch(error => {
                console.error(error);
                this.setState({ error: true })
            })
    }
    componentDidMount() {
        this.fetchArtist();
    }
    render() {

        return (
            <div>
                <h2>Canciones</h2>
                <div id="component">
                    {this.state.songList && this.state.songList.map(item =>
                        <SongCard key={item.Id} song={item} />
                    )}
                    {
                        this.state.error && <h4>Algo no salió como esperabamos. Dirigete al Inicio.</h4>
                    }
                </div>
            </div>
        );
    }
}

export default Song;