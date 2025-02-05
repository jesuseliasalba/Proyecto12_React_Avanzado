import { useReducer } from "react";
import { AlertReducer } from "../reducers/Alert.reducer";
import { AlertContext } from "../context/AlertContext";

const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AlertReducer, []);

  return (
    <AlertContext.Provider value={{ state, dispatch }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
