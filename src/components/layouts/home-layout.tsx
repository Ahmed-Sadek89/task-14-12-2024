import { Outlet } from 'react-router-dom'
import Header from '../ui/header/header'

const HomeLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default HomeLayout
