import Logo from '../../../assets/vite.svg'
import PageHeaderLogout from './page-header-logout'
import UserHeaderLink from './user-header-link'

const Header = () => {
    return (
        <header className='bg-white shadow-xl py-4'>
            <div className="container">
                <div className="flex flex-wrap justify-between items-center w-full">
                    <img src={Logo} alt="logo" className='w-10 h-10 object-contain' />
                    <PageHeaderLogout />
                    <UserHeaderLink />
                </div>
            </div>
        </header>
    )
}

export default Header
