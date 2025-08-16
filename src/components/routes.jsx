import React from "react";
import {HashRouter, Routes, Route } from "react-router-dom";
import Page1 from "./page1.jsx";
import About from "./about.jsx";    
import Contact from "./rules.jsx"; 


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Page1 />} />
      <Route path="game" element={<About/>} />
      <Route path="rules" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
