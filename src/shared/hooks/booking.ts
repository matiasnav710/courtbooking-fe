import { useMutation, useQueryClient } from "@tanstack/react-query"
import createBooking from "services/booking"

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