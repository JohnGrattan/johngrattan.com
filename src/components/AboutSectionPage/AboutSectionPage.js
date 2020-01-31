import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import BackgroundSectionAbout from '../BackgroundSectionAbout/BackgroundSectionAbout';
import EducationSectionAbout from '../EducationSectionAbout/EducationSectionAbout';
import CommunitySectionAbout from '../CommunitySectionAbout/CommunitySectionAbout';

import { Card, ListGroup, ListGroupItem, Table } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';

// BG Query
const AboutSectionPage = ({ className }) => {
  const data = useStaticQuery(graphql`
    query AboutSectionPageQ {
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
          {/* Pricing Structures Container */}
          <div className="container py-3">
            <div className="py-3 px-5">
              <h2 className="mt-2 text-center">Who is John Grattan?</h2>
              <hr className="divider my-4" />
            </div>
            {/* Options Overview Container */}
            <div
              id="choices"
              className="container col-md-8 py-3 my-2 text-white bg-info drop-shadow"
            >
              <p className="m-3 mb-5 text-center drop-shadow">
                Get to know me:
              </p>
              <Scrollspy
                className="row justify-content-around align-items-end my-4"
                componentTag={'div'}
                items={['background', 'education', 'community']}
                rootEl={'#choices'}
                offset={-75}
              >
                <Link
                  to="/about/#background"
                  className="col-md-4 mb-5 mb-md-0 text-center text-white-link drop-shadow"
                >
                  <i className="fas fa-3x fa-address-card mb-3 text-primary"></i>
                  <br />
                  <span>Background</span>
                </Link>
                <Link
                  to="/about/#education"
                  className="col-md-4 mb-5 mb-md-0 text-center text-white-link drop-shadow"
                >
                  <i className="fas fa-3x fa-user-graduate mb-3 text-primary"></i>
                  <br />
                  <span>Education</span>
                </Link>
                <Link
                  to="/about/#community"
                  className="col-md-4 text-center text-white-link drop-shadow"
                >
                  <i className="fas fa-3x fa-university mb-3 text-primary"></i>
                  <br />
                  <span>Community</span>
                </Link>
              </Scrollspy>
            </div>
          </div>
          <BackgroundSectionAbout className="container my-5 mx-3 border rounded shadow bg-img-gray-gradient" />
          <EducationSectionAbout className="container my-5 mx-3 border rounded shadow bg-img-gray-gradient" />
          <CommunitySectionAbout className="container my-5 mx-3 border rounded shadow bg-img-gray-gradient" />
        </div>
      </div>
    </BackgroundImage>
  );
};

export default AboutSectionPage;
