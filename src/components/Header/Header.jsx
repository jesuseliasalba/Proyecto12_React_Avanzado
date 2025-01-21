import { Link } from "react-router-dom";
import "./Header.css";
import ImgWrapper from "../ImgWrapper/ImgWrapper";

const Header = () => {
  return (
    <header className="headerMain">
      <ImgWrapper
        src="/logo/logo.png"
        alt="logo ReactiveGame"
        height="40px"
        clase="logo-container"
      />
      <Link to="/">
        <h1>Reactive Game</h1>
      </Link>
    </header>
  );
};

export default Header;
