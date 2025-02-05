import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import Alerts from "./components/Alerts/Alerts";

const App = () => {
  return (
    <>
      <Alerts />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
