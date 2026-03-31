import { useState } from "react";
import "../styles/Altura.css";

export default function Altura() {
  const [velocidade, setVelocidade] = useState("");
  const [angulo, setAngulo] = useState("");
  const [gravidade, setGravidade] = useState("");     // começa vazio
  const [altura, setAltura] = useState(null);
  const [erro, setErro] = useState("");

  const calcularAltura = () => {
    const v0 = parseFloat(velocidade);
    const ang = parseFloat(angulo);
    const g = parseFloat(gravidade);

    setErro("");

    // Validações
    if (isNaN(v0) || isNaN(ang) || isNaN(g)) {
      setErro("Por favor, preencha todos os campos com valores válidos!");
      return;
    }

    if (ang <= 0 || ang >= 90) {
      setErro("O ângulo deve estar entre 0° e 90° (não inclusivo)");
      return;
    }

    if (v0 <= 0 || v0 > 30) {
      setErro("A velocidade inicial deve ser maior que 0 e menor ou igual a 30 m/s");
      return;
    }

    if (g <= 0) {
      setErro("A gravidade deve ser maior que 0 m/s²");
      return;
    }

    // Cálculo da altura máxima
    const rad = (ang * Math.PI) / 180;
    const h = (v0 ** 2 * Math.sin(rad) ** 2) / (2 * g);

    setAltura(h.toFixed(2));
  };

  return (
    <div className="container">
      <h2>Altura Máxima do Lançamento Oblíquo</h2>

      <input
        type="number"
        placeholder="Velocidade inicial (m/s)"
        value={velocidade}
        onChange={(e) => setVelocidade(e.target.value)}
      />

      <input
        type="number"
        placeholder="Ângulo (graus)"
        value={angulo}
        onChange={(e) => setAngulo(e.target.value)}
      />

      <input
        type="number"
        placeholder="Gravidade g (m/s²) - Digite o valor desejado"
        value={gravidade}
        onChange={(e) => setGravidade(e.target.value)}
        step="0.01"
      />

      <button onClick={calcularAltura}>Calcular Altura Máxima</button>

      {erro && <p className="erro">{erro}</p>}

      {altura !== null && !erro && (
        <p className="resultado">
          <strong>Altura Máxima:</strong> {altura} m
        </p>
      )}
    </div>
  );
}