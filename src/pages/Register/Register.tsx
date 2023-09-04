import FormButton from "shared/components/FormButton/FormButton"
import TextInput from "shared/components/TextInput/TextInput"
import { IRegisterPayload } from "types/services"
import { useRegister } from "shared/hooks/user"
import { useNavigate } from "react-router-dom"
import { Box, Button } from "@chakra-ui/react"
import Form from "shared/components/Form/Form"
import registerSchema from "schemas/register"

import "./register.scss"

const Register = () => {
    const { register, isRegistering } = useRegister()
    const navigate = useNavigate()

    const handleSubmit = (values: IRegisterPayload) => register(values)

    const handleNavigate = () => navigate("/login")

    return (
        <Box className="login-wrapper">
            <Form
                initialValues={{ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" }}
                validationSchema={registerSchema}
                onSubmit={handleSubmit}
                wrapperClasses="form-wrapper"
            >
                <Box className="heading">Create an account</Box>
                <TextInput isDisabled={isRegistering} fieldName="firstName" placeholder="First name" />
                <TextInput isDisabled={isRegistering} fieldName="lastName" placeholder="Last name" />
                <TextInput isDisabled={isRegistering} fieldName="email" placeholder="Email" />
                <TextInput isDisabled={isRegistering} fieldName="password" placeholder="Password" type="password" />
                <TextInput isDisabled={isRegistering} fieldName="confirmPassword" placeholder="Confirm password" type="password" />
                <FormButton>Register</FormButton>
                <Button onClick={handleNavigate} variant="link">Login</Button>
            </Form>
        </Box>
    )
}

export default Register