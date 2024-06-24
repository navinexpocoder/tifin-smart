/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import React from 'react'
import Header from './Header'
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";


function Testimonial() {

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
      };
        const items1 = [
            <div class="testimonial-item bg-transparent border rounded p-4">
            <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
            <div class="d-flex align-items-center">
                <img class="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg" style={{width: "50px", height: "50px"}}/>
                <div class="ps-3">
                    <h5 class="mb-1">Client Name</h5>
                    <small>Profession</small>
                </div>
            </div>
        </div>,
        <div class="testimonial-item bg-transparent border rounded p-4">
            <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
            <div class="d-flex align-items-center">
                <img class="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" style={{width: "50px", height: "50px"}}/>
                <div class="ps-3">
                    <h5 class="mb-1">Client Name</h5>
                    <small>Profession</small>
                </div>
            </div>
        </div>,
        <div class="testimonial-item bg-transparent border rounded p-4">
            <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmods eos labore diam</p>
            <div class="d-flex align-items-center">
                <img class="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg" style={{width: "50px", height: "50px"}}/>
                <div class="ps-3">
                    <h5 class="mb-1">Client Name</h5>
                    <small>Profession</small>
                </div>
            </div>
        </div>,
          ];


  return (
    <div>
 <div class="container-fluid bg-white p-0">
        {/* <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style={{width: "3rem", height: "3rem"}} role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
 */}   

        <div class="container-fluid position-relative p-0">
            <Header/>

            <div class="container-fluid py-5 bg-dark hero-header mb-5">
                <div class="container text-center my-5 pt-5 pb-4">
                    <h1 class="display-3 text-white mb-3 animated slideInDown">Testimonial</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center text-uppercase">
                            <li class="breadcrumb-item">Home</li>
                            <li class="breadcrumb-item">Pages</li>
                            <li class="breadcrumb-item text-white active" aria-current="page">Testimonial</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>


        <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container">
                <div class="text-center">
                    <h5 class="section-title ff-secondary text-center text-primary fw-normal">Testimonial</h5>
                    <h1 class="mb-5">Our Clients Say!!!</h1>
                </div>
                <div class="owl-carousel testimonial-carousel">
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
        </div>
        

        <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
                        <Link class="btn btn-link" href="">Reservation</Link>
                        <Link class="btn btn-link" href="">Contact Us</Link>
                        <Link class="btn btn-link" href="">About Us</Link>
                        <Link class="btn btn-link" href="">Privacy Policy</Link>
                        <Link class="btn btn-link" href="">Terms & Condition</Link>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                        <div class="d-flex pt-2">
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Opening</h4>
                        <h5 class="text-light fw-normal">Monday - Saturday</h5>
                        <p>09AM - 09PM</p>
                        <h5 class="text-light fw-normal">Sunday</h5>
                        <p>10AM - 08PM</p>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Newsletter</h4>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div class="position-relative mx-auto" style={{maxwidth: "400px"}}>
                            <input class="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                            <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a class="border-bottom" href="#">Your Site Name</a>, All Right Reserved. 
							
							Designed By <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a><br/><br/>
                            Distributed By <a class="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a>
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <div class="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
    </div>




    </div>
  )
}

export default Testimonial  