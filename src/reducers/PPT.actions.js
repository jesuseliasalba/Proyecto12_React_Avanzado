import { getRandomSelect, getWinner } from "../utils/PiedraPapelTijeras";

export const playGame = ({ userSelect, dispatch }) => {
  dispatch({ type: "START_GAME" });

  const machineSelect = getRandomSelect();
  const winner = getWinner({ userSelect, machineSelect });

  setTimeout(() => {
    dispatch({ type: "PLAYED_GAME", payload: { winner, machineSelect } });
  }, 3000);
};
