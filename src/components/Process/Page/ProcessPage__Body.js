import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import ProcessPage__Section from './Sections/ProcessPage__Section';
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
const ProcessPage__Body = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ProcessPage__BodyQ {
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
          <div className="container pt-3 pb-5">
            <div className="py-3 px-5">
              <h2 className="mt-2 text-center">Optimize Every Step</h2>
              <hr className="divider my-4" />
            </div>
            <div className="container col-md-8 py-3 my-2 text-white bg-info rounded drop-shadow">
              <p className="m-3 mb-5 text-center drop-shadow">
                Learn about each phase:
              </p>
              <div className="row justify-content-around align-items-end mt-4">
                <Link
                  to="learning"
                  className="col-6 col-md-3 mb-5 text-center drop-shadow pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-75}
                >
                  <i className="fas fa-3x fa-handshake mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">Learning</span>
                </Link>
                <Link
                  to="diagnostic"
                  className="col-6 col-md-3 mb-5 text-center drop-shadow pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-75}
                >
                  <i className="fas fa-3x fa-stethoscope mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">Diagnostic</span>
                </Link>
                <Link
                  to="blueprint"
                  className="col-6 col-md-3 mb-5 text-center drop-shadow pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-75}
                >
                  <i className="fas fa-3x fa-pencil-ruler mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">Blueprint</span>
                </Link>
                <Link
                  to="design"
                  className="col-6 col-md-3 mb-5 text-center drop-shadow pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-75}
                >
                  <i className="fas fa-3x fa-palette mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">Design</span>
                </Link>
                <Link
                  to="dev"
                  className="col-6 col-md-3 mb-5 text-center drop-shadow pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-75}
                >
                  <i className="fab fa-3x fa-react mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">Development</span>
                </Link>
                <Link
                  to="seo"
                  className="col-6 col-md-3 mb-5 text-center drop-shadow pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-75}
                >
                  <i className="fas fa-3x fa-search-dollar mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">SEO</span>
                </Link>
                <Link
                  to="marketing"
                  className="col-6 col-md-3 mb-5 text-center drop-shadow pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-75}
                >
                  <i className="fas fa-3x fa-funnel-dollar mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">Marketing</span>
                </Link>
                <Link
                  to="refinement"
                  className="col-6 col-md-3 mb-5 text-center drop-shadow pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-75}
                >
                  <i className="fas fa-3x fa-sync-alt mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">Refinement</span>
                </Link>
              </div>
            </div>
          </div>
          <ProcessPage__Section className="page-section border-bottom border-secondary bg-img-process" />
        </div>
      </div>
    </BackgroundImage>
  );
};

export default ProcessPage__Body;
