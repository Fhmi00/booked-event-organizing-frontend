import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Reg from "../../assets/img/reg.svg";
import Vip from "../../assets/img/vip.svg";
import Vvip from "../../assets/img/vvip.svg";

function Order() {
  return (
    <>
      <Header></Header>
      <main className="container rounded shadow my-5 py-5 px-5">
        <div className="row">
          {/* SECTION 1 */}
          <section className="col-md-7 d-flex flex-column justify-content-center right-side"></section>
          {/* SECTION 2 */}
          <section className="col-md-5 d-flex flex-column gap-3 my-5 px-5">
            <div className="d-flex flex-row align-items-center justify-content-between">
              <span className="h1">Tickets</span>
              <div className="d-flex gap-2">
                <span className="price">BY PRICE</span>
                <i data-feather="filter" className="text-primary"></i>
              </div>
            </div>
            {/* REG SECTION */}
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex flex-row gap-2">
                <img src={Reg} alt="" />
                <div className="d-flex flex-column align-content-center flex-wrap">
                  <span className="h3">Section reg, Row 1</span>
                  <span className="h5">12 Seats available</span>
                </div>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <span className="h2">$15</span>
                <span className="h5">per person</span>
              </div>
            </div>
            {/* QUANTITY SECTION */}
            <div className="d-flex justify-content-between mb-4">
              <span className="ms-5 ps-2 h4">Quantity</span>
              <div className="d-flex gap-4 counter">
                <div className="border rounded">
                  <FiMinus />
                </div>
                <span>0</span>
                <div className="border rounded">
                  <FiPlus />
                </div>
              </div>
            </div>
            {/* VIP SECTION */}
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex flex-row gap-2">
                <img src={Vip} alt="" />
                <div className="d-flex flex-column align-content-center flex-wrap">
                  <span className="h3">Section reg, Row 1</span>
                  <span className="h5">12 Seats available</span>
                </div>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <span className="h2">$55</span>
                <span className="h5">per person</span>
              </div>
            </div>
            {/* QUANTITY SECTION */}
            <div className="d-flex justify-content-between mb-4">
              <span className="ms-5 ps-2 h4">Quantity</span>
              <div className="d-flex gap-4 counter">
                <div className="border rounded">
                  <FiMinus />
                </div>
                <span>0</span>
                <div className="border rounded">
                  <FiPlus />
                </div>
              </div>
            </div>
            {/* VVIP SECTION */}
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex flex-row gap-2">
                <img src={Vvip} alt="" />
                <div className="d-flex flex-column align-content-center flex-wrap">
                  <span className="h3">Section reg, Row 1</span>
                  <span className="h5">12 Seats available</span>
                </div>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <span className="h2">$50</span>
                <span className="h5">per person</span>
              </div>
            </div>
            {/* QUANTITY SECTION */}
            <div className="d-flex justify-content-between mb-4">
              <span className="ms-5 ps-2 h4">Quantity</span>
              <div className="d-flex gap-4 counter">
                <div className="border rounded">
                  <FiMinus />
                </div>
                <span>0</span>
                <div className="border rounded">
                  <FiPlus />
                </div>
              </div>
            </div>
            <hr />
            <div className="d-flex flex-row justify-content-between h2">
              <span>Ticket Section</span>
              <span className="text-primary">VIP</span>
            </div>
            <div className="d-flex flex-row justify-content-between h2">
              <span>Quantity</span>
              <span className="text-primary">2</span>
            </div>
            <div className="d-flex flex-row justify-content-between mb-5 h2">
              <span>Total Payment</span>
              <span className="text-primary">$70</span>
            </div>
            <div className="d-grid col-9 mx-auto gap-2 shadow">
              <button className="btn btn-primary" type="button">
                Checkout
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Order;
