import React, { useState } from "react";
import "../components/Content.css";
import { calcularTempo } from "./mov";

export default function Tempo(){

    const [velocidade, setVelocidade] = useState(20);
    const [angulo, setAngulo] = useState("");
    const [tempo, setTempo] = useState(null);

    function calcular(){

        if(angulo === "") return;

        const v = Number(velocidade);
        const a = Number(angulo);

        const resultado = calcularTempo(v, a);

        setTempo(resultado.toFixed(2));
    }

    return(

        <div className="Conteudo">

            <h1>Tempo de voo do projétil</h1>

            <select
            value={velocidade}
            onChange={(e)=>setVelocidade(e.target.value)}
            >

                <option value="20">20 m/s</option>
                <option value="30">30 m/s</option>
                <option value="40">40 m/s</option>

            </select>

            <input
            type="number"
            placeholder="Digite o ângulo"
            value={angulo}
            onChange={(e)=>setAngulo(e.target.value)}
            />

            <button onClick={calcular}>
                Calcular tempo
            </button>

            {tempo !== null &&(

                <div>

                    <h3>Resultado</h3>

                    <p>Tempo no ar: {tempo} segundos</p>

                </div>

            )}

        </div>

    );
}