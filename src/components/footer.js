import React from 'react';
import { Link } from 'gatsby';
import Scrollspy from 'react-scrollspy';
import { Navbar, Nav } from 'react-bootstrap';
import Scroller from './scroller';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
  }

  render() {
    return (
      <footer>
        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Let's Get In Touch!</h2>
                <hr className="divider my-4" />
                <p className="text-muted mb-5">
                  Ready to start your next project with us? Give us a call or
                  send us an email and we will get back to you as soon as
                  possible!
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                <div>+1 (774) 269-3758</div>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                <a className="d-block" href="mailto:contact@johngrattan.com">
                  contact@johngrattan.com
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-purple">
          <div className=" container py-5">
            <div className="small text-center text-white">
              <p>Copyright &copy; 2020 John Grattan</p>
              <p>
                Designed & Developed by <Link to="/">John Grattan</Link>
              </p>
            </div>
          </div>
        </section>
      </footer>
    );
  }
}
