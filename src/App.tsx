import "./App.css";
import { AuthProvider } from "./contexts/AuthProvider";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
