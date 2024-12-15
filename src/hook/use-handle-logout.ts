import Swal from 'sweetalert2'

const useHandleLogout = () => {
    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, log me out!',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '/user/login';
            }
        });
    }

    return handleLogout
}

export default useHandleLogout
