import axios from "axios";
import { TGetUserService, TLoginService, TRegisterService } from "types/services";
import { getToken } from "utils/token";

export const getUser: TGetUserService = async() => {
    const { data } = await axios.get("/api/users/getUser", { headers: { Authorization: getToken() } })
    return data
}

export const login: TLoginService = async(payload) => {
    const { data } = await axios.post("/api/users/login", payload)
    return data
}

export const register: TRegisterService = async(payload) => {
    const { data } = await axios.post("/api/users/register", payload)
    return data
}