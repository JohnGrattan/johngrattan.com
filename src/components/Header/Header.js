import React from 'react';
import { Link } from 'gatsby';
import Scrollspy from 'react-scrollspy';
import { Navbar, Nav } from 'react-bootstrap';
import Scroller from '../scroller';

import Button from '../Button/Button';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
  }

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
            <Navbar.Toggle aria-controls="navbarResponsive" />
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav ml-auto my-2 my-lg-0 drop-shadow-dark">
                <Scrollspy
                  className="navbar-nav"
                  items={['about', 'services', 'portfolio', 'contact']}
                  currentClassName="active"
                  rootEl={'#mainNav'}
                  offset={-75}
                >
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
                    <Link className="nav-link text-uppercase" to="/portfolio">
                      Portfolio
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-uppercase" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-uppercase" to="/contact">
                      Contact
                    </Link>
                  </li>
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h2 className="text-white font-weight-bold border border-primary rounded p-sm-5 p-3 drop-shadow-dark text-lg">
                  Rank your website.
                  <span className="d-block">
                    Beat your <span className="text-break">competitors</span>
                  </span>
                </h2>
              </div>
              <div className="col-lg-8 align-self-baseline mt-3 drop-shadow-dark">
                <p className="text-white font-weight-light mb-5">
                  Showcase your industry expertise to{' '}
                  <strong className="text-secondary">build an audience</strong>{' '}
                  and <strong className="text-secondary">drive traffic</strong>.
                  <span className="d-block mt-2">
                    Establish trust as a valuable source and{' '}
                    <strong className="text-secondary">convert leads</strong> to{' '}
                    <strong className="text-secondary">paying customers</strong>
                    .
                  </span>
                </p>
                <Button
                  btnlink="/contact"
                  btnlabel="Contact Me"
                  btnsolid={true}
                />
                <div className="d-inline-flex ml-4 hide-xs">
                  <Button
                    btnlink="/process"
                    btnlabel="Learn How"
                    btnsolid={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
