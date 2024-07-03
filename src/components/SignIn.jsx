import React, { useState } from "react";
import { ObjectHasValue } from "../utils/ObjectHasValue";
import axios from "axios";
import {  toast } from "react-toastify";

import { useNavigate } from "react-router-dom";


const BASE_URL = "/users/login";

const SignIn = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setUser((prev) => {
      prev[fieldName] = fieldValue;

      return { ...prev };
    });
  };

  const loginUser = (e) => {
    e.preventDefault();
    if (ObjectHasValue(user)) {
      const params = new URLSearchParams({
        username: user.username,
        password: user.password,
      }).toString();
      console.log(params)
      axios
        .post(`${BASE_URL}?${params}`)
        .then((res) => {
          console.log(res.data);
          localStorage.setItem('authToken', res.data);
          toast.success("User Logged In")
          navigate("/private")
        })
        .catch((err) => {
          console.log(err.response.data.error)
          toast.error(err.response.data.error);
        });
    } else {
      console.log("please Enter all Field");
    }
  };

  return (
    <section className="bg-primary py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-12 col-md-6 col-xl-7">
            <div className="d-flex justify-content-center text-bg-primary">
              <div className="col-12 col-xl-9 mt-4">
                <img
                  className="img-fluid rounded mb-4"
                  loading="lazy"
                  src="img/hero1.png"
                  alt="Logo"
                  width="245"
                  height="80"
                />
                <img
                  className="img-fluid rounded mb-4"
                  loading="lazy"
                  src="img/hero1.png"
                  alt="Logo"
                  width="245"
                  height="80"
                />
                <hr className="border-primary-subtle mb-4" />
                <h2 className="h1 mb-4">
                  Tifin Smart provides a high quality expereince with food
                  quality.
                </h2>
                <p className="lead mb-5">
                  Register with us and get the refined and tunned food facility
                  with us smartly with "Tifin Smart".
                </p>
                <div className="text-endx">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className="bi bi-grip-horizontal"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-5">
            <div className="card border-0 rounded-5">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <div className="row">
                  <div className="col-12">
                    <div className="mb-4">
                      <h2 className="h3">Login</h2>
                      <h3 className="fs-6 fw-normal text-secondary m-0">
                        Enter your details to login
                      </h3>
                    </div>
                  </div>
                </div>
                <form action="#!" onSubmit={loginUser}>
                  <div className="row gy-3 overflow-hidden">
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="username"
                          className="form-control"
                          name="username"
                          onChange={handleInputChange}
                          id="username"
                          placeholder="name@example.com"
                          required
                        />
                        <label htmlFor="username" className="form-label">
                          Username
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          id="password"
                          
                          onChange={handleInputChange}
                          placeholder="Password"
                          required
                        />
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          className="btn btn-primary btn-lg"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default SignIn;
