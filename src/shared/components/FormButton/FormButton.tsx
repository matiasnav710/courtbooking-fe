import { Button, ButtonProps } from "@chakra-ui/react"
import { useFormikContext } from "formik"
import React from "react"

const FormButton: React.FC<ButtonProps> = ({ ...buttonProps }) => {
    const { handleSubmit } = useFormikContext()
    return (
        <Button {...buttonProps} onClick={() => handleSubmit()}>{buttonProps.children}</Button>
    )
}

export default FormButton