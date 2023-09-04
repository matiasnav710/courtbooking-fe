import { Box, Button } from "@chakra-ui/react"
import loginSchema from "schemas/login"
import Form from "shared/components/Form/Form"
import FormButton from "shared/components/FormButton/FormButton"
import TextInput from "shared/components/TextInput/TextInput"
import { useLogin } from "shared/hooks/user"
import { ILoginPayload } from "types/services"
import { useNavigate } from "react-router-dom"

import "./login.scss"

const Login = () => {
    const { login, isLoggingIn } = useLogin()
    const navigate = useNavigate()

    const handleSubmit = (values: ILoginPayload) => login(values)

    const handleNavigate = () => navigate("/register")

    return (
        <Box className="login-wrapper">
            <Form
                initialValues={{ email: "", password: "" }}
                validationSchema={loginSchema}
                onSubmit={handleSubmit}
                wrapperClasses="form-wrapper"
            >
                <Box className="heading">Login</Box>
                <TextInput isDisabled={isLoggingIn} fieldName="email" placeholder="Email" />
                <TextInput isDisabled={isLoggingIn} fieldName="password" placeholder="Password" type="password" />
                <FormButton>Login</FormButton>
                <Button onClick={handleNavigate} variant="link">Register</Button>
            </Form>
        </Box>
    )
}

export default Login