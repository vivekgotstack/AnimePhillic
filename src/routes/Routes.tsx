import MainLayout from "@/layouts/MainLayout";
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
            // {
            //     path: "/flights",
            //     Component: Flight
            // },
            // {
            //     path: "/hotel",
            //     Component: Hotel
            // },
            // {
            //     path: "/trains",
            //     Component: Trains
            // },
            // {
            //     path: "/cabs",
            //     Component: Cabs
            // },
            // {
            //     path: "/bus",
            //     Component: Bus
            // },
            // {
            //     path: "/holidays",
            //     Component: Holidays
            // },
            // {
            //     path: "/booking",
            //     Component: Booking,
            // },
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