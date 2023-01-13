import React from "react";
// import "./index.css";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SeatPosition from "../../components/SeatPosition";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ticketREG from "../../assets/img/REG.svg";
import ticketVIP from "../../assets/img/VIP.svg";
import ticketVVIP from "../../assets/img/VVIP.svg";
import axios from "../../utils/axios";

function Order() {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

  const [fullSeat, setFullSeat] = useState([]); // DI GUNAKAN UNTUK MENAMPUNG SEAT YANG FULL
  const [activeSeat, setActiveSeat] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG SEAT YANG SEDANG DIPILIH
  const [dataOrder, setDataOrder] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG SEAT YANG SUDAH TERPILIH
  const [listBooking, setListBooking] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG LIST DATA SEAT YANG SUDAH DI BOOKING
  const [dataEvent, setDataEvent] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG DATA EVENT

  useEffect(() => {
    getDataBooking();
    getDataEvent();
  }, []);

  const getDataBooking = async () => {
    const result = await axios.get(`/booking/bookingSection/${state.eventId}`);
    console.log(result.data.data);

    let dataFullSeat = result.data.data.filter((item) => item.statusFull);
    dataFullSeat = dataFullSeat.map((item) => item.section);
    setFullSeat(dataFullSeat);
    setListBooking(result.data.data);
    console.log(dataFullSeat);
  };
  // console.log(
  //   listBooking.filter((e) => {
  //     e.available.includes("REG");
  //   })
  // );
  const getDataEvent = async () => {
    try {
      const result = await axios.get(`event/${state.eventId}`);
      setDataEvent(result.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectSeat = (seat) => {
    // PROSES PEMILIHAN SEAT
    const data = seat.split("-");
    if (!fullSeat.includes(seat)) {
      if (activeSeat.includes(seat)) {
        const deleteSeat = activeSeat.filter((item) => item !== seat);
        const deleteDataOrder = dataOrder.filter((item) => item.seat !== seat);
        setActiveSeat(deleteSeat);
        setDataOrder(deleteDataOrder);
      } else {
        setActiveSeat([...activeSeat, seat]);
        setDataOrder([
          ...dataOrder,
          {
            seat,
            qty: 1,
            price: data[0].includes("VVIP")
              ? dataEvent[0].price * 3 // HARGA 3 KALI LIPAT UNTUK VVIP
              : data[0].includes("VIP")
              ? dataEvent[0].price * 2 // HARGA 2 KALI LIPAT UNTUK VIP
              : dataEvent[0].price, // HARGA TIDAK BERUBAH UNTUK REGULAR
          },
        ]);
      }
    }
  };

  const totalPayment = dataOrder.reduce((acc, obj) => {
    return acc + obj.price;
  }, 0);
  const totalTicket = dataOrder.reduce((acc, obj) => {
    return acc + obj.qty;
  }, 0);

  const handleOrderSeat = () => {
    navigate("/payment", {
      state: {
        dataOrder,
        eventId: state.eventId,
        totalPayment,
        totalTicket,
        activeSeat,
      },
    });
  };

  const clearOrderSeat = () => {
    setActiveSeat([]);
    setDataOrder([]);
  };

  const increaseOrderSeat = (section) => {
    const findData = dataOrder.find((item) => item.seat === section.seat);
    const price = section.seat.includes("VVIP")
      ? dataEvent[0].price * 3 // HARGA 3 KALI LIPAT UNTUK VVIP
      : section.seat.includes("VIP")
      ? dataEvent[0].price * 2 // HARGA 2 KALI LIPAT UNTUK VIP
      : dataEvent[0].price; // HARGA TIDAK BERUBAH UNTUK REGULAR
    findData.qty += 1;
    findData.price = price * findData.qty;
    setDataOrder([...dataOrder]);
  };

  const decreaseOrderSeat = (section) => {
    const findData = dataOrder.find((item) => item.seat === section.seat);
    if (findData.qty === 1) {
      const deleteData = dataOrder.filter((item) => item.seat !== section.seat);
      const deleteSeat = activeSeat.filter((item) => item !== section.seat);
      setDataOrder(deleteData);
      setActiveSeat(deleteSeat);
    } else {
      const price = section.seat.includes("VVIP")
        ? dataEvent[0].price * 3 // HARGA 3 KALI LIPAT UNTUK VVIP
        : section.seat.includes("VIP")
        ? dataEvent[0].price * 2 // HARGA 2 KALI LIPAT UNTUK VIP
        : dataEvent[0].price; // HARGA TIDAK BERUBAH UNTUK REGULAR
      findData.qty -= 1;
      findData.price = price * findData.qty;
      setDataOrder([...dataOrder]);
    }
  };
  return (
    <>
      <div className="order_page">
        <Header />
        <div className=" order ">
          <div className="container">
            <div className="card">
              <div className="row m-5">
                <div className="col-sm-12 col-md-7 p-0 p-md-4">
                  <div className="rotate-seat">
                    <SeatPosition
                      width="90%" // MEMBERIKAN BESARAN PADA POLA SEAT
                      height="90%" // MEMBERIKAN TINGGI PADA POLA SEAT
                      fullSeat={fullSeat}
                      activeSeat={activeSeat}
                      handleSelectSeat={handleSelectSeat}
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-5 p-0 p-md-4">
                  <h4>Tickets</h4>

                  {activeSeat.length > 0 ? (
                    <div className="ticket-scrolling">
                      {dataOrder.map((item, index) => {
                        const data = item.seat.split("-");
                        const dataSeat = listBooking.filter(
                          (itemSeat) => itemSeat.section === item.seat
                        );
                        return (
                          <div className="my-3" key={index}>
                            <img
                              src={
                                data[0].includes("VVIP")
                                  ? ticketVVIP
                                  : data[0].includes("VIP")
                                  ? ticketVIP
                                  : ticketREG
                              }
                              className="ticket-icon"
                              alt="ticket icon"
                            />
                            <label className="ms-3">
                              Section {data[0]}, Row {data[1]} - $ {item.price}
                              <br />[
                              {dataSeat.length > 0
                                ? dataSeat[0].available
                                : data[0].includes("VVIP")
                                ? 10
                                : data[0].includes("VIP")
                                ? 20
                                : 30}{" "}
                              Seats Available]
                            </label>
                            <br />
                            <button
                              className="btn btn-sm btn-primary"
                              onClick={() => decreaseOrderSeat(item)}
                            >
                              -
                            </button>
                            <h5 className="d-inline mx-2">{item.qty}</h5>
                            <button
                              className="btn btn-sm btn-primary"
                              onClick={() => increaseOrderSeat(item)}
                            >
                              +
                            </button>
                            <hr />
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="d-flex align-items-center justify-content-center h-50">
                      <h6>Select Seat</h6>
                    </div>
                  )}
                  <hr />
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-primary"
                      onClick={handleOrderSeat}
                    >
                      Checkout
                    </button>
                    <button className="btn btn-danger" onClick={clearOrderSeat}>
                      Clear All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Order;
