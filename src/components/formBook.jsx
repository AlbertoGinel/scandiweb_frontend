import React, { useState } from "react";

const FormBook = ({ onWeightChange }) => {
  const [weight, setWeight] = useState("");

  const handleChange = (e) => {
    setWeight(e.target.value);
    onWeightChange(e.target.value); // Call the callback function
  };

  return (
    <>
      <div id="Book" className="form-group">
        <label htmlFor="weight">Weight (lbs):</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={weight}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>
      <span className="description">
        Please provide the weight of the Book.
      </span>
    </>
  );
};

export default FormBook;
