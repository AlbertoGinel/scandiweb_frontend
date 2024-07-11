import React from "react";
import "../../src/styles/global.scss";

const ProductItem = ({ product, isChecked, onSelect }) => {
  const handleCheckboxChange = () => {
    onSelect(product.id);
  };

  return (
    <div className="product-item">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="delete-checkbox" // Add class for styling
      />
      <div className="product-details">
        <p>{product.SKU}</p>
        <p>{product.name}</p>
        <p>{product.price} $</p>
        {product.size && <p>Size: {product.size} MB</p>}
        {product.weight && <p>Weight: {product.weight}KG</p>}
        {product.height && (
          <p>
            Dimensions: {product.height} x {product.width} x {product.length}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
