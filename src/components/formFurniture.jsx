import React, { useState } from "react";

const FormFurniture = ({ onDimensionChange }) => {
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target; // Destructure event object
    switch (name) {
      case "height":
        setHeight(value);
        break;
      case "width":
        setWidth(value);
        break;
      case "length":
        setLength(value);
        break;
      default:
        break;
    }
    onDimensionChange({ height, width, length }); // Pass all dimensions
  };

  return (
    <>
      <div id="Furniture" className="form-group-furniture">
        <div>
          <label htmlFor="height">Height:</label>
          <input
            type="number"
            id="height"
            name="height"
            value={height}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="width">Width:</label>
          <input
            type="number"
            id="width"
            name="width"
            value={width}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div>
          <label htmlFor="length">Length:</label>
          <input
            type="number"
            id="length"
            name="length"
            value={length}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
      </div>
      <span className="description">
        Please provide dimensions in HxMxL format
      </span>
    </>
  );
};

export default FormFurniture;
