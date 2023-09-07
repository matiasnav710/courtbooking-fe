import axios from "axios"
import { TCreateBookingService } from "types/services"
import { getToken } from "utils/token"

const createBooking: TCreateBookingService = async(payload) => {
    const { data } = await axios.post("/api/bookings/createBooking", payload, { headers: { Authorization: getToken() } })
    return data
}

export const getUserBookings = async() => {
    const { data } = await axios.get(`/api/bookings/`,{ headers: { Authorization: getToken() } })
    return data
}


export default createBooking