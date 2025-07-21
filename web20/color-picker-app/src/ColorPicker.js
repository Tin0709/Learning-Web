import React, { useState } from "react";
import "./ColorPicker.css";

function ColorPicker() {
  const [color, setColor] = useState("#3498db");

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="color-picker-container">
      <h2>React Color Picker</h2>
      <input type="color" value={color} onChange={handleChange} />
      <p>
        Selected Color: <span>{color}</span>
      </p>
      <div className="color-box" style={{ backgroundColor: color }}></div>
    </div>
  );
}

export default ColorPicker;
