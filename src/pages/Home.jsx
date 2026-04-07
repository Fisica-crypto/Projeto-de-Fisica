import "../styles/Home.css";

export default function Home() {
  return (
    <div className="corpo">
      <div id="input">
        <div>
          <span>Valor do ângulo:</span>
          <input type="text" />
        </div>
        <div>
          <span>Gravidade:</span>
          <input type="text" />
        </div>
        <div>
          <span>Velocidade:</span>
          <input type="text" />
        </div>
      </div>
      <div id="container-results">
        <div id="left">
          <div>
            <span>Altura:</span>
          </div>
          <div>
            <span>Alcance:</span>
          </div>
          <div>
            <span>Tempo:</span>
          </div>
        </div>
        <div id="right">
          <h1>ANIMAÇÃO</h1>
        </div>
      </div>
    </div>
  );
}
