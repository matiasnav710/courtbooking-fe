import { useGetAllCourts } from "shared/hooks/court"
import { CourtCard } from "../CourtCard/CourtCard"
import { useFormikContext } from "formik";
import { IFormContext } from "types/components";
import { useEffect, useState } from "react";

function Courts() {
  const { courts: courtsData } = useGetAllCourts()
  const [filteredCourts,setFilteredCourts]=useState(courtsData)
  const { values } = useFormikContext<IFormContext>()

  const filterCourtHandler=()=>{
    const filteredCourt = courtsData?.filter(court=>{
      if(values.sport && Number(values.sport) && Number(values.sport)!==court.sport.id) return
      if(values.venue && Number(values.venue) && Number(values.venue)!==court.venue.id) return
      return court
    })
    return filteredCourt
  }
  useEffect(()=>{
      const courts = filterCourtHandler()
      setFilteredCourts(courts?[...courts]:courts)
  },[courtsData,values.sport,values.venue])
  
  return (
    <div>
      {filteredCourts?.map((courtData) => <CourtCard key={courtData.id} court={courtData} />)}
    </div>
  )
}

export { Courts }