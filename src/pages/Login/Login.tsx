import loginSchema from "schemas/login"
import Form from "shared/components/Form/Form"
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

        </Form>
    )
}

export default Login