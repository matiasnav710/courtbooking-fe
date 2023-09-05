import axios from "axios"
import { TGetCourtService } from "types/services"

export const getCourts: TGetCourtService = async(payload) => {
    const { data } = await axios.get(`/api/courts/${payload.id}`)
    return data
}