import { FormikHelpers } from 'formik';
import useFormLoading from './use-form-loading';
import { loginInitialValues } from '../static/form-initial-values';
import { useNavigate } from 'react-router-dom';
import { makeNotification } from '../utils/make-notification';

const useLoginSubmit = () => {
    const navigate = useNavigate()
    const { handleLoading } = useFormLoading();

    const handleLoginSubmit = async (
        values: typeof loginInitialValues,
        { setSubmitting }: FormikHelpers<typeof loginInitialValues>
    ) => {
        handleLoading(true);
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            handleLoading(false);
            console.log('Form submitted with values:', values);
            makeNotification("success", "login success!")
            navigate('/');
        }, 3000);
    };

    return handleLoginSubmit
}

export default useLoginSubmit