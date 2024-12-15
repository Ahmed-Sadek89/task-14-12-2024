import { createBrowserRouter } from "react-router-dom";
import UserLayout from "./components/layouts/user-layout";
import Login from "./pages/Login";
import HomeLayout from "./components/layouts/home-layout";
import ErrorPage from "./error-page";
import Home from "./pages/Home";
import Register from "./pages/Register";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                errorElement: <ErrorPage />,
            },
        ],
    },
    {
        path: "/user",
        element: <UserLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "login",
                element: <Login />,
                errorElement: <ErrorPage />,
            },
            {
                path: "register",
                element: <Register />,
                errorElement: <ErrorPage />,
            },
        ],
    },
]);

export default routes;
