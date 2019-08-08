import React, { Component } from 'react';
import AlbumCard from "./AlbumCard";

//import axios from 'axios';

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
            albumList: fakeData
        }
        // this.fetchArtist = this.fetchArtist.bind(this);
    }
    // fetchArtist() {
    //     axios("https://localhost:44303/api/artist")
    //         .then(result => {
    //             this.setState({
    //                 artistList: result.data.Data
    //             })
    //             console.log(result.data.Data);
    //         }
    //         )
    // }
    // componentDidMount() {
    //     this.fetchArtist();
    // }
    render() {

        return (
            <div id="albumComponent">
                {this.state.albumList && this.state.albumList.map(item =>
                    <AlbumCard key={item.Id} album={item}/>
                )}
            </div>
        );
    }
}

export default Album;