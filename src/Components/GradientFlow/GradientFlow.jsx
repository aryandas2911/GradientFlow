import Preview from "../GradientPreview/Preview.jsx";
import "./GradientFlow.css";
import ColorPreview from "../ColorPreview/ColorPreview.jsx";

function GradientFlow() {
  const colors = ["#FCE788", "#F8B864", "#F18744", "#EA5432"];

  return (
    <>
      <div className="container">
        <h1>GradientFlow</h1>
        <h4>Create beautiful color gradients</h4>
        <Preview />
        <div className="color-container">
          {colors.map((item, index) => {
            return <ColorPreview key={index} color={item} />;
          })}
        </div>
        <div className="button-container">
          <button className="copy-button">
            <span class="material-symbols-outlined">content_copy</span>Copy CSS
          </button>
          <div className="right-buttons">
            <button className="apply-button">Apply Background</button>
            <button className="gen-button">
              <span class="material-symbols-outlined">brush</span>Generate New
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GradientFlow;
