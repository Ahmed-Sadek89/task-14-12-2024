import { useLocation } from 'react-router-dom';
import useHandleLogout from '../../../hook/use-handle-logout';
import Cookies from 'universal-cookie';

const PageHeaderLogout = () => {
  const { pathname } = useLocation();
  const handleLogout = useHandleLogout();
  const cookie = new Cookies();
  const user = cookie.get("test-user");

  return (
    <>
      {
        pathname === '/' &&
        <div className='flex flex-wrap items-center gap-x-3'>
          <h6 className='capitalize'>{user}</h6>
          <button type='button' onClick={handleLogout} className='bg-red-500 hover:shadow-lg p-2 rounded-lg text-white text-xl capitalize transition duration-300'>
            logout
          </button>
        </div>
      }
    </>
  )
}

export default PageHeaderLogout
