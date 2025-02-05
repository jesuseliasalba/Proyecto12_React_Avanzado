import { useContext, useState } from "react";
import { AlertContext } from "../context/AlertContext";

export const useAlert = () => {
  const { state, dispatch } = useContext(AlertContext);
  const [cont, setCont] = useState(1);

  const showAlert = ({ message, type = "success", duration = 3000 }) => {
    // types: success, error, info, warning
    const id = cont;

    dispatch({
      type: "SET_ALERT",
      payload: { id, message, type, duration },
    });

    setCont(id + 1);

    setTimeout(() => {
      dispatch({ type: "REMOVE_ALERT", payload: id });
    }, duration);
  };

  return {
    state,
    showAlert,
  };
};
