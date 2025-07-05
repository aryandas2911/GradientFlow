import Preview from "../GradientPreview/Preview.jsx";
import "./GradientFlow.css";
import ColorPreview from "../ColorPreview/ColorPreview.jsx";

function GradientFlow() {
  return (
    <>
      <div className="container">
        <h1>GradientFlow</h1>
        <h4>Create beautiful color gradients</h4>
        <Preview />
        <ColorPreview />
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
