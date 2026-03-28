import { React, useState } from "react";
import "../styles/Altura.css";

export default function Altura() {
       const [velocidade, setVelocidade] = useState("") ;
       const [angulo, setAngulo ] = useState("");
       const [altura, setAltura] = useState(null);

       const calcularAltura = () => {
        const v0 = parseFloat(velocidade);
        const ang = parseFloat(angulo);

        if (isNaN(v0) || isNaN(ang)) {
            alert("digite valores validos!")
            return;
        }
        
       
        if (ang <= 0 || ang >= 90) {
            alert("Ângulo deve estar entre 0° e 90° (não inclusivo)");
            return;
        }

        if ( v0 > 30 ) {
            alert("A velocidade inicial tem que ser menor que 31 m/s")
            return;
        }

        const g = 9.8;

        // converte graus para radianos
        const rad = (ang * Math.PI) / 180;

        // formula da altura maxima
        const h = (v0 ** 2 * Math.sin(rad) ** 2) / (2 * g);

        setAltura(h.toFixed(2));
       };

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

            <button onClick={calcularAltura}>Calcular</button>

            {altura !== null && (
                <p>Altura Máxima: {altura}m </p>
            )}
        </div>
       )
}