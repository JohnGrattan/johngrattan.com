import React from 'react';
import { Link } from 'gatsby';
import { Navbar, Nav } from 'react-bootstrap';

export default class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar
          className="navbar navbar-expand-lg navbar-light fixed-top py-3"
          id="mainNav"
          expand="lg"
          collapseOnSelect={true}
        >
          <div className="container">
            <Link
              to="/"
              className="navbar-brand js-scroll-trigger text-secondary drop-shadow-dark text-uppercase"
            >
              <span className="border border-primary rounded p-2">JG</span> John
              Grattan
            </Link>
            <Navbar.Toggle
              aria-label="Toggle navigation"
              aria-controls="navbarResponsive"
            >
              <span> </span>
              <span> </span>
              <span> </span>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarResponsive" aria-expanded="false">
              <Nav className="navbar-nav ml-auto mt-2 my-lg-0">
                <li className="nav-item my-auto d-none d-lg-inline">
                  <Link className="nav-link text-uppercase" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item my-auto d-none d-lg-inline">
                  <Link className="nav-link text-uppercase" to="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item my-auto d-none d-lg-inline">
                  <Link className="nav-link text-uppercase" to="/process">
                    Process
                  </Link>
                </li>
                <li className="nav-item my-auto d-none d-lg-inline">
                  <Link className="nav-link text-uppercase" to="/prices">
                    Prices
                  </Link>
                </li>
                <li className="nav-item my-auto d-none d-lg-inline">
                  <Link className="nav-link text-uppercase" to="/case-studies">
                    Case Studies
                  </Link>
                </li>
                <li className="nav-item my-auto d-none d-lg-inline">
                  <Link className="nav-link text-uppercase" to="/seo-blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item my-auto d-none d-lg-inline">
                  <Link
                    className="nav-link text-uppercase text-dark py-2 ml-4 border border-white bg-primary rounded-pill drop-shadow-dark"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item mx-2 d-lg-none">
                  <div className="row">
                    <div className="col-6 mt-4 py-3 bg-info container justify-content-center align-items-center">
                      <Link
                        className="nav-button text-uppercase drop-shadow-dark"
                        to="/about"
                      >
                        About
                      </Link>
                    </div>
                    <div className="col-6 mt-4 py-3 bg-dark container justify-content-center align-items-center">
                      <Link
                        className="nav-button text-uppercase drop-shadow-dark"
                        to="/services"
                      >
                        Services
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item mx-2 d-lg-none">
                  <div className="row">
                    <div className="col-6 mt-4 py-3 bg-dark container justify-content-center align-items-center">
                      <Link
                        className="nav-button text-uppercase drop-shadow-dark"
                        to="/process"
                      >
                        Process
                      </Link>
                    </div>
                    <div className="col-6 mt-4 py-3 bg-info container justify-content-center align-items-center">
                      <Link
                        className="nav-button text-uppercase drop-shadow-dark"
                        to="/pricing"
                      >
                        Pricing
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item mx-2 d-lg-none">
                  <div className="row">
                    <div className="col-6 mt-4 py-3 bg-info container justify-content-center align-items-center">
                      <Link
                        className="nav-button text-uppercase drop-shadow-dark"
                        to="/case-studies"
                      >
                        Case Studies
                      </Link>
                    </div>
                    <div className="col-6 mt-4 py-3 bg-dark container justify-content-center align-items-center">
                      <Link
                        className="nav-button text-uppercase drop-shadow-dark"
                        to="/seo-blog"
                      >
                        Blog
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item mx-2 d-lg-none">
                  <div className="row">
                    <div className="col-12 mt-4 py-3 bg-primary container justify-content-center align-items-center">
                      <Link
                        className="nav-button text-uppercase text-dark"
                        to="/contact"
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item d-lg-none mx-2">
                  <div className="row">
                    <div className="col-6 py-3 bg-dark container justify-content-center align-items-center">
                      <a
                        className="nav-button text-uppercase drop-shadow-dark"
                        href="tel:+14012169868"
                      >
                        <i className="fas fa-phone mr-3 text-primary"></i>Call
                      </a>
                    </div>
                    <div className="col-6 py-3 bg-info container justify-content-center align-items-center">
                      <a
                        className="nav-button text-uppercase drop-shadow-dark"
                        href="mailto:contact@johngrattan.com?Subject=Important%20Email%20From%20Website"
                        target="_blank"
                      >
                        <i className="fas fa-envelope mr-3 text-primary"></i>
                        Email
                      </a>
                    </div>
                  </div>
                </li>
                <div className="d-lg-none mt-4 mb-1 text-center text-white">
                  <a href="#">
                    <i className="fab fa-2x fa-facebook px-2"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-2x fa-instagram px-2"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-2x fa-twitter px-2"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-2x fa-youtube px-2"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-2x fa-linkedin px-2"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-2x fa-github px-2"></i>
                  </a>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}
