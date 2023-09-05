import { useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import { useVenues } from "shared/hooks/venue";
import { IFormContext, ITimePickerProps } from "types/components";

const TimePicker: React.FC<ITimePickerProps> = ({ fieldName, placeholderText }) => {
    const { values, setFieldValue } = useFormikContext<IFormContext>()
    const { venues } = useVenues()

    if(!venues?.find(venue => venue.id === +values.venue)?.id || !values?.court) return <></>
    return (
        <DatePicker 
            showTimeSelect 
            timeIntervals={60}    
            onChange={(date) => setFieldValue(fieldName, date)}
            minTime={new Date(venues?.find(venue => venue.id === +values.venue)?.startTime || '')}
            maxTime={new Date(venues?.find(venue => venue.id === +values.venue)?.endTime || '')}
            placeholderText={placeholderText}
        />
    )
}

export default TimePicker