import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import TodoList from "./pages/TodoList";
import Home from "./pages/Home";
import Navbar from "./componenet/Navbar";
import QuoteGen from "./pages/QuoteGen";
import RockPaper from "./pages/RockPaper";
import Countdown from "./pages/Countdown";
import Weather from "./pages/Weather";

export const RouteData = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  { name: "ToDoList", path: "todolist", element: <TodoList /> },
  { name: "QuoteGen", path: "quotegen", element: <QuoteGen /> },
  { name: "RockPaper", path: "rockpaper", element: <RockPaper /> },
  { name: "countdown", path: "countdown", element: <Countdown /> },
  { name: "weather", path: "weather", element: <Weather /> },
];

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {RouteData.map((item, index) => (
          <React.Fragment key={index}>
            <Route path={item.path} element={item.element} />
          </React.Fragment>
        ))}
      </Routes>
    </>
  );
}

export default App;
