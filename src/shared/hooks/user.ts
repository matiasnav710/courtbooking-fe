import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getUser, login, register } from "services/user"
import { setToken } from "utils/token"

export const useUser = () => {
    const { data, isFetching } = useQuery(["user"], getUser)
    return { user: data, isGettingUser: isFetching }
}

export const useLogin = () => {
    const client = useQueryClient()

    const onSuccess = (token: string) => {
        setToken(token)
        client.invalidateQueries(['user'])
    }

    const { mutateAsync, isLoading } = useMutation(login, { onSuccess })
    return { login: mutateAsync, isLoggingIn: isLoading }
}

export const useRegister = () => {
    const client = useQueryClient()

    const onSuccess = (token: string) => {
        setToken(token)
        client.invalidateQueries(['user'])
    }

    const { mutateAsync, isLoading } = useMutation(register, { onSuccess })
    return { register: mutateAsync, isRegistering: isLoading }
}