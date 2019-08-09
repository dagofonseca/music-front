import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <button className="btn btn-dark" type="button" data-toggle="collapse" data-target="#sidebar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <Link className="navbar-brand" to="/">Muxsis</Link>
        </nav>
    );
}

export default Navbar;