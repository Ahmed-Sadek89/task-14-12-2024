import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

export const useMiddleware = () => {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const isAuthenticated = cookies.get("test-auth");

    useEffect(() => {
        if (!isAuthenticated) {
            if (pathname === "/user/login" || pathname === "/user/register") {
                return;
            }
            navigate("/user/login");
        } else {
            if (pathname === "/user/login" || pathname === "/user/register") {
                navigate("/");
            }
        }
    }, [isAuthenticated, navigate, pathname]);
};
