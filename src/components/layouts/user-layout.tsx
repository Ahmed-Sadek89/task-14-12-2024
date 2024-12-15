import { Outlet } from "react-router-dom"
import Header from "../ui/header/header"

const UserLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default UserLayout
