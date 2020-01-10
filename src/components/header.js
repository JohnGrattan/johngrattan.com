import React from 'react';
import { Link } from 'gatsby';
import Scrollspy from 'react-scrollspy';
import { Navbar, Nav } from 'react-bootstrap';
import Scroller from './scroller';

import ImgJgGreen from './image-jg-headshot-green';

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
                    <Nav.Link
                      className={'js-scroll-trigger'}
                      href="#about"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      About
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link
                      className={'js-scroll-trigger'}
                      href="#services"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      Services
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link
                      className={'js-scroll-trigger'}
                      href="#portfolio"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      Portfolio
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link
                      className={'js-scroll-trigger'}
                      href="#portfolio"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      Blog
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link
                      className={'js-scroll-trigger'}
                      href="#contact"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      Contact Me
                    </Nav.Link>
                  </li>
                  {/* <li className="nav-item">
                    <Nav.Link
                      className={
                        'js-scroll-trigger btn btn-primary btn-nav p-lg-3 ml-lg-5 shadow text-uppercase'
                      }
                      href="#contact"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      Contact Me
                    </Nav.Link>
                  </li> */}
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h1 className="text-uppercase text-white font-weight-bold border border-primary rounded p-sm-5 p-3 drop-shadow-dark">
                  Rank your website.
                  <span className="d-block">
                    Beat your <span className="text-break">competitors</span>
                  </span>
                </h1>
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
                <a
                  className="btn btn-primary btn-xl js-scroll-trigger shadow text-purple"
                  href="#contact"
                  onClick={Scroller.handleAnchorScroll}
                >
                  Contact Me
                </a>
                <a
                  className="btn btn-outline-light btn-xl-outline js-scroll-trigger ml-4 hide-xs drop-shadow-dark"
                  href="#about"
                  onClick={Scroller.handleAnchorScroll}
                >
                  Learn How
                </a>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
