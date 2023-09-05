import { useMutation } from "@tanstack/react-query"
import createBooking from "services/booking"

export const useCreateBooking = () => {
    const { mutateAsync, isLoading } = useMutation(createBooking)
    return { createBooking: mutateAsync, isBooking: isLoading }
}