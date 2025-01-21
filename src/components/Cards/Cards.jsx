import { Link } from "react-router-dom";
import "./Cards.css";

const Cards = ({ title, img, route, text }) => {
  return (
    <Link to={route} className="card">
      <div className="img-container">
        <img src={img} alt={`Imagen de ${title}`} />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default Cards;
