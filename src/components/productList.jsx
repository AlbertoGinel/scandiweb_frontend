//product List
import React, { useState, forwardRef, useImperativeHandle } from "react";
import "../../src/styles/global.scss";
import ProductItem from "./productItem";

const ProductList = forwardRef(({ products, onChildUpdate }, ref) => {
  const [checkedList, setCheckedList] = useState([]);

  const handleSelect = (productId) => {
    setCheckedList((prevCheckedList) => {
      if (prevCheckedList.includes(productId)) {
        return prevCheckedList.filter((id) => id !== productId);
      } else {
        return [...prevCheckedList, productId];
      }
    });
  };

  useImperativeHandle(ref, () => ({
    async handleMassDelete() {
      const requestOptions = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Add this if you control the server; typically, this is set server-side.
          "Access-Control-Allow-Methods": "DELETE, OPTIONS", // Speci
        },
        body: JSON.stringify({ idList: checkedList }),
      };

      const response = await fetch(
        "https://localhost/DaveHollingworth/REST_API/products/",
        requestOptions
      );

      if (response.ok) {
        setCheckedList([]);
        onChildUpdate();
        console.log("Delete successful, clearing checkedList");
      } else {
        console.error("Failed to delete products");
      }
    },
  }));

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          isChecked={checkedList.includes(product.id)}
          onSelect={() => handleSelect(product.id)}
        />
      ))}
    </div>
  );
});

export default ProductList;
