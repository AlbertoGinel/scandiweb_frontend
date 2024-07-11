import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductAdd from "./productAdd";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addproduct" element={<ProductAdd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
