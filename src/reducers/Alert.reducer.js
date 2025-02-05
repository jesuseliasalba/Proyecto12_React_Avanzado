export const AlertReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALERT":
      console.log("Creando alerta", action.payload);
      return [...state, action.payload];
    case "REMOVE_ALERT":
      console.log("Borrando alerta: ", action.payload);
      return state.filter((alert) => alert.id !== action.payload);
    default:
      return state;
  }
};
