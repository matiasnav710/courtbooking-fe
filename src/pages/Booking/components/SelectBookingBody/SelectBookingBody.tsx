import { Courts } from '../Courts/Courts'
import { useFormikContext } from "formik";
import { SelectBookingDate } from '../SelectBookingDate/SelectBookingDate'
import { IFormContext } from 'types/components';
import { useCreateBooking } from 'shared/hooks/booking';
import { ICreateBookingPayload } from 'types/services';
import "./SelectBookingBody.scss"
import { Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

export const SelectBookingBody = () => {
    const navigate = useNavigate();
    const { values,setFieldValue } = useFormikContext<IFormContext>()
    const {createBooking} = useCreateBooking()
    
    const onSubmit=async ()=>{
        await createBooking(values as unknown as ICreateBookingPayload)
        setFieldValue("bookingComplete",true)
    } 
    return (
        <div>
            {!values.court && !values.bookingComplete && <Courts />}
            {values.court && !values.bookingComplete && <SelectBookingDate onSubmit={onSubmit} />}
            {values.bookingComplete && <div className='booking-complete'>
                <p>We are pleased to inform you that your booking has been successfully added to our system. Thank you for choosing our service.</p>
                <Button onClick={()=>{
                    navigate("/my-bookings")
                }} className='view-booking'>View Booking</Button>
            </div>}
        </div>
    )
}
