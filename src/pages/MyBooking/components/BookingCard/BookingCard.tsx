import { FC } from 'react'
import { IBooking } from 'types/entities'
import './BookingCard.scss'
import { formatDateTime } from "utils/helpers"

const BookingCard:FC<{booking:IBooking}> = ({booking})=>{
  return (
    <div className='booking-card-container'>
      <div className='booking-card-wrapper'>
          <div className='img-container'>
            <img src={booking.court.image} />
          </div>
          <div className='content-container'>
              <h2>{booking.court.name}</h2>
              <p>{booking.court.description}</p>
              <p>{formatDateTime(new Date(booking.startTime))}</p>
          </div>
      </div>
    </div>
  )
}

export {BookingCard}