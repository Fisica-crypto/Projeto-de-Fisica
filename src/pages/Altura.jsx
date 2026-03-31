import { React, useState } from "react";
import { calcularAltura } from "../utils/mov.js";
import "../styles/Altura.css";

export default function Altura() {
       const [velocidade, setVelocidade] = useState("") ;
       const [angulo, setAngulo ] = useState("");
       const [altura, setAltura] = useState(null);
       
       function LancarObj(){
        if (angulo === '') return;
        const resultado = calcularAltura(
            Number(velocidade),
            Number(angulo)
        );
        setAltura(resultado.toFixed(2))
       }

       return(
        <div className="container">
            <h2>Altura Maxima do Lançamento oblíquo</h2>

            <input 
            type="number" 
            placeholder="velocidade inicial (m/s)"
            value={velocidade}
            onChange={(e) => setVelocidade(e.target.value)}
            />

            <input 
            type="number"
            placeholder="Ângulo (graus)"
            value={angulo}
            onChange={(e) => setAngulo(e.target.value)}
            />

            <button onClick={LancarObj}>Calcular</button>

            {altura !== null && (
                <p>Altura Máxima: {altura}m </p>
            )}
        </div>
       )
}