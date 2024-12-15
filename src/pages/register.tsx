import { Formik, Form } from 'formik';
import { registerValidationSchema } from '../static/form-validation-schema';
import { registerInitialValues } from '../static/form-initial-values';
import BaseInput from '../components/ui/base-input';
import BaseBtnSubmit from '../components/ui/base-btn-submit';
import useFormLoading from '../hook/use-form-loading';
import useRegisterSubmit from '../hook/use-register-submit';

const Register = () => {
    const { isLoading } = useFormLoading();
    const handleSubmit = useRegisterSubmit();

    return (
        <Formik
            initialValues={registerInitialValues}
            validationSchema={registerValidationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form className="space-y-6">
                    <div className='items-start gap-4 grid grid-cols-1 sm:grid-cols-2'>
                        <BaseInput
                            id='fname'
                            label='First name'
                            name='fname'
                        />
                        <BaseInput
                            id='lname'
                            label='Last name'
                            name='lname'
                        />
                    </div>
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
                    <BaseInput
                        id='confirm_password'
                        label='Confirmation password'
                        name='confirm_password'
                        type='password'
                    />
                    <BaseBtnSubmit
                        disabled={isLoading || isSubmitting}
                        text="Register"
                    />
                </Form>
            )}
        </Formik>
    );
};

export default Register;
