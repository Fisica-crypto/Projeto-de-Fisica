import React, { useState } from "react";
import "../styles/Home.css";
import { calcularAlcance, calcularAltura, calcularTempo } from "../utils/mov";
import Animation from "../components/Animation";

export default function Simulador(){
    
    const [velocidade, setVelocidade] = useState("");
    const [angulo, setAngulo] = useState("");
    const [gravidade, setGravidade] = useState(9.8);
    
    const [tempo, setTempo] = useState('');
    const [alcance, setAlcance] = useState(null);
    const [altura, setAltura] = useState(null);
    
    const [restart, setRestart] = useState(false);
    const [erro, setErro] = useState("");
    
    const zeroGrav = Number(gravidade) === 0;

    function calcular(){
        
        setErro("");

        if(velocidade === "" || angulo === ""){
            setErro("Preencha velocidade e ângulo");
            return;
        }

        const v = Number(velocidade);
        const a = Number(angulo);
        const g = Number(gravidade);
        let t;
        
        if(tempo === "" || tempo === null) {
            t = calcularTempo(v, a, g);
        }else {
            t = Number(tempo)
        }

        if(isNaN(t) || t < 0) {
            setErro('Digita certo ai mano');
            return;
        }

        if(isNaN(v) || isNaN(a) || isNaN(g)){
            setErro("Digite apenas números válidos");
            return;
        }

        if(a <= 0 || a >= 91){
            setErro("Ângulo deve estar entre 0 e 90");
            return;
        }

        if(v <= 0 ){
            setErro("Velocidade e gravidade devem ser maiores que 0");  
            return;
        }


        const al = calcularAlcance(v, a, g, t);
        const h = calcularAltura(v, a, g, t);

        setTempo(t.toFixed(2));
        setAlcance(al.toFixed(2));
        setAltura(h.toFixed(2));

        setRestart(prev => !prev);
    }

    return(
        <div className="corpo">

            {/* INPUTS */}
            <div id="Request">

                <div className="input">
                    <p>Velocidade (m/s)</p>
                    <input
                        type="number"
                        value={velocidade}
                        onChange={(e)=>setVelocidade(e.target.value)}
                        className="insert"
                    />
                </div>

                <div className="input">
                    <p>Ângulo (graus)</p>
                    <input
                        type="number"
                        value={angulo}
                        onChange={(e)=>setAngulo(e.target.value)}
                        className="insert"
                    />
                </div>

                <div className="input">
                    <p>Gravidade (m/s²)</p>
                    <input
                        type="number"
                        value={gravidade}
                        onChange={(e)=>setGravidade(e.target.value)}
                        className="insert"
                    />
                </div>
                
                <button onClick={calcular} className="btn-enviar">
                    Calcular
                </button>

            </div>

            {erro && <p className="erro">{erro}</p>}

            {/* RESULTADOS + ANIMAÇÃO */}
            <div id="container-results">

                <div id="right">
                    <Animation
                        velocidade={Number(velocidade)}
                        angulo={Number(angulo)}
                        gravidade={Number(gravidade)}
                        tempo={Number(tempo)}
                        restart={restart}
                    />
                </div>

                {/* RESULTADOS FIXOS (SEM MODAL) */}
                {zeroGrav ? (
                    <div id="results-box">
                        <h2>Resultados</h2>
                        <p>⏱Tempo: Infinito(∞)</p>   
                        <p>📏Alcance: Infinito(∞)</p>
                        <p>📈Altura Máx: Infinito(∞)</p>
                    </div>
                ) : tempo && (
                    <div id="results-box">
                        <h2>Resultados</h2>
                        <p>⏱ Tempo: {tempo} s</p>
                        <p>📏 Alcance: {alcance} m</p>
                        <p>📈 Altura Máx: {altura} m</p>
                    </div>
                )}

            </div>

        </div>
    );
}