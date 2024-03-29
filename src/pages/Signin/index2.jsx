import React, { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const result = await axios.post("auth/login", form);
      localStorage.setItem("token", result.data.data.token);
      localStorage.setItem("idUser", result.data.data.userId);
      alert(result.data.msg);
      navigate("/");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container text-center">
      <h1>Login Page</h1>
      <hr />
      <input
        type="email"
        placeholder="Input your email ..."
        name="email"
        onChange={handleChangeForm}
      />{" "}
      <br />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Input your password ..."
        name="password"
        onChange={handleChangeForm}
      />{" "}
      <button onClick={handleShowPassword}>
        {showPassword ? "Hide" : "Show"} Password
      </button>
      <br />
      <button className="btn btn-primary" onClick={handleLogin}>
        Signin
      </button>
    </div>
  );
}
