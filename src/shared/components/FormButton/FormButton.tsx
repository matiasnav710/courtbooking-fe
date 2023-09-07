import { Button, ButtonProps } from "@chakra-ui/react"
import React from "react"

const FormButton: React.FC<ButtonProps> = ({ ...buttonProps }) => {    
    return (
        <Button  {...buttonProps}>{buttonProps.children}</Button>
    )
}

export default FormButton