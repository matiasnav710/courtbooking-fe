import * as yup from "yup"

const loginSchema = yup.object({
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
        .label('Password')
})

export default loginSchema