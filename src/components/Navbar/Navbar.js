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
                  items={['about', 'solutions', 'portfolio', 'contact']}
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
                    <Link className="nav-link text-uppercase" to="/solutions">
                      Solutions
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
                    <Link
                      className="nav-link text-uppercase"
                      to="/case-studies"
                    >
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
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}
