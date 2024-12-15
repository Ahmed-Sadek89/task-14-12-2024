import { useLocation } from 'react-router-dom'
import Logo from '../../utils/get-main-logo'

const UserPageText = () => {
    const { pathname } = useLocation()
    return (
        <div className="flex flex-col justify-center items-center">
            <img
                alt="Your Logo"
                src={Logo}
                className="w-auto h-16 object-contain"
            />
            <h2 className="mt-5 font-bold text-2xl/9 text-blacj text-black tracking-tight">
                {pathname === '/user/login' ? "Log in to your account" : "Create a new account"}
            </h2>
        </div>
    )
}

export default UserPageText
