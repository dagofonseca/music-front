import React, { Component } from 'react';
import axios from 'axios';

const fakeData = [
    {
        id: 1,
        name: "Vicente Fernandez"
    },
    {
        id: 2,
        name: "Lola Beltrán"
    },
    {
        id: 3,
        name: "Jose Alfredo Jimenez"
    },
    {
        id: 4,
        name: "Ana Gabriel"
    }
]

class Artist extends Component {

    state = {
        artistList: null
    }


    componentDidMount() {
        axios("https://localhost:44303/api/artist")
            .then(result => {
                this.setState({ artistList: result.data.Data});
                console.log(result.data.Data);
            });
    }
    render() {

        return (
            <div>
                {this.state.artistList && this.state.artistList.map(item => 
                    <h3>{item.Name}</h3>
                )}
            </div>
        );
    }
}

export default Artist;