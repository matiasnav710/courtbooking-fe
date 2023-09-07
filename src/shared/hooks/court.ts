import { useQuery } from "@tanstack/react-query"
import { getAllCourts, getCourtAvaliability, getCourts } from "services/court"
import { ICourt } from "types/entities"

export const useCourts = (venueId?: number) => {
    const { data, isFetching }  = useQuery(
        ["courts", venueId], 
        ({ queryKey }) => getCourts({ id: queryKey[1] as number }),
        { enabled: !!venueId }
    )
    return { courts: data, isGettingCourts: isFetching }
}

export const useGetAllCourts:()=>{courts:ICourt[] | undefined,isGettingCourts:boolean} = () => {
    const { data, isFetching }  = useQuery(["getAllCourts"],getAllCourts)
    return { courts: data, isGettingCourts: isFetching }
}

export const useCourtAvaliability = (courtId?: number) => {
    const { data, isFetching } = useQuery(
        ["court-avaliability", courtId],
        ({ queryKey }) => getCourtAvaliability({ id: queryKey[1] as number })
    )
    return { courtBookings: data, isGettingCourtBookings: isFetching }
}