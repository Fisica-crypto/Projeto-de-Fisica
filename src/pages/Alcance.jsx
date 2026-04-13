import React, { useState } from "react";
import "../styles/alcance.css";
import { calcularAlcance } from "../utils/mov";

export default function Alcance() {
    const [velocidade, setVelocidade] = useState(20);
    const [angulo, setAngulo] = useState('');
    const [g, setG] = useState(9.8);

    const [alcance, setAlcance] = useState(null);
    const [erro, setErro] = useState('');

    function lancarObj() {
        setErro('');
        setAlcance(null);

        // Parte das validações, para evitar letras ou não números e espaços vazios
        if (velocidade === '' || angulo === '' || g === '') {
            setErro("Preencha todos os campos.");
            return;
        }

        if (isNaN(velocidade) || isNaN(angulo) || isNaN(g)) {
            setErro("Digite apenas números válidos.");
            return;
        }
        if (velocidade <= 0){
            setErro('A velocidade deve ser maior que zero.')
        } 

        if (g <= 0) {
            setErro("A gravidade deve ser maior que 0.");
            return;
        }

       //Recebe os valores e adicionas as casas decimais
        const resultado = calcularAlcance(
            Number(velocidade),
            Number(angulo),
            Number(g)
        );

        setAlcance(resultado.toFixed(2));
    }

    return (
        <div className="corpo">
            <div className="Conteudo">
                <h1>Alcance</h1>

                <label>Velocidade (m/s)</label>
                <input
                    type="number"
                    placeholder="Digite a velocidade (m/s)"
                    value={velocidade}
                    min={0}
                    onChange={(e) => setVelocidade(e.target.value)}
                />

                <label>Ângulo (graus)</label>
                <input
                    type="number"
                    placeholder="Digite o ângulo"
                    value={angulo}
                    onChange={(e) => setAngulo(e.target.value)}
                />

                <label>Gravidade (m/s²)</label>
                <input
                    type="number"
                    placeholder="Ex: 9.8"
                    value={g}
                    min={0}
                    onChange={(e) => setG(e.target.value)}
                />

                <button onClick={lancarObj}>Lançar</button>

                {erro && <p className="erro">{erro}</p>}

                {alcance !== null && (
                    <div className="resultado">
                        <h3>Resultado</h3>
                        <p>Alcance: {alcance} metros</p>
                    </div>
                )}
            </div>
        </div>
    );
}