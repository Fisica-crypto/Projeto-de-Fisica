import React from "react";
import "./resultado.css";

export default function Resultado({ tempo, alcance, altura, onClose }) {
  return (
    <div className="modal-bg">
      <div className="modal">
        <h2>Resultados da Simulação</h2>

        <p>Tempo de voo: {tempo} s</p>
        <p>Alcance: {alcance} m</p>
        <p>Altura máxima: {altura} m</p>
        <p>Tempo até altura máxima: {(tempo/2).toFixed(2)} s</p>

        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}