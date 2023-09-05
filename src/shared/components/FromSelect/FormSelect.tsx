import { useFormikContext } from "formik"
import { IFormContext, IFormSelectProps } from "types/components"
import { FormControl, FormErrorMessage, Select } from "@chakra-ui/react"

const FormSelect: React.FC<IFormSelectProps> = ({ fieldName, ...selectProps }) => {
    const { errors, touched, setFieldTouched, handleChange } = useFormikContext<IFormContext>()

    return (
        <FormControl isInvalid={!!(errors[fieldName] && touched[fieldName])}>
            <Select {...selectProps} onBlur={() => setFieldTouched(fieldName)} onChange={handleChange(fieldName)} />
            <FormErrorMessage>
                {touched[fieldName] && errors[fieldName]}
            </FormErrorMessage>
        </FormControl>
    )
}

export default FormSelect