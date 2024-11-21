"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, UserRole } from "@/app/store/slices/authSlice";
import "boxicons/css/boxicons.min.css";
import "@/app/main.css";

function login() {
  alert("아직 공사중입니다.");
}

const Homepage = () => {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [state, setState] = useState<string>("Login");

  const enter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      login();
    }
  };
  return (
    <div className="login">
      <div className="wraaper">
        <div className="form">
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="username"
              value={id}
              onChange={(e) => setId(e.target.value)}
              onKeyDown={enter}
            />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              onKeyDown={enter}
            />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a onClick={() => setState("FIND")}>Forget Password ?</a>
          </div>
          <button className="btn" onClick={login}>
            Login
          </button>
          <div className="register-link">
            <p>
              Don't have a account? <a href="#">Register</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
