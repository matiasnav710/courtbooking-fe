import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react"
import { useFormikContext } from "formik"
import { IFormContext, ITextInputProps } from "types/components"

const TextInput: React.FC<ITextInputProps> = ({ fieldName, ...inputProps }) => {
    const { errors, touched, setFieldTouched, handleChange } = useFormikContext<IFormContext>()

    return (
        <FormControl isInvalid={!!(errors[fieldName] && touched[fieldName])}>
            <Input {...inputProps} onChange={handleChange(fieldName)} onBlur={() => setFieldTouched(fieldName)} />
            <FormErrorMessage>
                {errors[fieldName]}
            </FormErrorMessage>
        </FormControl>
    )
}

export default TextInput