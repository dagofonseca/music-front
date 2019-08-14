import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Sidebar from './components/sidebar';
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Artist from "./components/Artist";
import Album from "./components/Album";
import Song from "./components/Song";
import CreateManager from "./components/CreateManager";

function App() {
  return (
    <div className="App">
      <Route path='/' exact component={Home} />
      {/* <div className="wrapper">
        <Navbar />
        <Sidebar />
        <Route path='/artists' component={Artist} />
        <Route path='/albums' component={Album} />
        <Route path='/songs' component={Song} />
        <Route path='/:rol/create' component={CreateManager} />
      </div> */}
    </div>
  );
}

export default App;
