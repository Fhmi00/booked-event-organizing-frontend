import React, { useEffect, useState } from "react";
import "./index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import avatar from "../../assets/img/avatar.jpg";

import { useSelector, useDispatch } from "react-redux";
import {
  getDataUser,
  updateDataUser,
  updateImageUser,
} from "../../stores/actions/user";

export default function Profil() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userId = user.data.userId;
  const [form, setForm] = useState(user.data);
  const urlClodinary =
    "https://res.cloudinary.com/dhohircloud/image/upload/v1663957109/";
  const [formImage, setFormImage] = useState(user.data);
  const [image, setImage] = useState(
    `https://res.cloudinary.com/dhohircloud/image/upload/v1663957109/${user.data.image}`
  );

  useEffect(() => {
    dispatch(getDataUser(userId));
    setImage(image);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateDataUser(form)).then(() => {
      dispatch(getDataUser(userId));
    });
  };

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdateImage = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const data in formImage) {
      formData.append(data, formImage[data]);
    }
    dispatch(updateImageUser(formData)).then(() => {
      dispatch(getDataUser(userId));
    });
  };

  const handleChangeFormImage = (e) => {
    const { name, files } = e.target;
    setFormImage({ ...formImage, [name]: files[0] });
  };

  return (
    <div className="profil">
      <Header />
      <div className="d-flex">
        <Sidebar />
        <main className="main_profil">
          <h2>Profil</h2>
          <div className="row ">
            <div className="col-sm-8">
              {user.message && (
                <div
                  className={
                    "alert alert-dismissible fade show " + user.isError
                      ? "alert-success"
                      : "alert-primary"
                  }
                  role="alert"
                >
                  {user.message}
                </div>
              )}
              <form onSubmit={handleUpdate}>
                <label htmlFor="name" className="mt-2 ms-2">
                  Nama
                </label>
                <input
                  type="text"
                  className="w-100"
                  name="name"
                  onChange={handleChangeForm}
                  value={form.name}
                />
                <br />
                <label htmlFor="username" className="mt-2 ms-2">
                  Username
                </label>
                <input
                  type="text"
                  className="w-100"
                  name="username"
                  onChange={handleChangeForm}
                  value={form.username}
                />
                <br />
                <label htmlFor="" className="mt-2 ms-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-100"
                  name="email"
                  onChange={handleChangeForm}
                  value={form.email}
                />
                <label htmlFor="" className="mt-2 ms-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="w-100"
                  name="phoneNumber"
                  onChange={handleChangeForm}
                  value={form.phoneNumber}
                />
                <label htmlFor="" className="mt-2 ms-2">
                  Gender
                </label>
                <input
                  type="text"
                  className="w-100"
                  name="gender"
                  onChange={handleChangeForm}
                  value={form.gender}
                />
                <br />
                <label htmlFor="" className="mt-2 ms-2">
                  Profesion
                </label>
                <input
                  type="text"
                  className="w-100"
                  name="profession"
                  onChange={handleChangeForm}
                  value={form.profession}
                />
                <br />
                <label htmlFor="" className="mt-2 ms-2">
                  Nationality
                </label>
                <input
                  type="text"
                  className="w-100"
                  name="nationality"
                  onChange={handleChangeForm}
                  value={form.nationality}
                />
                <br />
                <label htmlFor="" className="mt-2 ms-2">
                  Birthday Date
                </label>
                <input
                  type="date"
                  className="w-100"
                  name="dateOfBirth"
                  onChange={handleChangeForm}
                  value={form.dateOfBirth}
                />
                <button type="submit" className=" my-5 btn btn-primary">
                  {user.isLoading ? (
                    <div className="spinner-border text-white" role="status">
                      <span className="sr-only"></span>
                    </div>
                  ) : (
                    <div>Save</div>
                  )}
                </button>
              </form>
            </div>
            <div className="col-sm-4 form-image-user">
              <div className="image_profil">
                {user.data.image ? (
                  <>
                    <img
                      src={urlClodinary + user.data.image}
                      alt="image"
                      className="avatar-profil"
                    />
                  </>
                ) : (
                  <img className="avatar-profil" src={avatar} alt="" />
                )}
              </div>
              <br />
              {user.message && (
                <div
                  className={
                    "alert alert-dismissible fade show " + user.isError
                      ? "alert-success"
                      : "alert-primary"
                  }
                  role="alert"
                >
                  {user.message}
                </div>
              )}
              <div className="text-center">
                <div className="button-choose text-center">
                  <input
                    type="file"
                    name="image"
                    onChange={handleChangeFormImage}
                  />
                </div>
                <button
                  onClick={handleUpdateImage}
                  type="button"
                  className=" my-5 btn btn-primary choose-photo"
                >
                  {user.isLoading ? (
                    <div className="spinner-border text-white" role="status">
                      <span className="sr-only"></span>
                    </div>
                  ) : (
                    <div>Save</div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
