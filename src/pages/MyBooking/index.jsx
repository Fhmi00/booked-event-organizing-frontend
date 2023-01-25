import React from "react";
import { useSelector } from "react-redux";
import "./index.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar";
import CardBooking from "../../components/CardBooking";

export default function MyBooking() {
  const booking = useSelector((state) => state.booking);

  return (
    <div id="my-booking">
      <Header />
      <div className="d-flex">
        <Sidebar />
        <main id="main-my-booking">
          <h2>My Booking</h2>
          <div>
            <main className="main-manage-event d-flex gap-3 my-5">
              {booking.data.length > 0 ? (
                booking.data.map((item) => (
                  <div key={item.eventId}>
                    <CardBooking data={item} />
                  </div>
                ))
              ) : (
                <h1>Data Not Found !</h1>
              )}
            </main>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
