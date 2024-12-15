import { Link, useLocation } from 'react-router-dom';
import useUserHeaderLink from '../../../hook/use-user-header-link';

const UserHeaderLink = () => {
    const { pathname } = useLocation();
    const linkInfo = useUserHeaderLink()
    return (
        <>
            {
                (pathname === '/user/login' || pathname === '/user/register') &&
                <Link to={linkInfo.href} className='bg-primary hover:shadow-lg p-2 rounded-lg text-xl capitalize transition duration-300'>
                    {linkInfo.name}
                </Link>
            }
        </>
    )
}

export default UserHeaderLink
