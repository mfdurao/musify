import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login } from "../pages/index.ts";
import { GlobalStyle } from "../styles/GlobalStyle.ts";

const AppRoutes = () => (
  <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
  </BrowserRouter>
);

export default AppRoutes;
