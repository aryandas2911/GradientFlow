import Preview from "../GradientPreview/Preview.jsx";
import "./GradientFlow.css";
import ColorPreview from "../ColorPreview/ColorPreview.jsx";
import { useState } from "react";

function GradientFlow() {
  const [colors, setColors] = useState([
    "#FCE788",
    "#F8B864",
    "#F18744",
    "#EA5432",
  ]);

  const [bgApplied, setBgApplied] = useState(false);

  const applyBackground = () => {
    if (!bgApplied) {
      const gradient = `linear-gradient(to right, ${colors.join(", ")})`;
      document.body.style.backgroundImage = gradient;
      document.body.style.backgroundAttachment = "fixed";
      document.body.style.backgroundSize = "cover";
    } else {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundColor = "";
    }
    setBgApplied(!bgApplied);
  };

  const copyGradientToClipboard = () => {
    const gradient = `linear-gradient(to right, ${colors.join(", ")})`;
    navigator.clipboard
      .writeText(gradient)
      .then(() => {
        alert("Gradient copied!");
      })
      .catch((err) => {
        alert("Failed to copy: ", err);
      });
  };

  const generateGradient = () => {
    const baseHue = Math.floor(Math.random() * 360);
    const newColors = Array.from({ length: 4 }, (_, i) => {
      const hue = (baseHue + i * 20) % 360;
      return `hsl(${hue}, 85%, 65%)`;
    });

    setColors(newColors);

    if (bgApplied) {
      const gradient = `linear-gradient(to right, ${newColors.join(", ")})`;
      document.body.style.backgroundImage = gradient;
    }
  };

  return (
    <>
      <div className="container">
        <h1>GradientFlow</h1>
        <h4>Create beautiful color gradients</h4>
        <Preview
          color1={colors[0]}
          color2={colors[1]}
          color3={colors[2]}
          color4={colors[3]}
        />
        <div className="color-container">
          {colors.map((item, index) => {
            return <ColorPreview key={index} color={item} />;
          })}
        </div>
        <div className="button-container">
          <button className="copy-button" onClick={copyGradientToClipboard}>
            <span class="material-symbols-outlined">content_copy</span>Copy CSS
          </button>
          <div className="right-buttons">
            <button className="apply-button" onClick={applyBackground}>
              {bgApplied ? "Remove Background" : "Apply Background"}
            </button>
            <button className="gen-button" onClick={generateGradient}>
              <span class="material-symbols-outlined">brush</span>Generate New
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GradientFlow;
