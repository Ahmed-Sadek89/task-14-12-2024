import { FormikHelpers } from 'formik';
import useFormLoading from './use-form-loading';
import { registerInitialValues } from '../static/form-initial-values';
import { useNavigate } from 'react-router-dom';
import { makeNotification } from '../utils/make-notification';
import { register } from '../api/user/register';

const useRegisterSubmit = () => {
    const navigate = useNavigate()
    const { handleLoading } = useFormLoading();

    const handleRegisterSubmit = async (
        values: typeof registerInitialValues,
        { setSubmitting }: FormikHelpers<typeof registerInitialValues>
    ) => {
        handleLoading(true);
        setSubmitting(true);
        const { fname, lname, email, password } = values
        await register({ fname, lname, email, password })
            .then(() => {
                makeNotification("success", "Registration success!");
                navigate('/user/login')
            }).catch(error => {
                makeNotification('error', error.message)
            }).finally(() => {
                handleLoading(false);
                setSubmitting(false);
            })
    };

    return handleRegisterSubmit
}

export default useRegisterSubmit