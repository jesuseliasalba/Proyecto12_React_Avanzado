import "./PiedraPapelTijeras.css";

const PiedraPapelTijeras = () => {
  return (
    <div id="piedra-papel-tijeras">
      <h2>Piedra, Papel o Tijeras</h2>
      <div className="game">
        <div className="game-menu machine">
          <div className="player">
            <h4>Máquina</h4>
          </div>
          <div className="options">
            <button>Piedra</button>
            <button>Papel</button>
            <button>Tijeras</button>
          </div>
        </div>
        <div className="player">
          <div className="player">
            <h3>Jugador</h3>
          </div>
          <div className="options">
            <button>Piedra</button>
            <button>Papel</button>
            <button>Tijeras</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PiedraPapelTijeras;
