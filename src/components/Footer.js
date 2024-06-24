import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>

<div
          className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-3 col-md-6">
                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                  Company
                </h4>
                <Link className="btn btn-link">
                  About Us
                </Link>
                <Link className="btn btn-link" href="">
                  Contact Us
                </Link>
              
                <Link className="btn btn-link" href="">
                  Privacy Policy
                </Link>
                <Link className="btn btn-link" href="">
                  Terms & Condition
                </Link>  
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
                  <Link className="btn btn-outline-light btn-social" href="">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="btn btn-outline-light btn-social" href="">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="btn btn-outline-light btn-social" href="">
                    <i className="fab fa-youtube"></i>
                  </Link>
                  <Link className="btn btn-outline-light btn-social" href="">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
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
                  <Link className="border-bottom" href="#">
                    Tifin Smart
                  </Link>
                 
                  <br />
                  <br />
                  <Link
                    className="border-bottom"
                    href="https://themewagon.com"
                    target="_blank"
                  >
                    ThemeWagon
                  </Link>
                </div>
                <div className="col-md-6 text-center text-md-end">
                  <div className="footer-menu">
                    <Link href="">Home</Link>
                    <Link href="">Cookies</Link>
                    <Link href="">Help</Link>
                    <Link href="">FQAs</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


    </div>
  )
}

export default Footer