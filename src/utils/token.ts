import { Token } from "constants/constants"

export const getToken = () => localStorage.getItem(Token.ACCESS_TOKEN)
export const setToken = (token: string) => localStorage.setItem(Token.ACCESS_TOKEN, token)
export const removeToken = () => localStorage.removeItem(Token.ACCESS_TOKEN)