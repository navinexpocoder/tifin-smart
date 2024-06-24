import React from "react";

function Header() {
  return (
    <div>
      <div class="container-fluid position-relative p-0">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-4 px-lg-5 py-2 py-lg-0">
          <a href="/" className="navbar-brand p-0">
            <img src="img/logo.png" alt="Logo" />
          </a>
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            data-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 pe-4">
              <a href="/" className="nav-item nav-link active">
                Home
              </a>
              <a href="/about" className="nav-item nav-link">
                About
              </a>
              <a href="/services" className="nav-item nav-link">
                Service
              </a>
              <a href="/menu" className="nav-item nav-link">
                Menu
              </a>

              <a href="/contect" className="nav-item nav-link">
                Contact
              </a>
            </div>
            <a href="/testimonial" className="btn btn-primary py-2 px-4">
              Login
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
