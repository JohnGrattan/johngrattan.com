import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import BackgroundSectionAbout from '../BackgroundSectionAbout/BackgroundSectionAbout';
import EducationSectionAbout from '../EducationSectionAbout/EducationSectionAbout';
import CommunitySectionAbout from '../CommunitySectionAbout/CommunitySectionAbout';
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
const ServicesSectionPage = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ServicesSectionPageQ {
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
                SEO & Web Design Services <br />
                for Small Business
              </h2>
              <hr className="divider my-4" />
            </div>
            <div className="container col-md-8 py-3 my-2 text-white bg-info drop-shadow">
              <p className="m-3 mb-5 text-center drop-shadow">
                Get to know me:
              </p>
              <div className="row justify-content-around align-items-end my-4">
                <Link
                  to="background"
                  className="col-md-3 mb-5 mb-md-0 text-center drop-shadow pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-75}
                >
                  <i className="fas fa-3x fa-chess mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">SEO Strategy</span>
                </Link>
                <Link
                  to="background"
                  className="col-md-3 mb-5 mb-md-0 text-center drop-shadow pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-75}
                >
                  <i className="fas fa-3x fa-drafting-compass mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">Local SEO</span>
                </Link>
                <Link
                  to="education"
                  className="col-md-3 mb-5 mb-md-0 text-center drop-shadow pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-75}
                >
                  <i className="fas fa-3x fa-laptop-code mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">Web Design</span>
                </Link>
                <Link
                  to="community"
                  className="col-md-3 mb-5 mb-md-0 text-center drop-shadow pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-75}
                >
                  <i className="fas fa-3x fa-chart-line mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">Web Development</span>
                </Link>
              </div>
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

export default ServicesSectionPage;
