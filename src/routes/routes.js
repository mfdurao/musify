import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedLayout } from "../components/ProtectedLayout";
import { Home, Login } from "../pages/index.ts";
import { GlobalStyle } from "../styles/GlobalStyle.ts";

const AppRoutes = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route
        path="/home"
        element={
          <ProtectedLayout>
            <Home />
          </ProtectedLayout>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
