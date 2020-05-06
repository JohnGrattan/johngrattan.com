import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import AboutSection__Background from './Sections/AboutSection__Background';
import AboutSection__Education from './Sections/AboutSection__Education';
import AboutSection__Community from './Sections/AboutSection__Community';
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
const AboutPage__Body = ({ className }) => {
  const data = useStaticQuery(graphql`
    query AboutPage__BodyQ {
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
      alt="About John Grattan SEO & Web Design background design"
    >
      <div className="container">
        <div className="row justify-content-center align-items-center border bg-white shadow rounded position-sticky">
          <div className="container py-3">
            <div className="py-3 px-5">
              <h2 className="mt-2 text-center">Who is John Grattan??</h2>
              <hr className="divider my-4" />
            </div>
            <div className="container col-md-8 py-3 my-2 text-white bg-info drop-shadow">
              <p className="m-3 mb-5 text-center drop-shadow">
                Get to know me:
              </p>
              <div className="row justify-content-around align-items-end my-4">
                <Link
                  to="background"
                  className="col-md-4 mb-5 mb-md-0 text-center drop-shadow pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-75}
                >
                  <i className="fas fa-3x fa-address-card mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">Background</span>
                </Link>
                <Link
                  to="education"
                  className="col-md-4 mb-5 mb-md-0 text-center drop-shadow pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-75}
                >
                  <i className="fas fa-3x fa-user-graduate mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">Education</span>
                </Link>
                <Link
                  to="community"
                  className="col-md-4 mb-5 mb-md-0 text-center drop-shadow pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-75}
                >
                  <i className="fas fa-3x fa-handshake mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">Community</span>
                </Link>
              </div>
            </div>
          </div>
          <AboutSection__Background className="container my-5 mx-3 border rounded shadow bg-img-gray-gradient" />
          <AboutSection__Education className="container my-5 mx-3 border rounded shadow bg-img-gray-gradient" />
          <AboutSection__Community className="container my-5 mx-3 border rounded shadow bg-img-gray-gradient" />
        </div>
      </div>
    </BackgroundImage>
  );
};

export default AboutPage__Body;
