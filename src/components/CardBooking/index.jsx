import React from "react";

export default function CardBooking(props) {
  return (
    <div className="cardBooking">
      <p>{props.data.bookingId}</p>
      <p>{props.data.eventId}</p>
    </div>
  );
}
