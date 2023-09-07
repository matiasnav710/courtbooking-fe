import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import createBooking, { getUserBookings } from "services/booking"
import { IBooking } from "types/entities"

export const useCreateBooking = () => {
    const client = useQueryClient()

    const onSuccess = () => {
        client.invalidateQueries({
            predicate: ({ queryKey }) => (queryKey[0] as string)?.includes?.("court-avaliability")
        })
    }

    const { mutateAsync, isLoading } = useMutation(createBooking, { onSuccess })
    return { createBooking: mutateAsync, isBooking: isLoading }
}
export const useGetUserBookings:()=>{bookings:IBooking[] | undefined,isGettingCourts:boolean} = () => {
    const { data, isFetching }  = useQuery(["getUserBookings"],getUserBookings)
    return { bookings: data, isGettingCourts: isFetching }
}

