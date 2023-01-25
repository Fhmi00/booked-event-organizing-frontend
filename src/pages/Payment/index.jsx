import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "../../utils/axios";
import { useSelector } from "react-redux/es/exports";

export default function Payment() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const user = useSelector((state) => state.user.data);
  const userId = user.id;

  const [data, setData] = useState({});
  const form = {
    eventId: state.eventId,
    totalPayment: state.totalPayment,
    section: state.activeSeat,
    statusPayment: true,
  };

  const handlePayment = async () => {
    try {
      const resultBooking = await axios.post(`booking/${userId}`, form);
      // console.log(resultBooking);
      setData(resultBooking.data.data);
      window.open(resultBooking.data.data.redirectUrl);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="payment">
      <Header />
      <section className="paymentCard justify-content  ">
        <h4 className="  text-center ">Ticket Detail</h4>
        <div className="row  paymentReport">
          <div className="col-sm-6 list1 mt-3">
            <p>Section</p>
            <p>Quantity</p>
            <p>Total Payment</p>
          </div>
          <div className="col-sm-6 mt-3 text-end">
            <p>{state.activeSeat.join()}</p>
            <p>{state.totalTicket}</p>
            <p>{state.totalPayment}</p>
          </div>
        </div>

        <div className="text-center">
          <button
            className="btn btn-primary payment-button"
            onClick={handlePayment}
          >
            Payment
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
