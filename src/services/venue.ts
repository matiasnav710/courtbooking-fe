import axios from "axios"
import { TGetVenuesService } from "types/services"

export const getVenues: TGetVenuesService = async() => {
    const { data } = await axios.get("/api/venues")
    return data
}