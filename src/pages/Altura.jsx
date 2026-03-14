import React from "react";
import "../components/Content.css"
import { useState } from "react";
export default function Altura() {
       const [velocidade, setVelocidade] = useState(20) ;
    return (
        <>
        <div className="Conteudo">
        <select onChange={(e) => setVelocidade(e.target.value)}>
                    <option value='20'>20m/s</option>
                    <option value="30">30m/s</option>
                    <option value="40m">40ms</option>
                </select><br />
        </div>
        </>
    )
}