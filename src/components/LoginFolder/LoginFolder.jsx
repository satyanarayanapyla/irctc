import React, { useState } from "react";
import "./LoginFolder.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AcademicHub from "../../assets/AcademicHub.png";

function LoginFolder() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username && password) {
      const role = "admin"; // mock role
      const accessToken = "AccessToken1234";

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("username", username);
      localStorage.setItem("role", role);

      toast.success("Login Successful");
      navigate("/trains");
    } else {
      toast.error("Please enter username and password");
    }
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleLogin}>
        <div className="logo-container">
          <img src={AcademicHub} alt="Logo" className="logo-image" />
        </div>
        <h2 className="login-title">Welcome Back</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button
            type="button"
            className="secondary-btn"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
          <button type="submit" className="primary-btn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginFolder;
