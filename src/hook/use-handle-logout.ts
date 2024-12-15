import Swal from 'sweetalert2'
import Cookies from 'universal-cookie';

const useHandleLogout = () => {
    const cookie = new Cookies()
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
                window.location.href = '/user/login';
            }
        });
    }

    return handleLogout
}

export default useHandleLogout
