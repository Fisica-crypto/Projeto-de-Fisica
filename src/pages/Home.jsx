import React, { useState } from "react";
import "../styles/Home.css";
import { calcularAlcance, calcularAltura, calcularTempo } from "../utils/mov";

export default function Home(){

    const [velocidade, setVelocidade] = useState("");
    const [angulo, setAngulo] = useState("");
    const [gravidade, setGravidade] = useState(9.8);

    const [tempo, setTempo] = useState(null);
    const [alcance, setAlcance] = useState(null);
    const [altura, setAltura] = useState(null);

    const [erro, setErro] = useState("");

    function calcular(){

        setErro("");

        if(velocidade === "" || angulo === ""){
            setErro("Preencha velocidade e ângulo");
            return;
        }

        const v = Number(velocidade);
        const a = Number(angulo);
        const g = Number(gravidade);

        if(a <= 0 || a >= 90){
            setErro("Ângulo deve estar entre 0 e 90");
            return;
        }

        const t = calcularTempo(v, a);
        const al = calcularAlcance(v, a);
        const h = calcularAltura(v, a, g);

        setTempo(t.toFixed(2));
        setAlcance(al.toFixed(2));
        setAltura(h.toFixed(2));
    }

    return(
        <div className="Section">

            <h1>Simulador de Lançamento Oblíquo</h1>

            <div className="inputs">

                <input
                    type="number"
                    placeholder="Velocidade (m/s)"
                    value={velocidade}
                    onChange={(e)=>setVelocidade(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Ângulo (graus)"
                    value={angulo}
                    onChange={(e)=>setAngulo(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Gravidade (9.8 padrão)"
                    value={gravidade}
                    onChange={(e)=>setGravidade(e.target.value)}
                />

                <button onClick={calcular}>
                    Calcular
                </button>

            </div>

            {erro && <p className="erro">{erro}</p>}

            {tempo && (
                <div className="resultados">

                    <h2>Resultados</h2>

                    <p>Tempo de voo: {tempo} s</p>
                    <p>Alcance: {alcance} m</p>
                    <p>Altura máxima: {altura} m</p>
                    <p>Tempo até altura máxima: {(tempo/2).toFixed(2)} s</p>

                </div>
            )}

        </div>
    );
}