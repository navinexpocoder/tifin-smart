import React from "react";
import Header from "./Header";
import AliceCarousel from "react-alice-carousel";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "react-alice-carousel/lib/alice-carousel.css";
import Footer from "./Footer";



function Home() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  const items1 = [
    <div class="testimonial-item bg-transparent border rounded p-4">
      <i class="fa fa-quote-left fa-2x text-primary pb-5"></i>
      <p>
        Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
        amet eirmod eos labore diam
      </p>
      <div class="d-flex align-items-center">
        <img
          class="img-fluid flex-shrink-0 rounded-circle"
          src="img/testimonial-1.jpg"
          style={{ width: "50px", height: "50px" }}
          alt=""
        />
        <div class="ps-3">
          <h5 class="mb-1">Client Name</h5>
          <small>Profession</small>
        </div>
      </div>
    </div>,
    <div class="testimonial-item bg-transparent border rounded p-4">
      <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
      <p>
        Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
        amet eirmod eos labore diam
      </p>
      <div class="d-flex align-items-center">
        <img
          className="img-fluid flex-shrink-0 rounded-circle"
          src="img/testimonial-2.jpg"
          style={{ width: "50px", height: "50px" }}
          alt=""
        />
        <div class="ps-3">
          <h5 class="mb-1">Client Name</h5>
          <small>Profession</small>
        </div>
      </div>
    </div>,
    <div class="testimonial-item bg-transparent border rounded p-4">
      <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
      <p>
        Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
        amet eirmods eos labore diam
      </p>
      <div class="d-flex align-items-center">
        <img
          className="img-fluid flex-shrink-0 rounded-circle"
          src="img/testimonial-3.jpg"
          style={{ width: "50px", height: "50px" }}
          alt=""
        />
        <div class="ps-3">
          <h5 class="mb-1">Client Name</h5>
          <small>Profession</small>
        </div>
      </div>
    </div>,
  ];

  return (
    <div>
      <div className="container-fuid bg-white p-0">
        {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
<div className="spinner-border text-primary"   style={{width:"3rem", height:"3rem"}} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div> */}

        <div className="container-fuid position-relative p-0">
          <Header />

          <div className="container-fluid py-5 bg-dark hero-header mb-5">
            <div className="container">
              <div className="row align-items-center g-5 py-5">
                <div className="col-lg-6 text-center text-lg-start">
                  <h1 className="display-3 text-white animated slideInLeft">
                    Enjoy Our
                    <br />
                    Delicious Meal
                  </h1>
                  <p className="text-white animated slideInLeft mb-4 pb-2">
                  Free delivery when you order healthy food.
                  </p>
                  <a
                    href="/"
                    className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft"
                  >
                    Order Now
                  </a>
                </div>
                <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                  <img className="img-fluid" src="img/hero1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid
         py-5">
          <div className="container">
            <div className="row g-4">
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    {/* <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>                    <i className="fa fa-3x fa-user-tie text-primary mb-4"></i> */}

<div className="pb-3">
                    <i className="bi bi-geo-alt-fill text-primary mb-4 fs-1"></i>
                    </div>

                    <h5>Tracking system</h5>
                    <p>
                      Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                      clita amet diam
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <i className="fa fa-3x fa-utensils text-primary mb-4"></i>
                    <h5>Quality Food</h5>
                    <p>
                      Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                      clita amet diam
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <i className="fa fa-3x fa-cart-plus text-primary mb-4"></i>
                    <h5>Online Order</h5>
                    <p>
                      Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                      clita amet diam
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item rounded pt-3">
                  <div className="p-4">

<div className="pb-3">
                    <i className="bi bi-thermometer-high text-primary mb-4 fs-1 "></i>
                    </div>

                    <h5>Food temperature</h5>
                    <p>
                      Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                      clita amet diam
                    </p>
                  </div>
                </div>
              </div>
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
                      alt=""
                    />
                  </div>
                  <div className="col-6 text-start">
                    <img
                      className="img-fluid rounded w-75 wow zoomIn"
                      data-wow-delay="0.3s"
                      src="img/A_1.jpeg"
                      style={{ marginTop: "25%" }}
                      alt=""
                    />
                  </div>
                  <div className="col-6 text-end">
                    <img
                      className="img-fluid rounded w-75 wow zoomIn"
                      data-wow-delay="0.5s"
                      src="img/A_3.webp"
                      alt=""
                    />
                  </div>
                  <div className="col-6 text-end">
                    <img
                      className="img-fluid rounded w-100 wow zoomIn"
                      data-wow-delay="0.7s"
                      src="img/A_5.png"
                      alt=""
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
                Tiffin Smart Services is all about making your life easier when it comes to food. We prepare tasty meals and deliver them right to your door. Our team of chefs creates a wide variety of dishes using fresh and high-quality ingredients. We understand that everyone has different tastes and dietary needs, so we make sure to offer options that suit everyone.
                </p>
                <p className="mb-4">
                Ordering from us is simple, and you can trust us to bring your meal on time. Whether you're a busy professional or a family looking for convenient and delicious food, Tiffin Smart Services is here to provide you with nutritious and yummy meals without any hassle. Let us take care of your meals so you can focus on enjoying them!
                </p>
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                    
                    
                    </div>
                  </div>
                              </div>
                <a className="btn btn-primary py-3 px-5 mt-2" href="/">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
                    <h1 className="mb-5">Most Popular Items</h1>
                </div>
                <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.1s">
                    <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                        <li className="nav-item">
                            <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                                <i className="fa fa-coffee fa-2x text-primary"></i>
                                <div className="ps-3">
                                    <small className="text-body">Popular</small>
                                    <h6 className="mt-n1 mb-0">Breakfast</h6>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                                <i className="fa fa-hamburger fa-2x text-primary"></i>
                                <div className="ps-3">
                                    <small className="text-body">Special</small>
                                    <h6 className="mt-n1 mb-0">Lunch</h6>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                                <i className="fa fa-utensils fa-2x text-primary"></i>
                                <div className="ps-3">
                                    <small className="text-body">Lovely</small>
                                    <h6 className="mt-n1 mb-0">Dinner</h6>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                    <div id="tab-1" className="tab-pane fade show p-0 active">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/B_1.png"
                          alt=""
                          style={{ width: "80px" }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Poha</span>
                            {/* <span className="text-primary">$115</span> */}
                          </h5>
                          {/* <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/B_2.png"
                          alt=""
                          style={{ width: "80px" }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Vegetable Upma</span>
                            {/* <span className="text-primary">$115</span>   */}
                          </h5>
                          {/* <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/B_3.png"
                          alt=""
                          style={{ width: "80px" }}
                        />
                  4      <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Paratha</span>
                            {/* <span className="text-primary">$115</span> */}
                          </h5>
                          {/* <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/B_4.png"
                          alt=""
                          style={{ width: "80px" }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Veg Sandwich</span>
                            {/* <span className="text-primary">$115</span> */}
                          </h5>
                          {/* <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/B_5.png"
                          alt=""
                          style={{ width: "80px" }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Vegetable Cheela</span>
                            {/* <span className="text-primary">$115</span> */}
                          </h5>
                          {/* <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/B_6.png"
                          alt=""
                          style={{ width: "80px" }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Dosa</span>
                            {/* <span className="text-primary">$115</span> */}
                          </h5>
                          {/* <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/B_7.png"
                          alt=""
                          style={{ width: "80px" }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>fruit salad</span>
                            {/* <span className="text-primary">$115</span> */}
                          </h5>
                          {/* <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/B_8.jpg"
                          alt=""
                          style={{ width: "80px" }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>french fries</span>
                            {/* <span className="text-primary">$115</span> */}
                          </h5>
                          {/* <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-2" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu_1.png"
                          alt=""
                          style={{ width: "80px" }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chapati</span>
                            {/* <span className="text-primary">$115</span> */}
                          </h5>
                          {/* <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu_2.png"
                          alt=""
                          style={{ width: "80px" }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Kaju Paneer</span>
                            {/* <span className="text-primary">$115</span> */}
                          </h5>
                          {/* <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu_3.png"
                          alt=""
                          style={{ width: "80px" }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Paratha</span>
                            {/* <span className="text-primary">$115</span> */}
                          </h5>
                          {/* <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu_4.jpg"
                          alt=""
                          style={{ width: "80px" }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Puri</span>
                            {/* <span className="text-primary">$115</span> */}
                          </h5>
                          {/* <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu_5.png"
                          alt=""
                          style={{ width: "80px" }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Rajma chaval</span>
                            {/* <span className="text-primary">$115</span> */}
                          </h5>
                          {/* <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu_6.png"
                          alt=""
                          style={{ width: "80px" }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Aloo Gobi</span>
                            {/* <span className="text-primary">$115</span> */}
                          </h5>
                          {/* <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu_7.png"
                          alt=""
                          style={{ width: "80px" }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chole bhature</span>
                            {/* <span className="text-primary">$115</span> */}
                          </h5>
                          {/* <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu_8.png"
                          alt=""
                          style={{ width: "80px" }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Rasgulla</span>
                            {/* <span className="text-primary">$115</span> */}
                          </h5>
                          {/* <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small> */}
                        </div>
                      </div>
                    </div>
                </div>
                </div>
                <div id="tab-3" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu_1.png"
                          alt=""
                          style={{ width: "80px" }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chapati</span>
                            {/* <span className="text-primary">$115</span> */}
                          </h5>
                          {/* <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu_2.png"
                          alt=""
                          style={{ width: "80px" }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Kaju Paneer</span>
                            {/* <span className="text-primary">$115</span> */}
                          </h5>
                          {/* <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu_3.png"
                          alt=""
                          style={{ width: "80px" }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Paratha</span>
                            {/* <span className="text-primary">$115</span> */}
                          </h5>
                          {/* <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu_4.jpg"
                          alt=""
                          style={{ width: "80px" }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Puri</span>
                            {/* <span className="text-primary">$115</span> */}
                          </h5>
                          {/* <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu_5.png"
                          alt=""
                          style={{ width: "80px" }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Rajma chaval</span>
                            {/* <span className="text-primary">$115</span> */}
                          </h5>
                          {/* <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu_6.png"
                          alt=""
                          style={{ width: "80px" }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Aloo Gobi</span>
                            {/* <span className="text-primary">$115</span> */}
                          </h5>
                          {/* <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu_7.png"
                          alt=""
                          style={{ width: "80px" }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chole bhature</span>
                            {/* <span className="text-primary">$115</span> */}
                          </h5>
                          {/* <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu_8.png"
                          alt=""
                          style={{ width: "80px" }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Rasgulla</span>
                            {/* <span className="text-primary">$115</span> */}
                          </h5>
                          {/* <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small> */}
                        </div>
                      </div>
                    </div>
                </div>
                </div>
              </div>
                </div>
            </div>
        </div>
        
    
        <div
          className="modal fade"
          id="videoModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content rounded-0">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Youtube Video
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="ratio ratio-16x9">
                  <iframe
                  title="1"
                    className="embed-responsive-item"
                    src=""
                    id="video"
                    allowFullScreen
                    allowscriptaccess="always"
                    allow="autoplay"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container-fluid pt-5 pb-3">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">
                Team Members
              </h5>
              <h1 className="mb-5">Our Master Chefs</h1>
            </div>
            <div className="row g-4">
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="team-item text-center rounded overflow-hidden">
                  <div className="rounded-circle overflow-hidden m-4">
                    <img className="img-fluid" src="img/team-1.jpg" alt="" />
                  </div>
                  <h5 className="mb-0">Full Name</h5>
                  <small>Designation</small>
                  <div className="d-flex justify-content-center mt-3">
                    <a className="btn btn-square btn-primary mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square btn-primary mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square btn-primary mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="team-item text-center rounded overflow-hidden">
                  <div className="rounded-circle overflow-hidden m-4">
                    <img className="img-fluid" src="img/team-2.jpg" alt="" />
                  </div>
                  <h5 className="mb-0">Full Name</h5>
                  <small>Designation</small>
                  <div className="d-flex justify-content-center mt-3">
                    <a className="btn btn-square btn-primary mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square btn-primary mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square btn-primary mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="team-item text-center rounded overflow-hidden">
                  <div className="rounded-circle overflow-hidden m-4">
                    <img className="img-fluid" src="img/team-3.jpg" alt="" />
                  </div>
                  <h5 className="mb-0">Full Name</h5>
                  <small>Designation</small>
                  <div className="d-flex justify-content-center mt-3">
                    <a className="btn btn-square btn-primary mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square btn-primary mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square btn-primary mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="team-item text-center rounded overflow-hidden">
                  <div className="rounded-circle overflow-hidden m-4">
                    <img className="img-fluid" src="img/team-4.jpg" alt="" />
                  </div>
                  <h5 className="mb-0">Full Name</h5>
                  <small>Designation</small>
                  <div className="d-flex justify-content-center mt-3">
                    <a className="btn btn-square btn-primary mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square btn-primary mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square btn-primary mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="text-center">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">
                Testimonial
              </h5>
              <h1 className="mb-5">Our Clients Say!!!</h1>
            </div>

            <AliceCarousel
              autoPlay
              autoPlayStrategy="none"
              autoPlayInterval={3000}
              animationDuration={3000}
              infinite
              mouseTracking
              items={items1}
              height="50vh"
              responsive={responsive}
              controlsStrategy="alternate"
            />
          </div>
        </div>

        {/* <div
          className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-3 col-md-6">
                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                  Company
                </h4>
                <a className="btn btn-link" href="">
                  About Us
                </a>
                <a className="btn btn-link" href="">
                  Contact Us
                </a>
              
                <a className="btn btn-link" href="">
                  Privacy Policy
                </a>
                <a className="btn btn-link" href="">
                  Terms & Condition
                </a>  
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                  Contact
                </h4>
                <p className="mb-2">
                  <i className="fa fa-map-marker-alt me-3"></i>Indore , (M.P)
                </p>
                <p className="mb-2">
                </p>
                <p className="mb-2">
                </p>
                <div className="d-flex pt-2">
                  <a className="btn btn-outline-light btn-social" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-outline-light btn-social" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-outline-light btn-social" href="">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a className="btn btn-outline-light btn-social" href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                  Opening
                </h4>
                <h5 className="text-light fw-normal">Lunch  - Dinner</h5>
                <p>8:00AM - 2:30PM</p>
                <p>6:00 PM - 11:30PM</p>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                  Newsletter
                </h4>
                <p></p>
                <div
                  className="position-relative mx-auto"
                  style={{ maxwidth: "400px" }}
                >
                  <input
                    className="form-control border-primary w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Your email"
                  />
                  <button
                    type="button"
                    className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                  >
                    SignUp
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  &copy;{" "}
                  <a className="border-bottom" href="#">
                    Tifin Smart
                  </a>
                 
                  <br />
                  <br />
                  <a
                    className="border-bottom"
                    href="https://themewagon.com"
                    target="_blank"
                  >
                    ThemeWagon
                  </a>
                </div>
                <div className="col-md-6 text-center text-md-end">
                  <div className="footer-menu">
                    <a href="">Home</a>
                    <a href="">Cookies</a>
                    <a href="">Help</a>
                    <a href="">FQAs</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        
<Footer/>
        <a
          href="/#"
          className="btn btn-lg btn-primary btn-lg-square back-to-top"
        >
          <i className="bi bi-arrow-up"></i>
        </a>
      </div>
    </div>
  );
}

export default Home;
