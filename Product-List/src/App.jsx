import React, { useEffect } from "react";
import MainPage from "./pages/MainPage";
import { Routes, Route } from "react-router-dom";
import Products from './pages/Products'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products/:id" element={<Products/>} />
      </Routes>
    </div>
  );
};

export default App;
