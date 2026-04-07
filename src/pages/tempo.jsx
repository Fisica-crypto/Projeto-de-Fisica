import React, { useState } from "react";
import { calcularTempo } from "../utils/mov";
import '../styles/tempo.css'

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

        <div className="body">
                <div className="Principal">
            <h1>Tempo de voo do projétil</h1>
                    <div className="card"> 
                    <label htmlFor="text" >Digite a Velocidade do Corpo:</label> <br />
                            <select
                                value={velocidade}
                                onChange={(e)=>setVelocidade(e.target.value)}>
                                <option value="20">20 m/s</option>
                                <option value="30">30 m/s</option> 
                                <option value="40">40 m/s</option>
                            </select> <br />
                    </div>
                    <div className="card">

                    <label htmlFor="Angle" >Digite o valor do ângulo em que é lançado:</label> <br />
                    <input
                    type="number"
                    placeholder="Digite o ângulo"
                    value={angulo}
                    onChange={(e)=>setAngulo(e.target.value)}
                    />
                        <button onClick={calcular} className="BotaoEnviar"> <br />
                            Calcular tempo
                        </button>
                    </div>

                {tempo !== null &&(
                    
                    <div className="result">
                        <h3>Resultado</h3>
                        <p>Tempo no ar: {tempo} segundos</p>
                    </div>
            )}
            </div>
        </div>

    ); 
}