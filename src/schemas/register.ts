import * as yup from "yup"

const registerSchema = yup.object({
    firstName: yup
        .string()
        .required()
        .label('First name'),
    lastName: yup
        .string()
        .required()
        .label('Last name'),
    email: yup
        .string()
        .email()
        .required()
        .label('Email'),
    password: yup
        .string()
        .min(5)
        .max(255)
        .required()
        .label('Password'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], "Passwords don't match")
})

export default registerSchema