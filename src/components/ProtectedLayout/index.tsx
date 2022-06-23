import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider/useAuth";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.email) {
      navigate("/login");
    }
  }, [auth, navigate]);

  return children;
};
