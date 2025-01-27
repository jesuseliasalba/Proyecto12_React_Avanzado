import ImgWrapper from "../../ImgWrapper/ImgWrapper";
import "./Options.css";

const Options = ({ options, select, setSelect }) => {
  return (
    <div className="options">
      {options.map((option) => {
        return (
          <button
            key={option.name}
            onClick={() =>
              setSelect({ type: "SET_USER_SELECT", payload: option.name })
            }
            className={select === option.name ? "humanSelect" : ""}
            aria-pressed={select === option.name}
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
