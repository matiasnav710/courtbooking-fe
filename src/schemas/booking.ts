import * as yup from "yup"

const bookingSchema = yup.object({
    court: yup
        .number()
        .required()
        .label('Court'),
    venue: yup
        .number()
        .required()
        .label('Venue'),
    startTime: yup
        .date()
        .required()
        .label('Start Time'),
    endTime: yup
        .date()
        .required()
        .label('End Time')
})

export default bookingSchema