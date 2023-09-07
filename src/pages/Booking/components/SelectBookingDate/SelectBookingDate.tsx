import { useFormikContext } from "formik";
import { FC, useEffect, useState } from "react";
import { useGetAllCourts } from "shared/hooks/court";
import { IFormContext } from "types/components";
import { ICourt } from "types/entities";
import { useCourtAvaliability } from "shared/hooks/court";
import { generateDisabledTimes } from "utils/helpers";
import DatePicker from "react-datepicker";
import "./SelectBookingDate.scss"
import { formatDateTime } from "utils/helpers";
import { Button } from "@chakra-ui/react";

const SelectBookingDate:FC<{onSubmit:()=>void}> = ({onSubmit}) =>{
  const { courts: courtsData } = useGetAllCourts()
  const [currentMonth,setCurrentMonth]=useState(new Date())
  const { values,setFieldValue } = useFormikContext<IFormContext>()
  const [selectedCourt, setSelectedCourt] = useState<ICourt | null>(null)
  const { courtBookings } = useCourtAvaliability(+values?.court)
  useEffect(() => {
    const court = courtsData?.find(court => court.id === Number(values.court))
    setSelectedCourt(court || null)
  }, [courtsData])

  return (
    <div>
      <div className="date-picker-booking">
        <DatePicker
          showTimeSelect
          timeIntervals={60}
          minDate={new Date()}
          minTime={new Date(selectedCourt?.venue.startTime || '')}
          maxTime={new Date(selectedCourt?.venue.endTime || '')}
          excludeTimes={generateDisabledTimes(courtBookings || [],currentMonth)}
          placeholderText={"Select Date And Time"}
          selected={(values.startTime as unknown as Date) || null}
          onMonthChange={(date)=>{
            setCurrentMonth(date)
          }}
          
          onChange={(date) => {
            if(!date){
              setFieldValue("startTime",null)
              setFieldValue("endTime",null)
              return
            }
            setCurrentMonth(date)
            const endTime=new Date(date)
            endTime.setHours(date?.getHours()+1)
            endTime.setMinutes(date.getMinutes()-1)
            setFieldValue("startTime",date)
            setFieldValue("endTime",endTime)
          }}
          inline
        />
      </div>
      <Button className="book-now" onClick={onSubmit} type="submit">Book {values.startTime && "for " + formatDateTime(values.startTime as unknown as Date)}</Button>
    </div>
  )
}

export { SelectBookingDate }