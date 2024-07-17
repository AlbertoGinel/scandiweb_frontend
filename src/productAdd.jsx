import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./components/footer";
import ProductForm from "./components/ProductForm";

const ProductAdd = () => {
  const navigate = useNavigate();

  const childRef = useRef(null);

  const handleCancelClick = () => {
    navigate("/"); // Programmatic navigation to Home page on cancel
  };

  const handleSave = () => {
    if (childRef.current) {
      childRef.current.handleSave();
    }
  };

  return (
    <div className="home">
      <div className="header-container">
        <div className="header-left-element">
          <span className="title">Product Add</span>
        </div>
        <div className="header-right-element">
          <button className="top-button" onClick={handleSave}>
            Save
          </button>
          <button className="top-button" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
      <div className="horizontal-line-container">
        <hr className="horizontal-line" />
      </div>
      <div className="product-add-body">
        <ProductForm ref={childRef} />
      </div>

      <Footer />
    </div>
  );
};

export default ProductAdd;
