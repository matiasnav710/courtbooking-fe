import { useQuery } from "@tanstack/react-query"
import { getVenues } from "services/venue"

export const useVenues = () => {
    const { data, isFetching } = useQuery(["venues"], getVenues)
    return { venues: data, isGettingVenues: isFetching }
}