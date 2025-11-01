import { Navigate, useRoutes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import MainLayout from "../Layout/MainLayout";

export default function AppRouter() {
    const routes = useRoutes([
        { 
            element: <MainLayout />,
            children: [
                {
                    path: "/", element: <HomePage />,
                },
            ]
        }
    ]);
    return routes;
}