import { Link } from "react-router-dom";
import X from '../assets/projetilx.png';
import '../styles/Header.css';

export default function Header() {
    return (
        <header className="header-container">
            <div className="header-content">

                {/* CENTRO - Logo + Título */}
                <div className="header-center">
                    <img 
                        src={X} 
                        alt="Projétil X" 
                        className="header-logo"
                    />
                    <h1>Lançamento Oblíquo</h1>
                </div>

                {/* DIREITA - Links */}
                <nav className="navbar-box">
                    <ul className="navbar-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Altura">Altura</Link></li>
                        <li><Link to="/Alcance">Alcance</Link></li>
                        <li><Link to="/Tempo">Tempo</Link></li>
                        <li><Link to="/Exemplos">Como usar</Link></li>
                    </ul>
                </nav>

            </div>
        </header>
    );
}