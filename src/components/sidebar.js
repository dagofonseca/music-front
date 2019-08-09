import React from 'react';
import { NavLink } from "react-router-dom";
import "./styles/sidebar.css";

function Sidebar() {
    const activeStyleClass = { background: "#d65a31" };
    return (
        <nav id="sidebar" className="bg-dark">
            <ul className="list-group">
                <p>Elige una opción</p>
                <li className="list-group-item">
                    <a className="dropdown-toggle nav-link" href="#artistSubmenu"
                        alt="artistas"
                        data-toggle="collapse"
                        aria-expanded="false">
                        Artista
                    </a>
                    <ul className="collapse list-unstyled" id="artistSubmenu">
                        <li>
                            <NavLink className="nav-link" exact to="/"
                                activeStyle={activeStyleClass}
                                alt="vínculo crear artistas">
                                Crear
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/artists"
                                activeStyle={activeStyleClass}
                                alt="vínculo artistas">
                                Ver artistas
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className="list-group-item">
                    <a className="dropdown-toggle nav-link" href="#albumSubmenu"
                        alt="álbumes"
                        data-toggle="collapse"
                        aria-expanded="false">
                        Álbum
                    </a>
                    <ul className="collapse list-unstyled" id="albumSubmenu">
                        <li>
                            <NavLink className="nav-link" exact to="/"
                                activeStyle={activeStyleClass}
                                alt="vínculo crear álbumes">
                                Crear
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/albums"
                                activeStyle={activeStyleClass}
                                alt="vínculo álbumes">
                                Ver álbumes
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className="list-group-item">
                    <a className="dropdown-toggle nav-link" href="#songSubmenu"
                        alt="canciones"
                        data-toggle="collapse"
                        aria-expanded="false">
                        Canción
                    </a>
                    <ul className="collapse list-unstyled" id="songSubmenu">
                        <li>
                            <NavLink className="nav-link" exact to="/"
                                activeStyle={activeStyleClass}
                                alt="vínculo crear canciones">
                                Crear
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/songs"
                                activeStyle={activeStyleClass}
                                alt="vínculo canciones">
                                Ver canciones
                            </NavLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;