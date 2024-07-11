import React, { useState } from "react";

const FormDVD = ({ onSizeChange }) => {
  const [size, setSize] = useState("");

  const handleChange = (e) => {
    setSize(e.target.value);
    onSizeChange(e.target.value);
  };

  return (
    <>
      <div id="DVD" className="form-group">
        <label htmlFor="sku">Size:</label>
        <input
          type="number"
          id="size"
          name="size"
          value={size}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>
      <span className="description">
        Please provide the data capacity of the DVD.
      </span>
    </>
  );
};

export default FormDVD;
