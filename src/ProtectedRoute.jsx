import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../src/auth.js";

function ProtectedRoute({ children }) {
    console.log("isAuthenticated",isAuthenticated());
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;
