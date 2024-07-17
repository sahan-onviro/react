import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Global/component/Navbar";
import { Route, Routes } from "react-router-dom";
import { RouteData } from "./Global/Data/route";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {RouteData?.map((item,index) => (
          <Route path={item?.slug} element={item?.element} key={index} />
        ))}
      </Routes>
    </>
  );
}

export default App;
