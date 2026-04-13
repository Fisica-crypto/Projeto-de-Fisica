import home from "../assets/Home.png";
import altura from "../assets/Altura.png";
import alcance from "../assets/Alcance.png";
import tempo from "../assets/Tempo.png";
import "../styles/Exemplos.css"
import { MdPadding } from "react-icons/md";
function Obliquo() {
  return (
    <div>
      <h1>Como usar o nosso site</h1>
      <p>
        Este guia explica como utilizar cada funcionalidade do site para calcular
        e entender o lançamento oblíquo.
      </p>

      <h2>1. Home</h2>
      <img src={home} alt="Tela inicial do site" />

      <p>
        A página inicial é a principal do site. Nela, você pode inserir os dados
        e obter todos os resultados do lançamento oblíquo.
      </p>

      <ul>
        <li><strong>Velocidade inicial:</strong> valor em m/s</li>
        <li><strong>Ângulo:</strong> valor em graus</li>
        <li><strong>Gravidade:</strong> normalmente 9,8 m/s²</li>
      </ul>

      <p>Após preencher, clique em <strong>"Calcular"</strong>.</p>

      <p>Resultados exibidos:</p>
      <ul>
        <li>Alcance</li>
        <li>Altura</li>
        <li>Tempo de voo</li>
        <li>Tempo até a altura máxima</li>
      </ul>

      <h2>2. Altura</h2>
      <p>
        Nesta página, o sistema calcula a altura máxima atingida pelo projétil.
      </p>
      <img src={altura} alt="Tela Altura" />
      <p>
        Insira os valores necessários e clique em calcular para obter o resultado da altura.
      </p>

      <h2>3. Alcance</h2>
      <p>
        A página de alcance mostra a distância horizontal percorrida pelo objeto.
      </p>
      <img src={alcance} alt="Tela do Alcance" />
      <p>
        Após inserir os dados, clique em calcular para ver o resultado.
      </p>

      <h2>4. Tempo</h2>
      <p>
        Nesta seção, você pode calcular o tempo de voo do projétil.
      </p>
      <img src={tempo} alt="Tela do Tempo" />
      <p>
        Basta preencher os campos e clicar em calcular.
      </p>

      <h2>5. Como usar</h2>
      <p>
        Esta página serve como guia para ajudar o usuário a entender todas as
        funcionalidades do site.
      </p>

      <h2>Dicas de uso</h2>
      <ul>
        <li>Use valores positivos</li>
        <li>Ângulos entre 0° e 90°</li>
        <li>Utilize 9,8 m/s² como gravidade padrão</li>
        <li>Teste diferentes valores para aprender melhor</li>
      </ul>
    </div>
  );
}

export default Obliquo;