import { useLocation } from 'react-router-dom';

const PageHeaderLogout = () => {
  const { pathname } = useLocation();

  return (
    <>
      {
        pathname === '/' &&
        <button type='button' className='bg-primary hover:shadow-lg p-2 rounded-lg text-xl capitalize transition duration-300'>
          logout
        </button>
      }
    </>
  )
}

export default PageHeaderLogout
