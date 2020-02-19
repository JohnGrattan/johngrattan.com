import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import InterestedSectionContact from '../InterestedSectionContact/InterestedSectionContact';

import * as Scroll from 'react-scroll';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

// BG Query
const ContactSectionPage = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ContactSectionPageQ {
      texture: file(
        relativePath: { eq: "images/textures/gradient-squares.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const imageData = data.texture.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#fff`}
      alt="about John Grattan background"
    >
      <div className="container">
        <div className="row justify-content-center align-items-center border bg-white shadow rounded position-sticky">
          <div className="container py-3">
            <div className="py-3 px-5">
              <h2 className="mt-2 text-center">
                Interested in Digital Marketing Services?
              </h2>
              <hr className="divider my-4" />
            </div>
            <div className="container col-md-8 py-3 my-2 text-white bg-info rounded drop-shadow">
              <p className="m-3 text-center drop-shadow text-primary font-weight-bold">
                Office Hours:
              </p>
              <p className="m-3 mb-5 text-center drop-shadow">
                Mon - Fri <span className="text-primary">|</span> 9 am - 5 pm ET
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
                  <span className="text-white-link">
                    contact@johngrattan.com
                  </span>
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
          <InterestedSectionContact className="container my-5 mx-3 border rounded shadow bg-img-gray-gradient" />
        </div>
      </div>
    </BackgroundImage>
  );
};

export default ContactSectionPage;
