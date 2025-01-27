import { useContext } from "react";
import { options } from "../../../utils/options";
import ImgWrapper from "../../ImgWrapper/ImgWrapper";
import Options from "../Options/Options";
import { PPTContext } from "../../../context/PPTContext";
import "./PPTGame.css";

const PPTGame = () => {
  const { state, dispatch } = useContext(PPTContext);

  return (
    <div className="game">
      <div className="game-menu">
        <Options options={options} />
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
        <Options
          options={options}
          select={state.userSelect}
          setSelect={(action) => dispatch(action)}
        />
      </div>
    </div>
  );
};

export default PPTGame;
