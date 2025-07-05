import "./Preview.css";

function Preview({ color1, color2, color3, color4 }) {
  return (
    <div
      className="preview-container"
      style={{
        backgroundImage: `linear-gradient(to right, ${color1}, ${color2}, ${color3}, ${color4})`,
      }}
    ></div>
  );
}

export default Preview;
