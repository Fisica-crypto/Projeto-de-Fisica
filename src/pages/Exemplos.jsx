import home from '../assets/Home.png'
import altura from '../assets/Altura.png'
import alcance from '../assets/Alcance.png'
import tempo from '../assets/Tempo.png'
import '../styles/Exemplos.css'

export default function Obliquo() {
  return (
    <div className="corpo-exemplos">
      <h1>Como usar o nosso site</h1>

      <div className="card">
        <p>
          Este guia explica como utilizar cada funcionalidade do site para calcular
          e entender o lançamento oblíquo.
        </p>
      </div>

      <div className="card">
        <h2>1. Home</h2>
        <img src={home} alt="Tela inicial do site" className="imagem-exemplo"/>

        <p>
          A página inicial é a principal do site. Nela, você pode inserir os dados
          e obter todos os resultados.
        </p>

        <ul>
          <li><strong>Velocidade inicial:</strong> m/s</li>
          <li><strong>Ângulo:</strong> graus</li>
          <li><strong>Gravidade:</strong> 9,8 m/s²</li>
        </ul>
      </div>

      <div className="card">
        <h2>2. Altura</h2>
        <img src={altura} alt="Tela Altura" className="imagem-exemplo"/>
        <p>Calcula a altura máxima do projétil.</p>
      </div>

      <div className="card">
        <h2>3. Alcance</h2>
        <img src={alcance} alt="Tela Alcance" className="imagem-exemplo"/>
        <p>Mostra a distância horizontal percorrida.</p>
      </div>

      <div className="card">
        <h2>4. Tempo</h2>
        <img src={tempo} alt="Tela Tempo" className="imagem-exemplo"/>
        <p>Calcula o tempo total de voo.</p>
      </div>

      <div className="card">
        <h2>Dicas</h2>
        <ul>
          <li>Use valores positivos</li>
          <li>Ângulos entre 0° e 90°</li>
          <li>Gravidade padrão: 9,8 m/s²
          <li>Ao definir a gravidade como 0, o objeto segue em linha reta já que não há uma força contrária para que o objeto caia.</li>
          </li>
        </ul>
      </div>
    </div>
  );
}