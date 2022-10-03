import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { FiSearch } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import Badge from "react-bootstrap/Badge";
import Attendee from "../../assets/img/attendees.png";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Landingbg from "../../assets/img/landingbg.png";
import Event1 from "../../assets/img/bitmap.png";

function LandingPage() {
  return (
    <>
      <Header></Header>
      <header className="card text">
        <img src={Landingbg} alt="landingbg" />
        <div className="card-img-overlay">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 d-flex flex-column pt-5 mt-5">
                <span className="mb-5 h1">Find events you love with our</span>
                <div className="bg-white">
                  <InputGroup className="px-2 py-3">
                    <FiSearch />
                    <Form.Control aria-label="First name" />
                    <Form.Control aria-label="Last name" />
                  </InputGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="container-fluid">
        <div className="row">
          <div className="col-md-12 d-flex flex-column align-items-center justify-content-center mt-5 py-5 gap-5">
            <Badge pill bg="light text-danger">
              ——— EVENT
            </Badge>{" "}
            <span className="landing-event">Events For You</span>
            <div className="d-flex flex-row gap-5">
              <Button variant="primary">
                <FiArrowLeft />
              </Button>{" "}
              <div className="d-flex flex-column align-items-center rounded-4 px-3 py-2 landing-days">
                <p>13</p>
                <p>Mon</p>
              </div>
              <div className="d-flex flex-column align-items-center rounded-4 px-3 py-2 landing-days">
                <p>14</p>
                <p>Tue</p>
              </div>
              <div className="d-flex flex-column align-items-center rounded-4 px-3 py-2 landing-days">
                <p>15</p>
                <p>Wed</p>
              </div>
              <div className="d-flex flex-column align-items-center rounded-4 px-3 py-2 landing-days">
                <p>16</p>
                <p>Thu</p>
              </div>
              <div className="d-flex flex-column align-items-center rounded-4 px-3 py-2 landing-days">
                <p>17</p>
                <p>Fri</p>
              </div>
              <Button variant="primary">
                <FiArrowRight />
              </Button>{" "}
            </div>
            <div className="d-flex gap-4">
              <div className="border-0 card text">
                <img src={Event1} className="h-100 rounded-5" alt="event1" />
                <div className="card-img-overlay d-flex flex-column justify-content-end mb-4 mx-2 text-white">
                  <h6>Wed, 15 Nov, 4:00 PM</h6>
                  <h2>Sights and Sounds Exhibition</h2>
                  <img src={Attendee} className="w-25" alt="atende" />
                </div>
              </div>
              <div className="border-0 card text">
                <img src={Event1} className="h-100 rounded-5" alt="event1" />
                <div className="card-img-overlay d-flex flex-column justify-content-end mb-4 mx-2 text-white">
                  <h6>Wed, 15 Nov, 4:00 PM</h6>
                  <h2>Sights and Sounds Exhibition</h2>
                  <img src={Attendee} className="w-25" alt="atende" />
                </div>
              </div>
              <div className="border-0 card text">
                <img src={Event1} className="h-100 rounded-5" alt="event1" />
                <div className="card-img-overlay d-flex flex-column justify-content-end mb-4 mx-2 text-white">
                  <h6>Wed, 15 Nov, 4:00 PM</h6>
                  <h2>Sights and Sounds Exhibition</h2>
                  <img src={Attendee} className="w-25" alt="atende" />
                </div>
              </div>
              <div className="border-0 card text">
                <img src={Event1} className="h-100 rounded-5" alt="event1" />
                <div className="card-img-overlay d-flex flex-column justify-content-end mb-4 mx-2 text-white">
                  <h6>Wed, 15 Nov, 4:00 PM</h6>
                  <h2>Sights and Sounds Exhibition</h2>
                  <img src={Attendee} className="w-25" alt="atende" />
                </div>
              </div>
              <div className="border-0 card text">
                <img src={Event1} className="h-100 rounded-5" alt="event1" />
                <div className="card-img-overlay d-flex flex-column justify-content-end mb-4 mx-2 text-white">
                  <h6>Wed, 15 Nov, 4:00 PM</h6>
                  <h2>Sights and Sounds Exhibition</h2>
                  <img src={Attendee} className="w-25" alt="atende" />
                </div>
              </div>
            </div>
            <Button variant="outline-primary text-primary col-3">
              See All{" "}
            </Button>{" "}
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default LandingPage;
