import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
