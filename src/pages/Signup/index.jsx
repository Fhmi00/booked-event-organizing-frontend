import bg from "../../assets/img/people.png";
import logo from "../../assets/img/logo.png";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const result = await axios.post("auth/register", form);
      localStorage.setItem("token", result.data.data.token);
      localStorage.setItem("idUser", result.data.data.id);
      console.log(result);
      alert(result.data.msg);
      navigate("/signin");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <main className="container-fluid">
      <div className="row">
        <section className="col-md-7 d-none d-md-flex bg-primary d-flex justify-content-center align-items-center vh-100">
          <img src={bg} className="mx-auto my-5 d-block w-50" alt="bg" />
        </section>
        <section className="col-md-4 px-5 d-flex justify-content-center align-items-center">
          <div className="container d-flex flex-column gap-2 my-auto mx-auto">
            <img src={logo} className="w-25 mb-4 mt-5" alt="logo" />
            <span className="mb-3 auth-h1">Sign Up</span>
            <p className="mb-5 auth-h3">Already have an account? Log In</p>
            <div className="input-group mb-3 auth-h4">
              <input
                type="text"
                className="form-control auth-input"
                placeholder="Username"
                name="username"
                onChange={handleChangeForm}
              />
            </div>
            <div className="input-group mb-3 auth-h4">
              <input
                type="email"
                className="form-control auth-input"
                placeholder="Email"
                name="email"
                onChange={handleChangeForm}
              />
            </div>
            <div className="input-group mb-4 auth-h4">
              <input
                type="password"
                className="form-control auth-input"
                placeholder="Password"
                name="password"
                onChange={handleChangeForm}
              />
            </div>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Accept terms and condition" />
            </Form.Group>
            <div className="d-grid gap-2">
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleLogin}
              >
                Sign Up
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Signup;
