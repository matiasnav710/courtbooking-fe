import * as yup from "yup"

const bookingSchema = yup.object({
    court: yup
        .number()
        .required()
        .label('Court'),
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