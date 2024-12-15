import * as Yup from 'yup';

export const loginValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
});

export const registerValidationSchema = Yup.object({
    fname: Yup.string()
        .min(2, 'First name must be at least 2 characters')
        .max(10, 'First name cannot be more than 10 characters')
        .required('First name is required'),

    lname: Yup.string()
        .min(2, 'Last name must be at least 2 characters')
        .max(10, 'Last name cannot be more than 10 characters')
        .required('Last name is required'),

    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),

    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/\d/, 'Password must contain at least one number')
        .matches(/[^a-zA-Z0-9]/, 'Password must contain at least one special character')
        .required('Password is required'),

    confirm_password: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Please confirm your password')
});
