import React from 'react'
import { BookingBanner } from '../Components/BookingsComponents/BookingBanner'
import { BookingsSection } from '../Components/BookingsComponents/BookingsSection'
import Fade from 'react-reveal/Fade';

export const Booking = () => {
  return (
    <div>
        <Fade right>
        <BookingBanner/>
        </Fade>
        <Fade left>
        <BookingsSection/>
        </Fade>
    </div>
  )
}
