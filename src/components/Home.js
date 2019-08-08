import React from 'react';
import Artist from "./Artist";
import "./styles/home.css";

function Home() {
  return (
    <div className="bodyHome">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

        <button className="btn btn-dark" type="button" data-toggle="collapse" data-target="#sidebar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand" href="#">Muxsis</a>
      </nav>      
      <Artist />
    </div>
  );
}

export default Home;