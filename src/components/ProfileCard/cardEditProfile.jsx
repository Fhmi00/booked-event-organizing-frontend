import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import moment from "moment";

export default function CardEditProfile() {
  return (
    <div className="col-8 mt-5 border rounded-4 shadow">
      <div className="row">
        <div className="col-7 my-5 px-5 d-flex flex-column gap-4">
          <span>Profile</span>
          <div className="input-group">
            <span className="col-4">Name</span>
            <input
              type="text"
              className="form-control rounded-3"
              placeholder=""
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group">
            <span className="col-4">Username</span>
            <input
              type="text"
              className="form-control border-0"
              placeholder=""
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group">
            <span className="col-4">Phone Number</span>
            <input
              type="text"
              className="form-control border-0"
              placeholder=""
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group">
            <span className="col-4">Gender</span>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Female
              </label>
            </div>
          </div>
          <div className="input-group">
            <span className="col-4">Profession</span>
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-dark"
                className="px-5"
                id="dropdown-basic"
              >
                Entrepreneur
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="input-group">
            <span className="col-4">Nationality</span>
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-dark"
                className="px-5"
                id="dropdown-basic"
              >
                Indonesia
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="input-group">
            <span className="col-4">Birthday Date</span>
            <div>{moment().add(10, "days").calendar()}</div>
          </div>
          <button className="btn btn-primary col-6 py-2 mt-3">Save</button>
        </div>

        <div className="col-5 d-flex flex-column justify-content-center px-5 gap-3">
          <span>PP</span>
          <button className="btn btn-outline-primary mb-3">Select file</button>
          <span>Image size: max, 2 MB</span>
          <span>Image formats: JPG, JPEG, PNG</span>
        </div>
      </div>
    </div>
  );
}
