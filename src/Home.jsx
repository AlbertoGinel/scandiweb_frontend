//home
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "./components/productList";
import Footer from "./components/footer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const productListRef = useRef();
  const [parentState, setParentState] = useState("Initial State");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://scandiweb-test-da56cd067ba1.herokuapp.com/products"
        );

        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [parentState]);

  const handleAddProductClick = () => {
    navigate("/addproduct"); // Programmatic navigation using useNavigate
  };

  const handleMassDeleteClick = () => {
    if (productListRef.current) {
      productListRef.current.handleMassDelete();
    }
  };

  // Function to be called by the child component
  const handleChildUpdate = () => {
    setParentState(Date.now());
  };

  return (
    <div className="home">
      <div className="header-container">
        <div className="header-left-element">
          <span className="title">Product List</span>
        </div>
        <div className="header-right-element">
          <button className="top-button" onClick={handleAddProductClick}>
            ADD
          </button>
          <button
            className="top-button delete-product-btn"
            onClick={handleMassDeleteClick}
          >
            MASS DELETE
          </button>
        </div>
      </div>
      <div className="horizontal-line-container">
        <hr className="horizontal-line" />
      </div>
      <ProductList
        ref={productListRef}
        products={products}
        onChildUpdate={handleChildUpdate}
      />
      <Footer />
    </div>
  );
};

export default Home;
