import MainLayout from "@/layouts/MainLayout";
import { ProtectedLayout } from "@/layouts/ProtectedLayout";
import { AuthPage } from "@/pages/AuthPages/AuthPage";
import HomePage from "@/pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
    {
        Component: MainLayout,
        children: [
            {
                path: "/",
                Component: HomePage
            },
            {
                path: "/auth",
                Component: AuthPage
            },
            {
                Component: ProtectedLayout,
                children: [
                //   { path: "/trains", Component: Trains },
                //   { path: "/cabs", Component: Cabs },
                //   { path: "/booking", Component: Booking },
                ],
              },
            {
                path: "*",
                Component: HomePage,
            },
        ]
    }
]);
export default function AppRouter() {
    return <RouterProvider router={router} />
}