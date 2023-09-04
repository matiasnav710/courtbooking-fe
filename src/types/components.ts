import { InputProps } from "@chakra-ui/react";
import { FormikConfig, FormikValues } from "formik";

export interface IAuthProps {
    auth?: boolean;
    Element: JSX.Element;
}

export interface IFormProps extends FormikConfig<FormikValues> {
    wrapperClasses?: string;
    onSubmit: (args: any) => Promise<unknown>;
}

export interface IFormContext {
    [key: string]: string;
}

export interface ITextInputProps extends InputProps {
    fieldName: string;
}