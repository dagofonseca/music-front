import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Sidebar from './components/sidebar';
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Artist from "./components/Artist";
import Album from "./components/Album";
import Song from "./components/Song";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="wrapper">
        <Sidebar />
        <Route path='/' exact component={Home} />
        <Route path='/artists' component={Artist} />
        <Route path='/albums' component={Album} />
        <Route path='/songs' component={Song} />
      </div>
    </div>
  );
}

export default App;
