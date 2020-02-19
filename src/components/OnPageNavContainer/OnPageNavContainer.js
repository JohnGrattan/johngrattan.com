import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const OnPageNavContainer = ({ hTwo }) => {
  // const solid = 'btn btn-primary btn-xl shadow';
  // const outline = 'btn btn-outline-light btn-xl-outline drop-shadow-dark';

  return (
    <div className="container py-3">
      <div className="py-3 px-5">
        <h2 className="mt-2 text-center">{hTwo}</h2>
        <hr className="divider my-4" />
      </div>
      <div className="container col-md-8 py-3 my-2 text-white bg-info rounded drop-shadow">
        <p className="m-3 text-center drop-shadow text-primary font-weight-bold">
          Office Hours:
        </p>
        <p className="m-3 mb-5 text-center drop-shadow">
          Monday - Friday <span className="text-primary">|</span> 9:00 am - 5:00
          pm
        </p>

        <div className="row justify-content-around align-items-end mt-4">
          <a
            href="tel:+14012169868"
            className="col-md-4 mb-5 text-center drop-shadow pointer no-decoration"
          >
            <i className="fas fa-3x fa-phone mb-3 text-primary wiggle"></i>
            <br />
            <span className="text-white-link">(401) 216-9868</span>
          </a>
          <a
            href="mailto:contact@johngrattan.com?Subject=Important%20Email%20From%20Website"
            target="_blank"
            className="col-md-4 mb-5 text-center drop-shadow pointer no-decoration"
          >
            <i className="fas fa-3x fa-envelope mb-3 text-primary wiggle"></i>
            <br />
            <span className="text-white-link">contact@johngrattan.com</span>
          </a>
          <Link
            to="footer-contact-form"
            className="col-md-4 mb-5 text-center drop-shadow pointer no-decoration"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-75}
          >
            <i className="fab fa-3x fa-wpforms mb-3 text-primary wiggle"></i>
            <br />
            <span className="text-white-link">Contact Form</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

// OnPageNavContainer.defaultProps = {
//   btnlink: `/`,
//   btnlabel: `Click Here`,
//   btnsolid: true,
// };

// OnPageNavContainer.propTypes = {
//   btnlink: PropTypes.string,
//   btnlabel: PropTypes.string,
//   btnsolid: PropTypes.bool,
// };

export default OnPageNavContainer;
