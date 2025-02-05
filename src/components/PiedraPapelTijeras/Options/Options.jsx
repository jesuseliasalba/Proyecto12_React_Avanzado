import { useEffect, useState } from "react";
import ImgWrapper from "../../ImgWrapper/ImgWrapper";
import "./Options.css";

const Options = ({ options, select, setSelect, gamePlaying, robotSelect }) => {
  const [machineSelect, setMachineSelect] = useState(null);
  const isRobot = !select && !setSelect;

  useEffect(() => {
    let interval;
    if (isRobot && gamePlaying) {
      interval = setInterval(() => {
        const randomOption =
          options[Math.floor(Math.random() * options.length)];
        setMachineSelect(randomOption.name);
      }, 300);
    }

    if (!gamePlaying && isRobot) {
      clearInterval(interval);
      setMachineSelect(robotSelect);
    }

    return () => clearInterval(interval);
  }, [gamePlaying, isRobot, options, robotSelect]);

  return (
    <div className="options">
      {options.map((option) => {
        const isSelected = isRobot
          ? machineSelect === option.name
          : select === option.name;

        return (
          <button
            key={option.name}
            onClick={() =>
              !isRobot && select === option.name
                ? setSelect({ type: "SET_USER_SELECT", payload: "" })
                : setSelect({ type: "SET_USER_SELECT", payload: option.name })
            }
            className={
              (isSelected ? "selection" : "") +
              (isRobot && isSelected ? " robotButton" : "")
            }
            aria-pressed={isSelected}
            disabled={isRobot || gamePlaying}
          >
            <ImgWrapper
              src={option.src}
              alt={`Imagen de ${option.alt}`}
              width="35px"
            />
          </button>
        );
      })}
    </div>
  );
};

export default Options;
