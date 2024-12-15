import { useLocation } from 'react-router-dom';
import useHandleLogout from '../../../hook/use-handle-logout';

const PageHeaderLogout = () => {
  const { pathname } = useLocation();
  const handleLogout = useHandleLogout()
  return (
    <>
      {
        pathname === '/' &&
        <div className='flex flex-wrap items-center gap-x-3'>
          <h6>Ahmed sadek</h6>
          <button type='button' onClick={handleLogout} className='bg-red-500 hover:shadow-lg p-2 rounded-lg text-white text-xl capitalize transition duration-300'>
            logout
          </button>
        </div>
      }
    </>
  )
}

export default PageHeaderLogout
