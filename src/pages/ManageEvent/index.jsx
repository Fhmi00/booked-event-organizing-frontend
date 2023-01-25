import React, { useEffect, useState } from "react";
import "./index.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar";
import CardEvent from "../../components/CardEvent";

import { useSelector, useDispatch } from "react-redux";
import {
  getDataEvent,
  createDataEvent,
  updateDataEvent,
  deleteDataEvent,
} from "../../stores/action/event";

export default function ManageEvent() {
  const dispatch = useDispatch();
  const event = useSelector((state) => state.event);

  const [form, setForm] = useState({});
  const [image, setImage] = useState("");
  const [eventId, setEventId] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getDataEvent(page));
  }, [page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // HANYA DIGUNAKAN KETIKA INPUT ADA YANG BERTIPE DATA FILE
    const formData = new FormData();
    for (const data in form) {
      formData.append(data, form[data]);
    }
    // formData.append("name", "aaa")
    // formData.append("price", "123")
    // formData.append("image", File)

    dispatch(createDataEvent(formData)).then(() => {
      dispatch(getDataEvent());
      resetForm();
      setTimeout(() => {
        dispatch({ type: "RESET_MESSAGE" });
      }, 3000);
    });
  };

  const setUpdate = (data) => {
    setIsUpdate(true);
    setEventId(data.eventId);
    setForm({
      name: data.name,
      category: data.category,
      location: data.location,
      detail: data.detail,
      dateTimeShow: data.dateTimeShow,
      price: data.price,
      image: data.image,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const data in form) {
      formData.append(data, form[data]);
    }

    dispatch(updateDataEvent(formData, eventId)).then(() => {
      dispatch(getDataEvent());
      setIsUpdate(false);
      resetForm();
      setTimeout(() => {
        dispatch({ type: "RESET_MESSAGE" });
      }, 30000);
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteDataEvent(id)).then(() => {
      dispatch(getDataEvent());
    });
  };

  const resetForm = () => {
    setForm({
      name: "",
      category: "",
      location: "",
      detail: "",
      dateTimeShow: "",
      price: "",
      image: "",
    });
    setImage("");
  };

  const handleChangeForm = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setForm({ ...form, [name]: files[0] });
      setImage(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }
  };
  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div id="manage_event">
      <Header />
      <div className="d-flex">
        <Sidebar />
        <main id="main-manage-event">
          <div className="d-flex">
            <h2>Manage Event</h2>

            <button
              type="button"
              className="btn btn-primary ms-auto"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Create Event
            </button>

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
                      Create Event
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
                      <div className="card container p-4">
                        <hr />
                        {event.message && (
                          <div
                            className={
                              "alert alert-dismissible fade show " +
                              event.isError
                                ? "alert-danger"
                                : "alert-primary"
                            }
                            role="alert"
                          >
                            {event.message}
                          </div>
                        )}

                        <form onSubmit={isUpdate ? handleUpdate : handleSubmit}>
                          <label className="me-3">Name</label>
                          <input
                            type="text"
                            className="w-100"
                            name="name"
                            onChange={handleChangeForm}
                            value={form.name}
                          />
                          <label className="me-3">Category</label>
                          <input
                            type="text"
                            className="w-100"
                            name="category"
                            onChange={handleChangeForm}
                            value={form.category}
                          />
                          <label className="me-3">Location</label>
                          <input
                            type="text"
                            className="w-100"
                            name="location"
                            onChange={handleChangeForm}
                            value={form.location}
                          />
                          <label className="me-3">Detail</label>
                          <input
                            type="text-area"
                            className="w-100"
                            name="detail"
                            onChange={handleChangeForm}
                            value={form.detail}
                          />
                          <label className="me-3 mt-3">Date Time Show</label>
                          <input
                            type="date"
                            className="w-100"
                            name="dateTimeShow"
                            onChange={handleChangeForm}
                            value={form.dateTimeShow}
                          />
                          <label className="me-3">Price</label>
                          <input
                            type="number"
                            className="w-100"
                            name="price"
                            onChange={handleChangeForm}
                            value={form.price}
                          />
                          <label className="me-3 mt-3">Input Image</label>
                          <input
                            type="file"
                            className="w-100"
                            name="image"
                            onChange={handleChangeForm}
                          />

                          <button
                            type="submit"
                            className=" my-5 btn btn-primary"
                          >
                            {event.isLoading ? (
                              <div
                                className="spinner-border text-white"
                                role="status"
                              >
                                <span className="sr-only"></span>
                              </div>
                            ) : (
                              <div>{isUpdate ? "Update" : "Save"}</div>
                            )}
                          </button>
                          {image && (
                            <img
                              className="view-image text-center ms-5"
                              src={image}
                              alt="view image"
                            />
                          )}
                        </form>
                      </div>
                    </main>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <main className="main-manage-event d-flex gap-3 my-5">
            {event.data.length > 0 ? (
              event.data.map((item) => (
                <div key={item.eventId}>
                  <CardEvent
                    handleDelete={handleDelete}
                    form={form}
                    image={image}
                    event={event}
                    data={item}
                    handleChangeForm={handleChangeForm}
                    setUpdate={setUpdate}
                    manageEvent={true}
                  />
                </div>
              ))
            ) : (
              <h1>Data Not Found !</h1>
            )}
          </main>
          <div className="d-flex gap-2 justify-content-center  my-5">
            <button className="btn btn-primary" onClick={handlePrevPage}>
              &lt;
            </button>
            <button className="btn btn-primary" onClick={handleNextPage}>
              &gt;
            </button>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
