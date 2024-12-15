import { FormikHelpers } from 'formik';
import useFormLoading from './use-loading';
import { loginInitialValues } from '../static/form-initial-values';
import { useNavigate } from 'react-router-dom';
import { makeNotification } from '../utils/make-notification';
import { login } from '../api/user/login';
import Cookies from 'universal-cookie';
import { generateToken } from '../utils/generate-token';

const useLoginSubmit = () => {
    const cookie = new Cookies()
    const navigate = useNavigate()
    const { handleLoading } = useFormLoading();
    const token = generateToken()
    const handleLoginSubmit = async (
        values: typeof loginInitialValues,
        { setSubmitting }: FormikHelpers<typeof loginInitialValues>
    ) => {
        handleLoading(true);
        setSubmitting(true);
        await login(values)
            .then((res) => {
                makeNotification("success", "Login success!");
                cookie.set("test-auth", `Bearer ${token}`)
                cookie.set("test-user", res?.fname+" "+ res?.lname)
            })
            .then(() => {
                if (cookie.get("test-auth")) {
                    navigate('/')
                }
            })
            .catch(error => {
                makeNotification('error', error.message)
            }).finally(() => {
                handleLoading(false);
                setSubmitting(false);
            })
    };

    return handleLoginSubmit
}

export default useLoginSubmit