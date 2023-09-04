import loginSchema from "schemas/login"
import Form from "shared/components/Form/Form"
import FormButton from "shared/components/FormButton/FormButton"
import TextInput from "shared/components/TextInput/TextInput"
import { useLogin } from "shared/hooks/user"
import { ILoginPayload } from "types/services"

const Login = () => {
    const { login, isLoggingIn } = useLogin()

    const handleSubmit = (values: ILoginPayload) => login(values)

    return (
        <Form
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
        >
            <TextInput isDisabled={isLoggingIn} fieldName="email" placeholder="Email" />
            <TextInput isDisabled={isLoggingIn} fieldName="password" placeholder="Password" type="password" />
            <FormButton>Login</FormButton>
        </Form>
    )
}

export default Login