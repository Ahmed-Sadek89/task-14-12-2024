import { Outlet } from 'react-router-dom'
import Header from '../ui/header/header'
import { useMiddleware } from '../../hook/use-middleware';

const HomeLayout = () => {
    useMiddleware()
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default HomeLayout
