export const options = [
  { name: "rock", src: "/juegos/PiedraPapelTijera/rock.png", alt: "Piedra" },
  { name: "paper", src: "/juegos/PiedraPapelTijera/paper.png", alt: "Papel" },
  {
    name: "scissors",
    src: "/juegos/PiedraPapelTijera/scissors.png",
    alt: "Tijeras",
  },
];

export const getRandomSelect = () => {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
};

export const getWinner = ({ userSelect, machineSelect }) => {
  if (userSelect === machineSelect) return "Empate";
  if (
    (userSelect === "rock" && machineSelect === "scissors") ||
    (userSelect === "paper" && machineSelect === "rock") ||
    (userSelect === "scissors" && machineSelect === "paper")
  )
    return "user";
  return "machine";
};
