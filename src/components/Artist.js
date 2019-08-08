import React, { Component } from 'react';
import ArtistCard from "./ArtistCard";
import "./styles/artist.css";
//import axios from 'axios';

const fakeData = [
    {
        Id: 1,
        Name: "Vicente Fernandez"
    },
    {
        Id: 2,
        Name: "Lola Beltrán"
    },
    {
        Id: 3,
        Name: "Jose Alfredo Jimenez"
    },
    {
        Id: 4,
        Name: "Ana Gabriel"
    },
    {
        Id: 5,
        Name: "Chavela Vargas"
    }
]

class Artist extends Component {
    constructor() {
        super();
        this.state = {
            artistList: fakeData
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
            <div id="artistComponent">
                {this.state.artistList && this.state.artistList.map(item =>
                    <ArtistCard key={item.Id} artist={item}/>
                )}
            </div>
        );
    }
}

export default Artist;