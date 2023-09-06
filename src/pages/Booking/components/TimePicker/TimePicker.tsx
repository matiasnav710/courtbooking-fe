import { useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import { useVenues } from "shared/hooks/venue";
import { useCourtAvaliability } from "shared/hooks/court";
import { IFormContext, ITimePickerProps } from "types/components";
import { generateDisabledTimes, isTimeDifferenceIs1Hour } from "utils/helpers";
import { toast } from "react-hot-toast";

const TimePicker: React.FC<ITimePickerProps> = ({ fieldName, placeholderText }) => {
    const { values, setFieldValue } = useFormikContext<IFormContext>()
    const { courtBookings } = useCourtAvaliability(+values?.court)
    const { venues } = useVenues()

    const handleChange = (date: Date) => {
        if(fieldName === "endTime" && !isTimeDifferenceIs1Hour(values.startTime, date.toUTCString())) {
            return toast.error("Booking interval must be one-hour")
        }
        setFieldValue(fieldName, date)
    }
  
    if(!venues?.find(venue => venue.id === +values.venue)?.id || !values?.court) return <></>
    return (
        <DatePicker 
            showTimeSelect 
            timeIntervals={60}    
            onChange={handleChange}
            minTime={new Date(venues?.find(venue => venue.id === +values.venue)?.startTime || '')}
            maxTime={new Date(venues?.find(venue => venue.id === +values.venue)?.endTime || '')}
            excludeTimes={generateDisabledTimes(courtBookings || [], fieldName)}
            placeholderText={placeholderText}
        />
    )
}

export default TimePicker