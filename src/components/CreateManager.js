import React, { Component } from "react";
import axios from 'axios';

class CreateManager extends Component {
    constructor() {
        super();
        this.state = {
            rol: null,
            message: null
        }        
    }
    componentDidMount() {
        this.setState({ rol: this.props.match.params.rol })
    }

    createObject(type , object) { 
        console.log(object);
        
        axios.post(`${process.env.REACT_APP_API_URL}/${type}`, object )
            .then( response => console.log( response.data.Message ))
            .catch( error => {
                console.log("Algo salió mal")
                console.error(error);
            })
    }

    render() {
        return (
            <div>
                {this.state.rol === "artist" && <ArtistForm create={this.createObject} />}
                {this.state.rol === "album" && <AlbumForm create={this.createObject} />}
                {this.state.rol === "song" && <SongForm create={this.createObject} />}
            </div>
        );
    }
}

class ArtistForm extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            Name: null
        }
    }
    
    handleSubmit = event => {
        event.preventDefault();
        const object = {
            Id: 0 ,
            Name: this.state.Name
        } ;
        this.props.create("artist", object);
    }

    handleNameChange = (event)  => {
        this.setState({
            Name: event.target.value
        });            
    }
    render(){
        return (
            <div id="artistFrom">
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Crea Tu Artista</legend>
                        <label htmlFor="name">Nombre del Artista:</label>
                        <input type="text" name="name" onChange={this.handleNameChange}/>
                        <button type="submit">Guardar</button>
                    </fieldset>
                </form>
            </div>
        );
    } 
}

class AlbumForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            Name: null,
            Released: null
        }
    }
    
    handleSubmit = event => {
        event.preventDefault();
        const object = {
            Id: 0,
            Name: this.state.Name,
            Released: this.state.Released
        }
        this.props.create("album", object);
    }

    handleNameChange = (event)  => {
        this.setState({ Name: event.target.value });            
    }

    handleReleasedChange = (event)  => {
        this.setState({ Released: event.target.value });            
    }

    render(){
        return (
            <div id="albumForm">
                <form onSubmit={this.handleSubmit}>
                    <fieldset >
                        <legend>Crea Tu Album</legend>
                        <label htmlFor="name">Nombre del Album:</label>
                        <input type="text" name="name" onChange={this.handleNameChange}/>
                        <label htmlFor="released">Fecha de lanzamiento:</label>
                        <input type="number" name="released" onChange={this.handleReleasedChange}/>
                        <button type="submit">Guardar</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

class SongForm extends Component {
    constructor() {
        super();
        this.state = {
            artists: null,
            albums: null,
            Title: null,
            Genre: null,
            Released: null,
            ArtistId: null,
            AlbumId: null            
        }
        this.fetchArtists = this.fetchArtists.bind(this);
        this.fetchAlbums = this.fetchAlbums.bind(this);
    }

    componentDidMount() {
        this.fetchArtists();
        this.fetchAlbums();
    }

    fetchArtists() {
        axios(`${process.env.REACT_APP_API_URL}/artist`)
            .then(result => this.setState({ artists: result.data.Data }))
            .catch(error => console.log(error));
    }
    fetchAlbums() {
        axios(`${process.env.REACT_APP_API_URL}/album`)
            .then(result => this.setState({ albums: result.data.Data }))
            .catch(error => console.log(error));
    }

    handleSubmit = event => {
        event.preventDefault();
        const object = {
            Id: 0,
            Name: this.state.Name,
            Released: this.state.Released,
            Genre: this.state.Genre,
            AlbumId: this.state.AlbumId,
            ArtistId: this.state.ArtistId
        }
        this.props.create("song", object);
    }

    handleTitleChange = (event)  => {
        this.setState({ Title: event.target.value });            
    }
    handleGenreChange = (event)  => {
        this.setState({ Genre: event.target.value });            
    }
    handleReleasedChange = (event)  => {
        this.setState({ Released: event.target.value });            
    }
    handleArtistIdChange = (event)  => {
        this.setState({ ArtistId: event.target.value });              
    }
    handleAlbumIdChange = (event)  => {
        this.setState({ AlbumId: event.target.value});
    }
    render() {

        return (
            <div id="songForm">
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Crea Tu Canción</legend>
                        <label htmlFor="title">Título De La Canción:</label>
                        <input type="text" name="title" onChange={this.handleTitleChange}/>
                        <label htmlFor="released">Fecha de lanzamiento:</label>
                        <input type="number" name="released" onChange={this.handleReleasedChange}/>
                        <label htmlFor="title">Género Musical:</label>
                        <input type="text" name="genre" onChange={this.handleGenreChange}/>

                        <label>
                            Artista:
                            <select value={this.state.ArtisId} onChange={this.handleArtistIdChange}>
                                {this.state.artists && this.state.artists.map(item =>
                                    <option key={item.Id} value={item.Id}>{item.Name}</option>
                                )}
                            </select>
                        </label>

                        <label>
                            Album:
                            <select value={this.state.AlbumId} onChange={this.handleAlbumIdChange}>
                                {this.state.albums && this.state.albums.map(item =>
                                    <option key={item.Id} value={item.Id} > {item.Name} </option>
                                )}
                            </select>
                        </label>                        

                        <button type="submit">Guardar</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}
export default CreateManager;