import React from "react";
import "../styles/Sobre.css"

export default function Sobre() {
    return(
        <div className="sobre-container">
            <div className="meio">
            <h1>Seja Bem Vindo</h1>
            <p>Aqui você vai conhecer um pouco sobre nosso projeto</p>
            </div>

            <div className="content">
            <h2>Quem somos nós?</h2>
            <p>Somos alunos do 3° ano do ensino médio do curso de informática, do IFMA - Campus Timon.</p>

            <h2>Qual é o objetivo desse projeto?</h2>
            <p>O ProjetilX (nome dado pelos alunos) é um projeto sobre lançamento obliquo para o doutorado do professor Kennedy. Mas o principal objetivo é facilitar a aprendizagem, com testes e animações </p>

            <h3>Alunos:</h3>
            <ul>
                <li>Alexandre Antunes dos Santos</li>
               <li>Arthur Lopes Conceição </li>
               <li>Arthur Luigi Costa Barros</li>
               <li>Bruno Soares Santos </li>
               <li>Deyvid Gabriel Soares Santos</li>
               <li>Guilherme Soares Silva</li>
               <li>Gabriel Gomes Freitas</li>
               <li>Isaac Samuel da Silva Guerdes</li>
               <li>João Victor Oliveira Silva</li>
               <li>Lourenço Silva Aguiar</li>
               <li>Rihanna Byanca Gomes Lima Farias </li>
               <li>Victor Gabriel De Sousa Dos Santos</li>
               <li>João Manoel de Sousa Alves</li>
            </ul>

            <h3>Professores:</h3>
            <ul>
                <li>Mestre Roberto Kennedy Cardoso</li>
                <li>Doutor Francisco Cristiano da Silva Macêdo</li>
            </ul>
            </div>
        </div>
    )
}