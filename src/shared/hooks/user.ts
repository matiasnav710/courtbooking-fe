import { useMutation, useQuery } from "@tanstack/react-query"
import { getUser, login, register } from "services/user"

export const useUser = () => {
    const { data, isFetching } = useQuery(["user"], getUser)
    return { user: data, isGettingUser: isFetching }
}

export const useLogin = () => {
    const { mutateAsync, isLoading } = useMutation(login)
    return { login: mutateAsync, isLoggingIn: isLoading }
}

export const useRegister = () => {
    const { mutateAsync, isLoading } = useMutation(register)
    return { register: mutateAsync, isRegistering: isLoading }
}