import { Formik, Form } from 'formik';
import { loginValidationSchema } from '../static/form-validation-schema';
import { loginInitialValues } from '../static/form-initial-values';
import BaseInput from '../components/ui/base-input';
import BaseBtnSubmit from '../components/ui/base-btn-submit';
import useFormLoading from '../hook/use-form-loading';
import useLoginSubmit from '../hook/use-login-submit';

const Login = () => {
    const { isLoading } = useFormLoading();
    const handleSubmit = useLoginSubmit();
    
    return (
        <Formik
            initialValues={loginInitialValues}
            validationSchema={loginValidationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form className="space-y-6">
                    <BaseInput
                        id='email'
                        label='Email address'
                        name='email'
                    />
                    <BaseInput
                        id='password'
                        label='Password'
                        name='password'
                        type='password'
                    />
                    <BaseBtnSubmit
                        disabled={isLoading || isSubmitting}
                        text="Login"
                    />
                </Form>
            )}
        </Formik>
    );
};

export default Login;
