import StartTimePicker from "./components/StartTimePicker/StartTimePicker"
import FormButton from "shared/components/FormButton/FormButton"
import VenueSelect from "./components/VenueSelect/VenueSelect"
import CourtSelect from "./components/CourtSelect/CourtSelect"
import Form from "shared/components/Form/Form"
import bookingSchema from "schemas/booking"
import { Box } from "@chakra-ui/react"

import "./booking.scss"

const Booking = () => {

    const handleSubmit = async() => {}

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
                <StartTimePicker />
                <FormButton>Book</FormButton>
            </Form>
        </Box>
    )
}

export default Booking