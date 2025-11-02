import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

type ProtectedRouteProps = {
  children: React.ReactElement; 
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isLoggedIn, bootstrapped } = useAuth();
  if (!bootstrapped) return null;
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}
