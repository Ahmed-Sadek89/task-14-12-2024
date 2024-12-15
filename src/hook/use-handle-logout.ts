import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import Cookies from 'universal-cookie';

const useHandleLogout = () => {
    const cookie = new Cookies()
    const navigate = useNavigate();
    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, log me out!',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                cookie.remove('test-auth')
                cookie.remove('test-user')
            }
        }).then(() => navigate('/user/login'))
    }

    return handleLogout
}

export default useHandleLogout
