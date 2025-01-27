import PPTGame from "../../components/PiedraPapelTijeras/PPTGame/PPTGame";
import PPTProvider from "../../providers/PPTProvider";
import "./PiedraPapelTijeras.css";

const PiedraPapelTijeras = () => {
  return (
    <div id="piedra-papel-tijeras">
      <h2>Piedra, Papel o Tijeras</h2>
      <PPTProvider>
        <PPTGame />
      </PPTProvider>
    </div>
  );
};

export default PiedraPapelTijeras;
