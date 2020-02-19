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
            {/* <button
              className="navbar-toggler collapsed"
              type="button"
              aria-controls="navbarResponsive"
              aria-label="Toggle navigation"
            >
              <span> </span>
              <span> </span>
              <span> </span>
            </button> */}
            <Navbar.Collapse id="navbarResponsive" aria-expanded="false">
              <Nav className="navbar-nav ml-auto my-2 my-lg-0">
                <li className="nav-item">
                  <Link className="nav-link text-uppercase" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-uppercase" to="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-uppercase" to="/process">
                    Process
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-uppercase" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-uppercase" to="/case-studies">
                    Case Studies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-uppercase" to="/seo-blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-uppercase" to="/contact">
                    Contact
                  </Link>
                </li>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}
