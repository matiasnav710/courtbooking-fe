import TimePicker from "./components/TimePicker/TimePicker"
import FormButton from "shared/components/FormButton/FormButton"
import VenueSelect from "./components/VenueSelect/VenueSelect"
import CourtSelect from "./components/CourtSelect/CourtSelect"
import { useCreateBooking } from "shared/hooks/booking"
import { ICreateBookingPayload } from "types/services"
import Form from "shared/components/Form/Form"
import bookingSchema from "schemas/booking"
import { Box } from "@chakra-ui/react"

import "./booking.scss"

const Booking = () => {
    const { createBooking } = useCreateBooking()

    const handleSubmit = async(values: ICreateBookingPayload) => createBooking(values)

    return (
        <Box className="booking-wrapper">
            <Form
                initialValues={{ venue: null, court: null, startTime: null, endTime: null }}
                validationSchema={bookingSchema}
                onSubmit={handleSubmit}
                wrapperClasses="form-wrapper"
            >
                <VenueSelect />
                <CourtSelect />
                <TimePicker fieldName="startTime" placeholderText="Pick Start Time" />
                <TimePicker fieldName="endTime" placeholderText="Pick End Time" />
                <FormButton>Book</FormButton>
            </Form>
        </Box>
    )
}

export default Booking