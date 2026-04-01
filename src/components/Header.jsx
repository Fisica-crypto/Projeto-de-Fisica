import React from "react";
import {Link} from "react-router-dom";
import X from '../assets/projetilx.png'
import '../styles/Header.css'

export default function Header() {
    return (
        <header className="header-container">
            <div className="header-content">

            <div className="header-left" >
                <img src={X} alt="LOGO" className="header-logo"/>
                <h1>Lançamento Obliquo</h1>
            </div>

            <nav className="navbar-box">
                <ul className="navbar-links">
                    <li>
                        <Link to ="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Altura">Altura</Link>
                    </li>
                    <li>
                        <Link to="/Alcance">Alcance</Link>
                    </li>
                    <li>
                        <Link to="/Tempo">Tempo</Link>
                    </li>
                </ul>
            </nav>

            </div>
        </header>
    )
}