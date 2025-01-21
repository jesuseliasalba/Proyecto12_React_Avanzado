import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="headerMain">
      <div className="logo-container">
        <img src="/logo/logo.png" alt="logo ReactiveGame" />
      </div>
      <Link to="/">
        <h1>Reactive Game</h1>
      </Link>
    </header>
  );
};

export default Header;
