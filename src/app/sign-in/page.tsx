"use client";
import { useState } from "react";
import "boxicons/css/boxicons.min.css";
import "./main.css";
import { useRouter } from "next/navigation";
import { boolean, object } from "zod";
import { useAppDispatch } from '@/redux/hooks';
import { login, UserRole } from '@/redux/features/authSlice';

const Login = () => {
  const [userId, setUserId] = useState("");
  const [pw, setPw] = useState<string>("");
  const [state, setState] = useState<string>("Login");
  const router = useRouter();
  const [lgin, setLgin] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  function loginn() {
    const temp = userId.at(0)?.toLowerCase();
    if (temp === "a") {
      setLgin(true);
      dispatch(login({ userId, userRole: UserRole.ADMIN }));
    } else if (temp === "s") {
      setLgin(true);
      dispatch(login({ userId, userRole: UserRole.STUDENT }));
    } else if (temp === "t") {
      setLgin(true);
      dispatch(login({ userId, userRole: UserRole.TEACHER }));
    } else if (temp === "p") {
      setLgin(true);
      dispatch(login({ userId, userRole: UserRole.PARENT }));
    } else {
      alert("다시 입력해주세요");
      setLgin(false);
      return;
    }

    if (lgin && pw) {
      if (temp === "a") {
        router.push("/admin");
      } else if (temp === "s") {
        router.push("/student");
      } else if (temp === "t") {
        router.push("/teacher");
      } else if (temp === "p") {
        router.push("/parent");
      }
    } else console.log("다시 입력하여 주십시오");
  }

  const enter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      loginn();
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
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
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
          <button className="btn" onClick={loginn}>
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

export default Login;
