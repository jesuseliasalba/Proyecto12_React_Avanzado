import { getRandomSelect, getWinner } from "../utils/PiedraPapelTijeras";

export const PPT_INITIAL = {
  userSelect: null,
  machineSelect: null,
  lastWinner: null,
  wins: 0,
};

export const PPTReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_SELECT":
      return { ...state, userSelect: action.payload };
    case "PLAY_GAME": {
      const machineSelect = getRandomSelect();
      const winner = getWinner({
        userSelect: state.userSelect,
        machineSelect,
      });
      return {
        ...state,
        machineSelect,
        lastWinner: winner,
        wins: winner === "user" ? state.wins + 1 : state.wins,
      };
    }
    case "ADD_WIN":
      return { ...state, wins: state.wins + 1 };
    default:
      return state;
  }
};
