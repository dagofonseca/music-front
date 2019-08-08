import React from 'react';
import "./styles/sidebar.css";

function Sidebar() {
    return (
        <nav id="sidebar" className="bg-dark">
            <div className="sidebar-header">
                <h3>Menú</h3>
            </div>

            <ul className="list-group">
                <p>Elige una opción</p>
                <li className="list-group-item">Artista</li>
                <li className="list-group-item">Album</li>
                <li className="list-group-item">Canción</li>
            </ul>
        </nav>
    );
}

export default Sidebar;