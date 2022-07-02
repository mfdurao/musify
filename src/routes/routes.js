import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ProtectedLayout } from "../components/ProtectedLayout";
import { Shop } from "../pages";
import { Home, Login } from "../pages/index.ts";
import { GlobalStyle } from "../styles/GlobalStyle.ts";

const AppRoutes = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          // <ProtectedLayout>
            <Home />
          // </ProtectedLayout>
        }
      />
      <Route
        path="/shop"
        element={
          <ProtectedLayout>
            <Shop />
          </ProtectedLayout>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
