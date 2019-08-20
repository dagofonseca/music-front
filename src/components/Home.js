import React from 'react';
import { Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Artist from "./Artist";
import Album from "./Album";
import Song from "./Song";
import CreateManager from "./CreateManager";

function Home() {
    return (
        <div className="wrapper">
            <Sidebar />         
            
            <Route path='/artists' component={Artist} />
            <Route path='/albums' component={Album} />
            <Route path='/songs' component={Song} />
            <Route path='/:rol/create' component={CreateManager} />
        </div>
    );
}

export default Home;