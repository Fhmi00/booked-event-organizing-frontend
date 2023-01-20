import React from "react";
import moment from "moment";
import { getDataEventById } from "../../stores/action/event";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { deleteWishlist, getDataWishlist } from "../../stores/action/wishlist";

export default function ListWishlist(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dateShow = moment(props.data.event?.dateTimeShow).format(
    "dddd, DD MMM"
  );
  const dateOnly = moment(props.data.event?.dateTimeShow).format("DD");
  const monthOnly = moment(props.data.event?.dateTimeShow).format("ddd");
  const wishlistId = localStorage.getItem("wishlistId");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    getDataEventById(props.data.eventId);
  }, []);

  const handleDetail = () => {
    navigate(`/detail/${props.data.eventId}`);
  };

  const handleGetId = () => {
    localStorage.setItem("wishlistId", props.data.wishlistId);
  };

  const handleDelete = () => {
    dispatch(deleteWishlist(wishlistId)).then(() => {
      dispatch(getDataWishlist(userId));
      alert("Delete Wishlist Success");
      window.location.reload();
    });
  };

  return (
    <div>
      <div className="row">
        <div className="col-sm-2 d-flex justify-content-center align-items-center">
          <div className="text-center border px-4 py-4 rounded-4 shadow">
            <div className="text-danger fw-bold">{dateOnly}</div>
            <div className="text-primary fw-bold">{monthOnly}</div>
          </div>
        </div>
        <div className="col-sm-10">
          <div className="h4 mb-3">{props.data.event.name}</div>
          <div className="small text-muted mb-1">
            {props.data.event.location}
          </div>
          <div className="small text-muted mb-2">{dateShow}</div>
          <button className="btn btn-sm text-primary" onClick={handleDetail}>
            Detail
          </button>
          <button
            className="btn btn-sm text-danger"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={handleGetId}
          >
            Delete
          </button>
        </div>
      </div>
      <hr />

      {/* Modal Delete */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="deleteEventModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-danger"
                id="deleteEventModalLabel"
              >
                Warning!
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p> Are you sure want delete the wishlist? </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-primary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
