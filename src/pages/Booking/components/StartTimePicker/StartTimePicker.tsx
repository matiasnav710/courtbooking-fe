import { useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import { useVenues } from "shared/hooks/venue";
import { IFormContext } from "types/components";

import "./start-time-picker.scss"

const StartTimePicker = () => {
    const { values } = useFormikContext<IFormContext>()
    const { venues } = useVenues()

    if(!venues?.find(venue => venue.id === +values.venue)?.id || !values?.court) return <></>
    return (
        <DatePicker 
            showTimeSelect 
            timeIntervals={60}    
            onChange={() => {}}
            minTime={new Date(venues?.find(venue => venue.id === +values.venue)?.startTime || '')}
            maxTime={new Date(venues?.find(venue => venue.id === +values.venue)?.endTime || '')}
            placeholderText="Select Start Time"
        />
    )
}

export default StartTimePicker