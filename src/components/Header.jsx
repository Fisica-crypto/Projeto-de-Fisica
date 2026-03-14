import React from "react";
import {Link} from "react-router-dom";
import X from '../assets/projetilx.png'
import './Header.css'

export default function Header() {
    return (
        <header className="header-container">
            <div className="header-logo" >
                <img src={X} alt="LOGO" height='60px' width='60px'/>
            </div>

            <nav className="navbar-box">
                <ul className="navbar-links">
                    <li>
                        <Link to ="/">Tempo</Link>
                    </li>
                    <li>
                        <Link to="/Altura">Altura</Link>
                    </li>
                    <li>
                        <Link to="/Alcance">Alcance</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}