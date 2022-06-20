import React from "react";
import { useAuth } from "../../contexts/AuthProvider/useAuth";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (!auth.email) {
    return (
      <div>
        <h1>No access Protected Layout</h1>
      </div>
    );
  }

  return children;
};
