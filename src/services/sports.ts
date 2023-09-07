import axios from "axios"

export const getAllSports = async() => {
    const { data } = await axios.get(`/api/sports`)
    return data
}
