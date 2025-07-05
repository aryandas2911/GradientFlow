import "./ColorPreview.css";

function ColorPreview({ color }) {
  return (
    <div className="color-preview-wrapper">
      <div
        className="color-preview"
        style={{
          backgroundColor: color,
        }}
      ></div>
      <h4 className="color-label">{color}</h4>
    </div>
  );
}

export default ColorPreview;
