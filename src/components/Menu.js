import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Menu() {
  return (
    <div>


<div className="container-fluid bg-white p-0">
        {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div> */}


        <div className="container-fluid position-relative p-0">
       <Header/>

            <div className="container-fluid py-5 bg-dark hero-header mb-5">
                <div className="container text-center my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Food Menu</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Menu</li>
                        </ol>
                    </nav>
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


        

  <Footer/>


        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>

    </div>
  )
}

export default Menu