import { useQuery } from "@tanstack/react-query"
import { getCourts } from "services/court"

export const useCourts = (venueId?: number) => {
    const { data, isFetching }  = useQuery(
        ["courts", venueId], 
        ({ queryKey }) => getCourts({ id: queryKey[1] as number }),
        { enabled: !!venueId }
    )
    return { courts: data, isGettingCourts: isFetching }
}