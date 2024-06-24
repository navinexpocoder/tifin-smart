/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <div class="container-fluid bg-white p-0">
        {/* <!-- Spinner Start -->
        <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <!-- Spinner End --> */}

        <div class="container-fluid position-relative p-0">
          <Header />

          <div class="container-fluid py-5 bg-dark hero-header mb-5">
            <div class="container text-center my-5 pt-5 pb-4">
              <h1 class="display-3 text-white mb-3 animated slideInDown">
                About Us
              </h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center text-uppercase">
                  <li class="breadcrumb-item">Home</li>
                  <li class="breadcrumb-item">Pages</li>
                  <li
                    class="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    About
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-6 text-start">
                    <img
                      className="img-fluid rounded w-100 wow zoomIn"
                      data-wow-delay="0.1s"
                      src="img/A_2.webp"
                    />
                  </div>
                  <div className="col-6 text-start">
                    <img
                      className="img-fluid rounded w-75 wow zoomIn"
                      data-wow-delay="0.3s"
                      src="img/A_1.jpeg"
                      style={{ marginTop: "25%" }}
                    />
                  </div>
                  <div className="col-6 text-end">
                    <img
                      className="img-fluid rounded w-75 wow zoomIn"
                      data-wow-delay="0.5s"
                      src="img/A_3.webp"
                    />
                  </div>
                  <div className="col-6 text-end">
                    <img
                      className="img-fluid rounded w-100 wow zoomIn"
                      data-wow-delay="0.7s"
                      src="img/A_5.png"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                  About Us
                </h5>
                <h1 className="mb-4">
                  Welcome to{" "}
                  <i className="fa fa-utensils text-primary me-2"></i>Tifin
                  Smart
                </h1>
                <p className="mb-4">
                  Tiffin Smart Services is all about making your life easier
                  when it comes to food. We prepare tasty meals and deliver them
                  right to your door. Our team of chefs creates a wide variety
                  of dishes using fresh and high-quality ingredients. We
                  understand that everyone has different tastes and dietary
                  needs, so we make sure to offer options that suit everyone.
                </p>
                <p className="mb-4">
                  Ordering from us is simple, and you can trust us to bring your
                  meal on time. Whether you're a busy professional or a family
                  looking for convenient and delicious food, Tiffin Smart
                  Services is here to provide you with nutritious and yummy
                  meals without any hassle. Let us take care of your meals so
                  you can focus on enjoying them!
                </p>
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center border-start border-5 border-primary px-3"></div>
                  </div>
                </div>
                <Link className="btn btn-primary py-3 px-5 mt-2" href="">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid pt-5 pb-3">
          <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
              {/* <h5 class="section-title ff-secondary text-center text-primary fw-normal">Team Members</h5> */}
              {/* <h1 class="mb-5">Our Master Chefs</h1> */}
            </div>
            {/* <div class="row g-4">
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="team-item text-center rounded overflow-hidden">
                            <div class="rounded-circle overflow-hidden m-4">
                                <img class="img-fluid" src="img/team-1.jpg" alt=""/>
                            </div>
                            <h5 class="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div class="d-flex justify-content-center mt-3">
                                <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="team-item text-center rounded overflow-hidden">
                            <div class="rounded-circle overflow-hidden m-4">
                                <img class="img-fluid" src="img/team-2.jpg" alt=""/>
                            </div>
                            <h5 class="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div class="d-flex justify-content-center mt-3">
                                <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="team-item text-center rounded overflow-hidden">
                            <div class="rounded-circle overflow-hidden m-4">
                                <img class="img-fluid" src="img/team-3.jpg" alt=""/>
                            </div>
                            <h5 class="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div class="d-flex justify-content-center mt-3">
                                <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div class="team-item text-center rounded overflow-hidden">
                            <div class="rounded-circle overflow-hidden m-4">
                                <img class="img-fluid" src="img/team-4.jpg" alt=""/>
                            </div>
                            <h5 class="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div class="d-flex justify-content-center mt-3">
                                <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div> */}
          </div>
        </div>

        <Footer />

        <Link className="btn btn-lg btn-primary btn-lg-square back-to-top">
          <i class="bi bi-arrow-up"></i>
        </Link>
      </div>
    </div>
  );
}

export default About;
