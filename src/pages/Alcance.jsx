import React from "react";
import '../components/Content.css'
import { useState } from "react";
import { calcularAlcance } from "../utils/mov";

export default function Alcance() {
    const [velocidade, setVelocidade] = useState(20) ;
    const [angulo, setAngulo] = useState(0);
    const [alcance, setAlcance] = useState(null);

    function lancarObj(){
        if (angulo === '') return;

        const resultado = calcularAlcance(
            Number(velocidade),
            Number(angulo)
        );

        setAlcance(resultado.toFixed(2))
    }
    return (
        <>
            <div className="Conteudo">
                <h1>Primeiro teste do simulador, simboraaaa!!</h1>

                <select onChange={(e) => setVelocidade(e.target.value)}>
                    <option value='20'>20m/s</option>
                    <option value="30">30m/s</option>
                    <option value="40m">40ms</option>
                </select>

                <input
                type="number"
                placeholder="Digite o ângulo de lançamentoo."
                value={angulo}    
                onChange={(e) => setAngulo(e.target.value)}            
                />

                <button onClick={lancarObj}>lançar</button>

                {alcance !== null && (
                    <div>
                        <h3>Resultado</h3>
                        <p>Alcance: {alcance} metros</p>
                    </div>
                )}
            </div>
        </>
    )
}