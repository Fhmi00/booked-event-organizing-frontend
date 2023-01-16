import React from "react";
import "./index.css";
import event1 from "../../assets/img/event.png";
import attends from "../../assets/img/avatarevent.png";

export default function EventByCategory() {
  return (
    <section id="Event_By_Category mb-5">
      <div className="container text-center Event_By_Category ">
        <div className="text-center">
          <button className="button_event">Category</button>
          <h3 className="mb-5">Browse Events By Category</h3>
        </div>
        <div>
          <ul className="d-flex justify-content-center list_category gap-5">
            <li>
              <a href="#">Music</a>
            </li>
            <li>
              <a href="#">Arts</a>
            </li>
            <li>
              <a href="#">Outdoors</a>
            </li>
            <li>
              <a href="#">Whorkshop</a>
            </li>
            <li>
              <a href="#">Sport</a>
            </li>
            <li>
              <a href="#">Festival</a>
            </li>
            <li>
              <a href="#">Fashion</a>
            </li>
          </ul>
        </div>
        <div className="container_event d-flex justify-content-center gap-4 mt-5">
          <button
            className="btn event_button_back"
            type="submit"
            id="button-addon2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-arrow-right-square-fill "
              viewBox="0 0 16 16"
            >
              <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
            </svg>
          </button>
          <div className="card  ">
            <img
              src={event1}
              className="card-img-top event_image"
              alt="event1"
            />
            <div className="card_image_by_category">
              <div className="card-body card_img_category text-start text-white">
                <br />
                <p className="card-text card_text_event mt-5">
                  Wed, 15 Nov, 4:00 PM
                </p>
                <h5 className="card-title  ">Sights & Sounds Exhibition</h5>
                <img className="mt-4" src={attends} alt="" />
              </div>
            </div>
          </div>
          <div className="card  ">
            <img
              src={event1}
              className="card-img-top event_image"
              alt="event1"
            />
            <div className="card_image_by_category">
              <div className="card-body card_img_category text-start text-white">
                <br />
                <p className="card-text card_text_event mt-5">
                  Wed, 15 Nov, 4:00 PM
                </p>
                <h5 className="card-title  ">Sights & Sounds Exhibition</h5>
                <img className="mt-4" src={attends} alt="" />
              </div>
            </div>
          </div>
          <div className="card  ">
            <img
              src={event1}
              className="card-img-top event_image"
              alt="event1"
            />
            <div className="card_image_by_category">
              <div className="card-body card_img_category text-start text-white">
                <br />
                <p className="card-text card_text_event mt-5">
                  Wed, 15 Nov, 4:00 PM
                </p>
                <h5 className="card-title  ">Sights & Sounds Exhibition</h5>
                <img className="mt-4" src={attends} alt="" />
              </div>
            </div>
          </div>
          <button
            className="btn "
            type="submit"
            id="button-addon2 event_button_next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="blue"
              className="bi bi-arrow-right-square-fill "
              viewBox="0 0 16 16"
            >
              <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
