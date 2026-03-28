import React from "react";
import '../styles/Footer.css'
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa";

export default function Footer(){
    return(
        <>
        <div className="Footer">
            <div className="titulo_icons">
                <h1>Projétil X</h1>
            </div>
            <div className="referencias">

                <div className="refs">
                <h3>Participantes</h3>
                <ul>
                    <li>Alexandre Antunes dos Santos</li>
                    <li>Arthur Lopes Conceição </li>
                    <li>Arthru Luigi Costa Barros</li>
                    <li>Bruno Soares Santos </li>
                    <li>Deyvid Gabriel Soares Santos</li>
                    <li>Guilherme Soares Silva</li>
                </ul>
                </div>
                <div className="refs">
                    <br /> <br />
                <ul>
                    <li>Gabriel Gomes Freitas</li>
                    <li>Isaac Samuel da Silva Guerdes</li>
                    <li>João Victor Oliveira Silva</li>
                    <li>Lourenço Silva Aguiar</li>
                    <li>Rihanna Byanca Gomes Lima Farias </li>
                    <li>Victor Gabriel De Sousa Dos Santos</li>
                </ul>
                </div>
                <div className="refs">
                <h3>Coordenador do Projeto</h3>
                <ul>
                    <li>Mestre Roberto Kennedy Cardoso</li>
                </ul>
                </div>
                <div className="refs">
                <h3>Meios de contato</h3>
                <ul>
                    <li><FaEnvelope/>  Email: fisicaprojeto98@gmail.com</li>
                     <li><FaPhone/>  Telefone: 123456789-01</li>
                </ul>
                </div>
            </div>
        </div>
        </>
    )
}