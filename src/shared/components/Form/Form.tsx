import React from "react"
import { Box } from "@chakra-ui/react"
import { Formik } from "formik"
import { IFormProps } from "types/components"

const Form: React.FC<IFormProps> = ({ initialValues, validationSchema, onSubmit, children, wrapperClasses }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Box className={wrapperClasses}>{children as React.ReactNode}</Box>
        </Formik>
    )
}

export default Form