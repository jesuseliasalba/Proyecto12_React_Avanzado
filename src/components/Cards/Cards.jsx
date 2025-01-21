import { Link } from "react-router-dom";
import "./Cards.css";
import ImgWrapper from "../ImgWrapper/ImgWrapper";

const Cards = ({ title, img, route, text }) => {
  return (
    <Link to={route} className="card">
      <ImgWrapper
        src={img}
        alt={`Imagen de ${title}`}
        clase={"img-container"}
        height={"250px"}
        width={"100%"}
      />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default Cards;
