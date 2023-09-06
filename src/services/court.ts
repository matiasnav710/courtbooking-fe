import axios from "axios"
import { TGetCourtAvaliabilityService, TGetCourtService } from "types/services"

export const getCourts: TGetCourtService = async(payload) => {
    const { data } = await axios.get(`/api/courts/${payload.id}`)
    return data
}

export const getCourtAvaliability: TGetCourtAvaliabilityService = async(payload) => {
    const { data } = await axios.get(`/api/courts/avaliability/${payload.id}`)
    return data
}