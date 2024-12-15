import { FormikHelpers } from 'formik';
import useFormLoading from './use-form-loading';
import {  registerInitialValues } from '../static/form-initial-values';
import { useNavigate } from 'react-router-dom';
import { makeNotification } from '../utils/make-notification';

const useRegisterSubmit = () => {
    const navigate = useNavigate()
    const { handleLoading } = useFormLoading();

    const handleRegisterSubmit = async (
        values: typeof registerInitialValues,
        { setSubmitting }: FormikHelpers<typeof registerInitialValues>
    ) => {
        handleLoading(true);
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            handleLoading(false);
            console.log('Form submitted with values:', values);
            makeNotification("success", "Registration success!")
            navigate('/user/login');
        }, 3000);
    };

    return handleRegisterSubmit
}

export default useRegisterSubmit