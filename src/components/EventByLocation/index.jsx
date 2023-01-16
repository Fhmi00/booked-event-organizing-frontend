import React from "react";
import "./index.css";
import jakarta from "../../assets/img/jakarta.png";
import bandung from "../../assets/img/bandung.png";
import bali from "../../assets/img/bali.png";
import aceh from "../../assets/img/aceh.png";
import solo from "../../assets/img/solo.png";
import yogyakarta from "../../assets/img/yogyakarta.png";
import semarang from "../../assets/img/semarang.png";

export default function EventByLocation() {
  return (
    <section id="event_location">
      <div className="container">
        <div className="text-start">
          <button className="button_event_location mb-4">Location</button>
        </div>
        <div className=" row text-white mb-4">
          <div className="col-sm-3">
            <h4 className="text-start title_event_location ">
              Discover <br /> Events <br /> Near You
            </h4>
          </div>
          <div className="col-sm-3 text-center">
            <img className="mb-2" src={jakarta} alt="jakarta" />
            <p>jakarta</p>
          </div>
          <div className="col-sm-3 text-center">
            <img className="mb-2" src={bandung} alt="bandung" />
            <p>Bandung</p>
          </div>
          <div className="col-sm-3 text-center">
            <img className="mb-2" src={bali} alt="bali" />
            <p>Bali</p>
          </div>
        </div>

        <div className=" row text-white">
          <div className="col-sm-3 text-center">
            <img className="mb-2" src={aceh} alt="aceh" />
            <p>Aceh</p>
          </div>
          <div className="col-sm-3 text-center">
            <img className="mb-2" src={solo} alt="solo" />
            <p>Solo</p>
          </div>
          <div className="col-sm-3 text-center">
            <img className="mb-2" src={yogyakarta} alt="yogyakarta" />
            <p>Yogyakarta</p>
          </div>
          <div className="col-sm-3 text-center">
            <img className="mb-2" src={semarang} alt="semarang" />
            <p>Semarang</p>
          </div>
        </div>
        <div className=" text-center mt-5">
          <button className="see_all_location">
            <h6>See All</h6>
          </button>
        </div>
      </div>
    </section>
  );
}
