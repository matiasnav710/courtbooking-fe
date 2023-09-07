import { Layout } from "../../Layout/Layout"
import { useGetUserBookings } from "shared/hooks/booking"
import {BookingCard} from './components/BookingCard/BookingCard'

function MyBooking() {
  const {bookings} = useGetUserBookings()
  console.log("bookings",bookings)
  return (
    <Layout>
      {
        bookings?.map(bk=><BookingCard booking={bk} key={bk.id} />)
      }
    </Layout>
  )
}

export default MyBooking