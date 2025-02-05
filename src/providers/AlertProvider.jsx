import { useReducer } from "react";
import { AlertReducer } from "../reducers/Alert.reducer";
import { AlertContext } from "../context/AlertContext";

const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AlertReducer, [
    {
      id: 100,
      message: "Selecciona una opción",
      type: "warning",
      duration: 3000,
    },
  ]);

  return (
    <AlertContext.Provider value={{ state, dispatch }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
