import Cards from "../../components/Cards/Cards";
import "./Home.css";

const Home = () => {
  return (
    <div id="home">
      <Cards
        title={"Bingo"}
        img={"/juegos/bingo.jpg"}
        route={"bingo"}
        text={
          "¡Juega al bingo! Marca los números, completa el patrón y sé el primero en ganar. 🎉"
        }
      />
      <Cards
        title={"🪨 🗞️ ✂️"}
        img={"/juegos/piedrapapeltijera.jpeg"}
        route={"piedrapapeltijeras"}
        text={
          "¡Juega al Piedra, Papel o Tijeras! Elige tu movimiento, reta a tu oponente y demuestra quién es el campeón. ✂️🗞️🪨"
        }
      />
    </div>
  );
};

export default Home;
