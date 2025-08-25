import React from "react";
import {HashRouter, Routes, Route } from "react-router-dom";
import Page1 from "./page1.jsx";
import Game from "./game.jsx";    


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Page1 />} />
      <Route path="game" element={<Game/>} />
    </Routes>
  );
}

export default AppRoutes;
