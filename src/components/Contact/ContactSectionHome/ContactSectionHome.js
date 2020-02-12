import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import FormContact from '../../FormContact/FormContact';

const ContactSectionHome = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ContactSectionHomeQ {
      masthead: file(
        relativePath: { eq: "images/bg-img-contact-section.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const imageData = data.masthead.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="div"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
      alt="full-service seo background"
    >
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center text-white">
          <h2 className="mt-0 drop-shadow-dark">Let's Talk Today</h2>
          <hr className="divider my-4 drop-shadow-dark" />
          <div className="my-5">
            <p>Have any questions or concerns?</p>
            <p>
              Feel free to call, email or fill out this form and you will be
              contacted shortly!
            </p>
          </div>
        </div>
      </div>
      <div className="container col-md-10 col-lg-8">
        <div className="text-white text-center row justify-content-around align-items-end mt-4">
          <a className="col-md-6 mb-5 pointer" href="tel:+14012169868">
            <i className="fas fa-phone fa-3x mb-3 text-secondary drop-shadow-dark wiggle"></i>
            <span className="d-block">(401) 216-9868</span>
          </a>

          <a
            className="col-md-6 mb-5 pointer"
            href="mailto:contact@johngrattan.com?Subject=Important%20Email%20From%20Website"
            target="_blank"
          >
            <i className="fas fa-envelope fa-3x mb-3 text-secondary drop-shadow-dark wiggle"></i>
            <span className="d-block">contact@johngrattan.com</span>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="container col-md-8 px-0 my-5">
          <FormContact formname="form-contact-homepage" />
        </div>
      </div>
    </BackgroundImage>
  );
};

export default ContactSectionHome;
