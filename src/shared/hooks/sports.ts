import { useQuery } from "@tanstack/react-query"
import { getAllSports } from "services/sports"
import { ISport } from "types/entities"


export const useGetAllSports = () => {
    const { data, isFetching }  = useQuery(["getAllSports"],getAllSports)
    const response:{sports:ISport[] | undefined,isGettingSports:boolean} = { sports: data, isGettingSports: isFetching }
    return response
}
