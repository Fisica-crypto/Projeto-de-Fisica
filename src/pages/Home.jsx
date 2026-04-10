import React, { useState } from "react";
import "../styles/Home.css";
import { calcularAlcance, calcularAltura, calcularTempo } from "../utils/mov";
import Animation from "../components/Animation";
import Resultado from "../components/resultado";

export default function Home(){

    const [velocidade, setVelocidade] = useState("");
    const [angulo, setAngulo] = useState("");
    const [gravidade, setGravidade] = useState(9.8);

    const [tempo, setTempo] = useState(null);
    const [alcance, setAlcance] = useState(null);
    const [altura, setAltura] = useState(null);

    const [restart, setRestart] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const [erro, setErro] = useState("");

    function calcular(){

        setErro("");
        setShowModal(false);

        if(velocidade === "" || angulo === ""){
            setErro("Preencha velocidade e ângulo");
            return;
        }

        const v = Number(velocidade);
        const a = Number(angulo);
        const g = Number(gravidade);

        if(a <= 0 || a >= 91){
            setErro("Ângulo deve estar entre 0 e 90");
            return;
        }

        const t = calcularTempo(v, a, g);
        const al = calcularAlcance(v, a, g);
        const h = calcularAltura(v, a, g);

        setTempo(t.toFixed(2));
        setAlcance(al.toFixed(2));
        setAltura(h.toFixed(2));

        // reinicia animação
        setRestart(prev => !prev);
    }

    function abrirModal(){
        setShowModal(true);
    }

    return(
        <div className="corpo">

            {/* INPUTS */}
            <div id="Request">

                <div className="input">
                    <p>Valor da Velocidade, em metros:</p>
                    <input
                        type="number"
                        placeholder="Velocidade (m/s)"
                        value={velocidade}
                        onChange={(e)=>setVelocidade(e.target.value)}
                        className="insert"
                    />
                </div>

                <div className="input">
                    <p>Valor do ângulo:</p>
                    <input
                        type="number"
                        placeholder="Ângulo (graus)"
                        value={angulo}
                        onChange={(e)=>setAngulo(e.target.value)}
                        className="insert"
                    />
                </div>

                <div className="input">
                    <p>Valor da gravidade:</p>
                    <input
                        type="number"
                        placeholder="Gravidade (9.8 padrão)"
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

            {/* CONTAINER ANIMAÇÃO + RESULTADOS */}
            <div id="container-results">

                {/* ANIMAÇÃO SEMPRE VISÍVEL */}
                <div id="right">
                    <Animation
                        velocidade={Number(velocidade)}
                        angulo={Number(angulo)}
                        gravidade={Number(gravidade)}
                        restart={restart}
                        onFinish={abrirModal}
                    />
                </div>
            </div>

            {/* MODAL */}
            {showModal && (
                <Resultado
                    tempo={tempo}
                    alcance={alcance}
                    altura={altura}
                    onClose={() => setShowModal(false)}
                />
            )}

        </div>
    );
}