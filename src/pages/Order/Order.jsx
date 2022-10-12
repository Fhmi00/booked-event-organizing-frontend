import { useState, useEffect } from "react";

import SeatPosition from "../../components/SeatPosition/index";

import ticketREG from "../../assets/img/reg.svg";
import ticketVIP from "../../assets/img/vip.svg";
import ticketVVIP from "../../assets/img/vvip.svg";

// LIST SECTION
// VVIP = VVIP(1...4)-1
// VIP = VIP(1...4)-(1...7)
// REG = REG(1...4)-(1...9)

export default function App() {
  const [fullSeat, setFullSeat] = useState([]); // DI GUNAKAN UNTUK MENAMPUNG SEAT YANG FULL
  const [activeSeat, setActiveSeat] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG SEAT YANG SEDANG DIPILIH
  const [dataOrder, setDataOrder] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG SEAT YANG SUDAH TERPILIH
  const [listBooking, setListBooking] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG LIST DATA SEAT YANG SUDAH DI BOOKING
  const [dataEvent, setDataEvent] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG DATA EVENT

  useEffect(() => {
    getDataBooking();
    getDataEvent();
  }, []);

  const getDataBooking = () => {
    // https://www.notion.so/Modul-Booking-293a2b5a8f2b4d09a8e1f25304592c22
    const DATADUMMY = {
      status: 200,
      message: "Success Get Data Section By Event Id",
      data: [
        {
          section: "REG1-1",
          booked: 20,
          available: 10,
          statusFull: false,
        },
        {
          section: "REG1-2",
          booked: 15,
          available: 15,
          statusFull: false,
        },
        {
          section: "REG1-3",
          booked: 0,
          available: 30,
          statusFull: false,
        },
        {
          section: "REG1-4",
          booked: 30,
          available: 0,
          statusFull: true,
        },
      ],
    };
    let dataFullSeat = DATADUMMY.data.filter((item) => item.statusFull);
    dataFullSeat = dataFullSeat.map((item) => item.section);
    setFullSeat(dataFullSeat);
    setListBooking(DATADUMMY.data);
  };

  const getDataEvent = () => {
    // https://www.notion.so/Modul-Event-413ecaad2dd04d4eb0c6c2afc4f50888
    const DATADUMMY = {
      status: 200,
      message: "Success Get Event By Id",
      data: [
        {
          eventId: "e29b8308-d23d-42f0-9071-639403c0c451",
          name: "We The Fest",
          category: "Music",
          location: "Jakarta",
          detail: "Lorem ipsum dolor amet",
          dateTimeShow: "2022-01-01 10:00:00",
          price: 150000,
        },
      ],
    };
    setDataEvent(DATADUMMY.data);
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

  const handleOrderSeat = () => {
    console.log(dataOrder);
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
    <div className="bg-grey">
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
                <button className="btn btn-primary" onClick={handleOrderSeat}>
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
  );
}

// import { FiPlus } from "react-icons/fi";
// import { FiMinus } from "react-icons/fi";

// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
// import Reg from "../../assets/img/reg.svg";
// import Vip from "../../assets/img/vip.svg";
// import Vvip from "../../assets/img/vvip.svg";

// function Order() {
//   return (
//     <>
//       <Header></Header>
//       <main className="container rounded shadow my-5 py-5 px-5">
//         <div className="row">
//           {/* SECTION 1 */}
//           <section className="col-md-7 d-flex flex-column justify-content-center right-side"></section>
//           {/* SECTION 2 */}
//           <section className="col-md-5 d-flex flex-column gap-3 my-5 px-5">
//             <div className="d-flex flex-row align-items-center justify-content-between">
//               <span className="h1">Tickets</span>
//               <div className="d-flex gap-2">
//                 <span className="price">BY PRICE</span>
//                 <i data-feather="filter" className="text-primary"></i>
//               </div>
//             </div>
//             {/* REG SECTION */}
//             <div className="d-flex justify-content-between align-items-center">
//               <div className="d-flex flex-row gap-2">
//                 <img src={Reg} alt="" />
//                 <div className="d-flex flex-column align-content-center flex-wrap">
//                   <span className="h3">Section reg, Row 1</span>
//                   <span className="h5">12 Seats available</span>
//                 </div>
//               </div>
//               <div className="d-flex flex-column align-items-center justify-content-center">
//                 <span className="h2">$15</span>
//                 <span className="h5">per person</span>
//               </div>
//             </div>
//             {/* QUANTITY SECTION */}
//             <div className="d-flex justify-content-between mb-4">
//               <span className="ms-5 ps-2 h4">Quantity</span>
//               <div className="d-flex gap-4 counter">
//                 <div className="border rounded">
//                   <FiMinus />
//                 </div>
//                 <span>0</span>
//                 <div className="border rounded">
//                   <FiPlus />
//                 </div>
//               </div>
//             </div>
//             {/* VIP SECTION */}
//             <div className="d-flex justify-content-between align-items-center">
//               <div className="d-flex flex-row gap-2">
//                 <img src={Vip} alt="" />
//                 <div className="d-flex flex-column align-content-center flex-wrap">
//                   <span className="h3">Section reg, Row 1</span>
//                   <span className="h5">12 Seats available</span>
//                 </div>
//               </div>
//               <div className="d-flex flex-column align-items-center justify-content-center">
//                 <span className="h2">$55</span>
//                 <span className="h5">per person</span>
//               </div>
//             </div>
//             {/* QUANTITY SECTION */}
//             <div className="d-flex justify-content-between mb-4">
//               <span className="ms-5 ps-2 h4">Quantity</span>
//               <div className="d-flex gap-4 counter">
//                 <div className="border rounded">
//                   <FiMinus />
//                 </div>
//                 <span>0</span>
//                 <div className="border rounded">
//                   <FiPlus />
//                 </div>
//               </div>
//             </div>
//             {/* VVIP SECTION */}
//             <div className="d-flex justify-content-between align-items-center">
//               <div className="d-flex flex-row gap-2">
//                 <img src={Vvip} alt="" />
//                 <div className="d-flex flex-column align-content-center flex-wrap">
//                   <span className="h3">Section reg, Row 1</span>
//                   <span className="h5">12 Seats available</span>
//                 </div>
//               </div>
//               <div className="d-flex flex-column align-items-center justify-content-center">
//                 <span className="h2">$50</span>
//                 <span className="h5">per person</span>
//               </div>
//             </div>
//             {/* QUANTITY SECTION */}
//             <div className="d-flex justify-content-between mb-4">
//               <span className="ms-5 ps-2 h4">Quantity</span>
//               <div className="d-flex gap-4 counter">
//                 <div className="border rounded">
//                   <FiMinus />
//                 </div>
//                 <span>0</span>
//                 <div className="border rounded">
//                   <FiPlus />
//                 </div>
//               </div>
//             </div>
//             <hr />
//             <div className="d-flex flex-row justify-content-between h2">
//               <span>Ticket Section</span>
//               <span className="text-primary">VIP</span>
//             </div>
//             <div className="d-flex flex-row justify-content-between h2">
//               <span>Quantity</span>
//               <span className="text-primary">2</span>
//             </div>
//             <div className="d-flex flex-row justify-content-between mb-5 h2">
//               <span>Total Payment</span>
//               <span className="text-primary">$70</span>
//             </div>
//             <div className="d-grid col-9 mx-auto gap-2 shadow">
//               <button className="btn btn-primary" type="button">
//                 Checkout
//               </button>
//             </div>
//           </section>
//         </div>
//       </main>
//       <Footer></Footer>
//     </>
//   );
// }

// export default Order;
