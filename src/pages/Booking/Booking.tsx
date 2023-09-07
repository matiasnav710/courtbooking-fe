import Form from "shared/components/Form/Form"
import bookingSchema from "schemas/booking"
import { Box } from "@chakra-ui/react"
import { SelectBookingHeader } from "./components/SelectBookingHeader/SelectBookingHeader"
import "./booking.scss"
import { SelectBookingBody } from "./components/SelectBookingBody/SelectBookingBody"
import { Layout } from "../../Layout/Layout"

const Booking = () => {
    return (
        <Layout>
            <Box className="booking-wrapper">
                <div className="booking-container">
                    <Form
                        initialValues={{ venue: null, court: null, startTime: null, endTime: null, sport: null }}
                        validationSchema={bookingSchema}
                        wrapperClasses="form-wrapper"
                        onSubmit={() => { }}
                    >
                        <SelectBookingHeader />
                        <SelectBookingBody />
                    </Form>
                </div>
            </Box>
        </Layout>

    )
}

export default Booking