import React from "react";
import moment from "moment";
import "./index.css";
import { useNavigate } from "react-router-dom";

import attends from "../../assets/img/avatarevent.png";

function CardEvent(props) {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail/${props.data.eventId}`);
  };
  console.log(props);

  return (
    <>
      {props.manageEvent ? (
        <>
          <div className="CardEvent">
            <div className="card  ">
              <img
                src={`https://res.cloudinary.com/dhohircloud/image/upload/v1663957109/${props.data.image}`}
                className="card-img-top event_image"
                alt="event1"
              />

              <div className="card-body card_image text-start text-white">
                <br />
                <p className="card-text card_text_event ">
                  {moment(props.data.dateTimeShow).format("dddd,DD MMM")}
                </p>
                <h5 className="card-title card_title ">{props.data.name}</h5>
                <div className="d-flex ">
                  <img className="attends " src={attends} alt="" />
                </div>
                <div className="d-flex gap-1">
                  <button
                    className="btn btn-primary button-manage-event"
                    onClick={handleDetail}
                  >
                    Detail
                  </button>
                  <button
                    className="btn btn-secondary button-manage-event"
                    onClick={() => props.setUpdate(props.data)}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Update
                  </button>

                  <button
                    className="btn btn-danger button-manage-event"
                    onClick={() => props.handleDelete(props.data.eventId)}
                    type="button"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="CardEvent " onClick={handleDetail}>
            <div className="card  ">
              <img
                src={`https://res.cloudinary.com/dhohircloud/image/upload/v1663957109/${props.data.image}`}
                className="card-img-top event_image"
                alt="event1"
              />

              <div className="card-body card_image text-start text-white">
                <br />
                <p className="card-text card_text_event ">
                  {moment(props.data.dateTimeShow).format("dddd,DD MMM")}
                </p>
                <h5 className="card-title card_title ">{props.data.name}</h5>
                <div className="d-flex ">
                  <img className="attends " src={attends} alt="" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {props.setUpdate ? (
        <div
          className="modal fade "
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog ">
            <div className="modal-content modal-event">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Update Event
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <main>
                  <div className="card container">
                    {props.event.message && (
                      <div
                        className={
                          "alert alert-dismissible fade show " +
                          props.event.isError
                            ? "alert-danger"
                            : "alert-primary"
                        }
                        role="alert"
                      >
                        {props.event.message}
                      </div>
                    )}

                    <form
                      onSubmit={
                        props.isUpdate ? props.handleUpdate : props.handleSubmit
                      }
                    >
                      <label className="me-3">Name</label>
                      <input
                        type="text"
                        className="w-100"
                        name="name"
                        onChange={props.handleChangeForm}
                        value={props.form.name}
                      />
                      <label className="me-3">Category</label>
                      <input
                        type="text"
                        className="w-100"
                        name="category"
                        onChange={props.handleChangeForm}
                        value={props.form.category}
                      />
                      <label className="me-3">Location</label>
                      <input
                        type="text"
                        className="w-100"
                        name="location"
                        onChange={props.handleChangeForm}
                        value={props.form.location}
                      />
                      <label className="me-3">Detail</label>
                      <input
                        type="text"
                        className="w-100"
                        name="detail"
                        onChange={props.handleChangeForm}
                        value={props.form.detail}
                      />
                      <label className="me-3 mt-3">Date Time Show</label>
                      <input
                        type="date"
                        className="w-100"
                        name="dateTimeShow"
                        onChange={props.handleChangeForm}
                        value={props.form.dateTimeShow}
                      />
                      <label className="me-3">Price</label>
                      <input
                        type="number"
                        className="w-100"
                        name="price"
                        onChange={props.handleChangeForm}
                        value={props.form.price}
                      />
                      <label className="me-3 mt-3">Input Image</label>
                      <input
                        type="file"
                        className="w-100"
                        name="image"
                        onChange={props.handleChangeForm}
                      />
                      {props.image && (
                        <img src={props.image} alt="view image" />
                      )}
                      <button type="submit" className=" my-5 btn btn-primary">
                        {props.event.isLoading ? (
                          <div
                            className="spinner-border text-white"
                            role="status"
                          >
                            <span className="sr-only"></span>
                          </div>
                        ) : (
                          <div>{props.isUpdate ? "Update" : "Save"}</div>
                        )}
                      </button>
                    </form>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

// CardEvent.propTypes = {
//   data: PropTypes.object,
//   newData: PropTypes.string,
// };

export default CardEvent;
