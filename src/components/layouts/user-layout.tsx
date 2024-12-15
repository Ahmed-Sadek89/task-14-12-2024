import { Outlet } from "react-router-dom"
import Header from "../ui/header/header"
import UserPageText from "../ui/user-page-text"
import UserPageRedirect from "../ui/user-page-redirect"

const UserLayout = () => {
    return (
        <>
            <Header />
            <div className="flex justify-center items-center w-full min-h-[calc(100vh-6rem)] container">
                <div className="w-full lg:w-1/3">
                    <div className="flex flex-col flex-1 justify-center gap-y-10 bg-white shadow-xl my-7 py-4 rounded-xl container">
                        <UserPageText />
                        <div>
                            <Outlet />
                            <UserPageRedirect />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserLayout
