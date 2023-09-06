import { useQuery } from "@tanstack/react-query"
import { getCourtAvaliability, getCourts } from "services/court"

export const useCourts = (venueId?: number) => {
    const { data, isFetching }  = useQuery(
        ["courts", venueId], 
        ({ queryKey }) => getCourts({ id: queryKey[1] as number }),
        { enabled: !!venueId }
    )
    return { courts: data, isGettingCourts: isFetching }
}

export const useCourtAvaliability = (courtId?: number) => {
    const { data, isFetching } = useQuery(
        ["court-avaliability", courtId],
        ({ queryKey }) => getCourtAvaliability({ id: queryKey[1] as number })
    )
    return { courtBookings: data, isGettingCourtBookings: isFetching }
}