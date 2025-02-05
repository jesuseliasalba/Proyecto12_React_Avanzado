import { useContext, useEffect, useState } from "react";
import { options } from "../../../utils/PiedraPapelTijeras";
import ImgWrapper from "../../ImgWrapper/ImgWrapper";
import Options from "../Options/Options";
import { PPTContext } from "../../../context/PPTContext";
import "./PPTGame.css";
import { playGame } from "../../../reducers/PPT.actions";
import { useAlert } from "../../../hooks/useAlert";

const PPTGame = () => {
  const { state, dispatch } = useContext(PPTContext);
  const [gameResultClass, setGameResultClass] = useState("");
  const { showAlert } = useAlert();

  useEffect(() => {
    if (!state.gamePlaying) {
      let clase = "";
      switch (state.lastWinner) {
        case "user":
          clase = "win";
          showAlert({
            message: "🥳 ¡ Has ganado !",
            type: "success",
          });
          break;
        case "machine":
          clase = "lose";
          showAlert({
            message: "😓 ¡ Has perdido !",
            type: "error",
          });
          break;
        case "Empate":
          clase = "draw";
          showAlert({
            message: "😵‍💫 ¡ Empate !",
            type: "info",
          });
          break;
        default:
          clase = "";
      }
      setGameResultClass(clase);

      const timer = setTimeout(() => {
        setGameResultClass("");
        dispatch({ type: "RESET_GAME" });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [state.gamePlaying, state.lastWinner]);

  const startGame = () => {
    if (state.userSelect === "") {
      showAlert({
        message: "⚠️ Debes seleccionar una opción",
        type: "warning",
      });
    } else {
      playGame({ userSelect: state.userSelect, dispatch });
    }
  };

  return (
    <div className={`game ${gameResultClass}`}>
      <div className="game-menu">
        <Options
          options={options}
          gamePlaying={state.gamePlaying}
          robotSelect={state.machineSelect}
        />
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
      <div className="play">
        <button disabled={state.gamePlaying} onClick={startGame}>
          JUGAR
        </button>
      </div>
      <div className="game-menu">
        <div className="player">
          <ImgWrapper
            src={"/juegos/PiedraPapelTijera/Users/user3.gif"}
            alt={"Imagen Usuario"}
            width="100px"
            height="100px"
            clase="player"
          />
          <h3>Jugador</h3>
        </div>
        <Options
          options={options}
          select={state.userSelect}
          setSelect={(action) => dispatch(action)}
          gamePlaying={state.gamePlaying}
        />
      </div>
    </div>
  );
};

export default PPTGame;
