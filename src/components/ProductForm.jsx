import React, { useState, forwardRef, useImperativeHandle } from "react";
import FormDVD from "./formDVD";
import FormFurniture from "./formFurniture";
import FormBook from "./formBook";
import { useNavigate } from "react-router-dom";

const ProductForm = forwardRef((props, ref) => {
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [selectedType, setSelectedType] = useState("DVD");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleSizeChange = (newSize) => {
    setSize(newSize);
  };

  const handleWeightChange = (newWeight) => {
    setWeight(newWeight);
  };

  const handleDimensionChange = (dimensions) => {
    setHeight(dimensions.height);
    setWidth(dimensions.width);
    setLength(dimensions.length);
  };

  const handleSave = async () => {
    const productData = {
      SKU: sku,
      name,
      price: parseFloat(price),
      size,
      weight,
      height,
      width,
      length,
      type: selectedType,
    };

    try {
      const response = await fetch(
        "https://localhost/DaveHollingworth/REST_API/products/",
        {
          method: "POST",
          body: JSON.stringify(productData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Product saved successfully:", data);

      setSku("");
      setName("");
      setPrice("");
      setSelectedType("DVD");
      setSize("");
      setWeight("");
      setHeight("");
      setWidth("");
      setLength("");

      navigate("/");
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  useImperativeHandle(ref, () => ({
    handleSave,
  }));

  const renderFormComponent = () => {
    switch (selectedType) {
      case "DVD":
        return <FormDVD onSizeChange={handleSizeChange} />;
      case "Furniture":
        return <FormFurniture onDimensionChange={handleDimensionChange} />;
      case "Book":
        return <FormBook onWeightChange={handleWeightChange} />;
      default:
        return null;
    }
  };

  return (
    <form id="product_form" className="product_form">
      <div className="form-group">
        <label htmlFor="sku">SKU:</label>
        <input
          type="text"
          id="sku"
          name="sku"
          value={sku}
          onChange={(e) => setSku(e.target.value)}
          required
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input
          type="number" // Use type="number" for numeric input
          id="price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="productType">Product Type:</label>
        <select
          id="productType"
          value={selectedType}
          onChange={handleChange}
          className="form-input"
        >
          <option key="DVD" value="DVD">
            DVD
          </option>
          <option key="Furniture" value="Furniture">
            Furniture
          </option>
          <option key="Book" value="Book">
            Book
          </option>
        </select>
      </div>

      {renderFormComponent()}
    </form>
  );
});

export default ProductForm;
