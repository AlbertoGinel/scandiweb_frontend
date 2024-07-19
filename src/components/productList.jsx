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
      const response = await fetch(
        "https://scandiweb-test-da56cd067ba1.herokuapp.com/products",
        {
          method: "DELETE",
          mode: "cors",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },

          body: JSON.stringify({ action: "delete", idList: checkedList }),
        }
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
