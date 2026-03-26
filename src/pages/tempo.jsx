import React, { useState } from "react";
import "../styles/Content.css";
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
                <div className="Corpo">
                    <label htmlFor="text">Digite a Velocidade do Corpo:</label> <br />
                    <select
                        value={velocidade}
                        onChange={(e)=>setVelocidade(e.target.value)}>
                        <option value="20">20 m/s</option>
                        <option value="30">30 m/s</option>
                        <option value="40">40 m/s</option>
                    </select> <br />

                    <label htmlFor="Angle">Digite o valor do ângulo em que é lançado:</label> <br />
                    <input
                    type="number"
                    placeholder="Digite o ângulo"
                    value={angulo}
                    onChange={(e)=>setAngulo(e.target.value)}
                    />

                </div>
                <button onClick={calcular}> <br />
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