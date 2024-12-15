import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const useUserHeaderLink = () => {
    const { pathname } = useLocation();
    const [linkInfo, setLinkInfo] = useState({
        href: "",
        name: ""
    })
    useEffect(() => {
        if (pathname === '/user/login') {
            setLinkInfo({
                href: "/user/register",
                name: "register"
            })
        } else {
            setLinkInfo({
                href: "/user/login",
                name: "login"
            })
        }
    }, [pathname])

    return linkInfo
}

export default useUserHeaderLink
