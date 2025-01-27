import { useReducer } from "react";
import { PPT_INITIAL, PPTReducer } from "../reducers/PPT.reducer";
import { PPTContext } from "../context/PPTContext";

const PPTProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PPTReducer, PPT_INITIAL);

  return (
    <PPTContext.Provider value={{ state, dispatch }}>
      {children}
    </PPTContext.Provider>
  );
};

export default PPTProvider;
