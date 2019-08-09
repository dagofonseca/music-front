import React, { Component } from 'react';
import AlbumCard from "./AlbumCard";
import "./styles/common.css"
import axios from 'axios';

// const fakeData = [
//     {
//         Id: "1",
//         Name: "Entre el amor y yo",
//         Released: "1998"
//     },
//     {
//         Id: "2",
//         Name: "qué de raro tiene",
//         Released: "1992"
//     },
//     {
//         Id: "3",
//         Name: "payaso",
//         Released: 1964
//     },
//     {
//         Id: "4",
//         Name: "La cigarra",
//         Released: 2000
//     },
//     {
//         Id: "5",
//         Name: "20 aniversario",
//         Released: "2001"
//     },
//     {
//         Id: "6",
//         Name: "Mariachi",
//         Released: "2010"
//     }
// ]

class Album extends Component {
    constructor() {
        super();
        this.state = {
            albumList: null,
            error: false
        }
        this.fetchArtist = this.fetchArtist.bind(this);
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
        this.fetchArtist();
    }
    render() {

        return (
            <div>
                <h2>Álbumes</h2>
                <div id="component">
                    {this.state.albumList && this.state.albumList.map(item =>
                        <AlbumCard key={item.Id} album={item} />
                    )}
                    {
                        this.state.error && <h4>Algo no salió como esperabamos. Dirigete al Inicio.</h4>
                    }
                </div>
            </div>
        );
    }
}

export default Album;