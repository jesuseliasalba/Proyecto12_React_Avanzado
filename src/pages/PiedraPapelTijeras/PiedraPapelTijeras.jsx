import ImgWrapper from "../../components/ImgWrapper/ImgWrapper";
import "./PiedraPapelTijeras.css";

const PiedraPapelTijeras = () => {
  return (
    <div id="piedra-papel-tijeras">
      <h2>Piedra, Papel o Tijeras</h2>
      <div className="game">
        <div className="game-menu">
          <div className="options">
            <button>🪨</button>
            <button>🗞️</button>
            <button>✂️</button>
          </div>
          <div className="player robot">
            <ImgWrapper
              src={"/juegos/PiedraPapelTijera/Robots/robot6.gif"}
              alt={"Imagen Usuario"}
              width="100px"
              height="100px"
              clase="robot"
            />
            <h3>Máquina</h3>
          </div>
        </div>
        <div className="game-menu">
          <div className="player">
            <ImgWrapper
              src={"/juegos/PiedraPapelTijera/Users/user3.gif"}
              alt={"Imagen Usuario"}
              width="100px"
              height="100px"
            />
            <h3>Jugador</h3>
          </div>
          <div className="options">
            <button>🪨</button>
            <button>🗞️</button>
            <button>✂️</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PiedraPapelTijeras;
