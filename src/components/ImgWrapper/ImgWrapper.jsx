import "./ImgWrapper.css";

const ImgWrapper = ({
  src,
  alt,
  height = "auto",
  width = "auto",
  clase = "",
}) => {
  return (
    <div className={`img-wrapper ${clase}`} style={{ height, width }}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImgWrapper;
