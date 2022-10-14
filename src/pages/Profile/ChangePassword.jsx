import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SideMenu from "../../components/ProfileCard/sideDropdown";
export default function ChangePassword() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <SideMenu />
          <div className="col-8 border px-5 my-5 py-5 d-flex flex-column gap-4">
            <span>Change Password</span>
            <div className="input-group mt-3">
              <span className="col-4">Old Password</span>
              <input
                type="password"
                className="form-control rounded-3"
                placeholder=""
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group">
              <span className="col-4">New Password</span>
              <input
                type="password"
                className="form-control rounded-3"
                placeholder=""
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group">
              <span className="col-4">Confirm Password</span>
              <input
                type="password"
                className="form-control rounded-3"
                placeholder=""
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <button className="btn btn-primary col-12 my-4 py-2 ">
              Update
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
