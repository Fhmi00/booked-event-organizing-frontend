import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { useSelector, useDispatch } from "react-redux";
import { getDataUser, updatePassword } from "../../stores/actions/user";
import Sidebar from "../../components/Sidebar";

export default function Ressetpassword() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userId = user.data.userId;
  const [form, setForm] = useState(user.data);

  useEffect(() => {
    dispatch(getDataUser(userId));
  }, []);

  const handleUpdate = async (e) => {
    try {
      e.preventDefault();
      await dispatch(updatePassword(form));
      alert(user.message);
    } catch (error) {
      alert(error);
    }
  };

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="profil">
      <Header />
      <div className="d-flex">
        <Sidebar />
        <main className="main_profil">
          <div className="card container p-4">
            <h2>Change Password</h2>
            <hr />
            {user.message && (
              <div
                className={
                  "alert alert-dismissible fade show " + user.isError
                    ? "alert-danger"
                    : "alert-primary"
                }
                role="alert"
              >
                {user.message}
              </div>
            )}

            <form onSubmit={handleUpdate}>
              <label className="me-3">Old Password</label>
              <input
                type="password"
                className="w-100"
                name="oldPassword"
                onChange={handleChangeForm}
                value={form.oldPassword}
              />
              <label className="me-3 mt-3">New Password</label>
              <input
                type="password"
                className="w-100"
                name="newPassword"
                onChange={handleChangeForm}
                value={form.newPassword}
              />
              <label className="me-3 mt-3">Confirm Password</label>
              <input
                type="password"
                className="w-100"
                name="confirmPassword"
                onChange={handleChangeForm}
                value={form.confirmPassword}
              />

              <button type="submit" className="w-100 my-5 btn btn-primary">
                {user.isLoading ? (
                  <div className="spinner-border text-white" role="status">
                    <span className="sr-only"></span>
                  </div>
                ) : (
                  <div>{"Save"}</div>
                )}
              </button>
            </form>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
