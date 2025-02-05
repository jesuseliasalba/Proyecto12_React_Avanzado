export const PPT_INITIAL = {
  gamePlaying: false,
  userSelect: "",
  machineSelect: "",
  lastWinner: null,
  wins: 0,
};

export const PPTReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_SELECT":
      return { ...state, userSelect: action.payload };
    case "START_GAME":
      return { ...state, gamePlaying: true };
    case "PLAYED_GAME": {
      const { winner, machineSelect } = action.payload;
      return {
        ...state,
        gamePlaying: false,
        machineSelect,
        lastWinner: winner,
        wins: winner === "user" ? state.wins + 1 : state.wins,
      };
    }
    case "RESET_GAME":
      return { ...state, machineSelect: "", userSelect: "" };
    default:
      return state;
  }
};
