import { Navigate, useRoutes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import MainLayout from "../Layout/MainLayout";
import LoginPage from "../Pages/LoginPage/LoginPage";
import DriverListPage from "../Pages/DriverListPage/DriverListPage";
import ProtectedRoute from "../Pages/ProtectedRoute";

export default function AppRouter() {
    const routes = useRoutes([
        { 
            element: <MainLayout />,
            children: [
                {
                    path: "/", element: <HomePage />,
                },
                {
                    path: "/login", element: <LoginPage />,
                },
                {
                    path: "/driver-list",
                    element: (
                        <ProtectedRoute>
                        <DriverListPage />
                        </ProtectedRoute>
                    ),
                }
            ]
        }
    ]);
    return routes;
}