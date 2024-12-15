import { Link, useLocation } from 'react-router-dom'

const UserPageRedirect = () => {
    const { pathname } = useLocation()
    return (
        <p className="space-x-2 mt-10 text-center text-gray-500 text-sm/6">
            <span>
                {pathname === '/user/login' ? "Not a member?" : "Have an account?"}
            </span>
            <Link to={pathname === '/user/login' ? "/user/register" : "/user/login"} className="font-semibold text-indigo-600 hover:text-indigo-500">
                {pathname === '/user/login' ? "Register" : "Login"}
            </Link>
        </p>
    )
}

export default UserPageRedirect
