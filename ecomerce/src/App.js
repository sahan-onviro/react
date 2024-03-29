import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
const HomePage = lazy(() => import("./pages/Homepage/Homepage"));
const Cart = lazy(() => import("././pages/Cart/Cart"));
const Product = lazy(() => import("./pages/Product/Product"));
const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>..loading</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
