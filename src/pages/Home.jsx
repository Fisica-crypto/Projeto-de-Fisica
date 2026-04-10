import React, { useState } from "react";
import "../styles/Home.css";
import { calcularAlcance, calcularAltura, calcularTempo } from "../utils/mov";
import Animation from "../components/Animation";

export default function Home(){

    const [velocidade, setVelocidade] = useState("");
    const [angulo, setAngulo] = useState("");
    const [gravidade, setGravidade] = useState(9.8);

    const [tempo, setTempo] = useState(null);
    const [alcance, setAlcance] = useState(null);
    const [altura, setAltura] = useState(null);

    const [restart, setRestart] = useState(false);

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
        
        setRestart(prev => !prev);
      }

    return(
        <div className="corpo">

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
                    <p className="text">Valor do ângulo: </p>
                      <input
                          type="number"
                          placeholder="Ângulo (graus)"
                          value={angulo}
                          onChange={(e)=>setAngulo(e.target.value)}
                          className="insert"
                          />
                  </div>
                  <div className="input">
                      <p className="text">Valor da gravidade(aceleração): </p>
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

            {tempo && (
              <div id="container-results">
                <div className="results">
                    <div className="left">
                      <h2>Resultados</h2>
                    
                    </div>
                      <p>Tempo de voo: {tempo} s</p>
                    <div className="left">
                      <p>Alcance: {alcance} m</p>
                    </div>
                    <div className="left">
                      <p>Altura máxima: {altura} m</p>
                    </div>
                    <div className="left">
                      <p>Tempo até altura máxima: {(tempo/2).toFixed(2)} s</p>

                    </div>
                </div>
                  <div id="right">
                    <Animation
                    velocidade={Number(velocidade)}
                    angulo={Number(angulo)}
                    gravidade={Number(gravidade)}
                    restart={restart}
                    />
                  </div>
                </div>
            )}

            </div>
    );
  }