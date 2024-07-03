import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ObjectHasValue } from "../utils/ObjectHasValue.js";
import {  toast } from "react-toastify";


// const BASE_URL = "http://localhost:9091/users/users/createUser";
const BASE_URL = "users/users/createUser";

const SignUp = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    fullName: "",
    email: "",
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

  const handleRegister = async (e) => {
    e.preventDefault();
    const hasValue = ObjectHasValue(user);
    if (hasValue) {
      setLoading(true);
      await axios
        .post(BASE_URL, user)
        .then((res) => {
          console.log(res.data);
          setLoading(false)
          toast.success(res.data);
          setTimeout(()=>{
            return navigate("/sign-in")

          },3000)
          
        })
        .catch((err) => {
          setLoading(false)
          console.log(err.response.data.message);
          toast.error(err.response.data.message);
        });
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
                      <h2 className="h3">Registration</h2>
                      <h3 className="fs-6 fw-normal text-secondary m-0">
                        Enter your details to register
                      </h3>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleRegister}>
                  <div className="row gy-3 overflow-hidden">
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="fullName"
                          id="fullName"
                          placeholder="Full Name"
                          onChange={handleInputChange}
                          // value={fullName}
                          required
                        />
                        <label className="form-label">Full Name</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="name@example.com"
                          onChange={handleInputChange}
                          required
                        />
                        <label className="form-label">Email</label>
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
                        <label className="form-label">Password</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          name="iAgree"
                          id="iAgree"
                          required
                        />
                        <label htmlFor="" className="form-check-label text-secondary">
                          I agree to the{" "}
                        
                          <a
                            href="#!"
                            className="link-primary text-decoration-none"
                          >
                            terms and conditions
                          </a>
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          className="btn btn-primary btn-lg"
                          type="submit"
                        >
                          {loading && loading ? "loading.." : "Sign Up"}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end mt-4">
                      <p className="m-0 text-secondary text-center">
                        Already have an account?{" "}
                        <Link
                          to="/sign-in"
                          className="link-primary text-decoration-none"
                          // onClick={()=>navigate(<SignIn/>)}
                        >
                          Sign In
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default SignUp;
