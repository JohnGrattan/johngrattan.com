import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import ServicesPage__Section from '../Page/Sections/ServicesPage__Section';
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
const ServicesPage__Body = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ServicesPage__BodyQ {
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
      alt="John Grattan SEO & Web Design Services section background"
    >
      <div className="container">
        <div className="row justify-content-center align-items-center border bg-white shadow rounded position-sticky">
          <div className="container pt-3 pb-5">
            <div className="py-3 px-5">
              <h2 className="mt-2 text-center">
                Optimize Your Online Presence
              </h2>
              <hr className="divider my-4" />
            </div>
            <div className="container col-md-8 py-3 my-2 text-white bg-info rounded drop-shadow">
              <p className="m-3 mb-5 text-center drop-shadow">
                Learn about each service:
              </p>
              <div className="row justify-content-around align-items-end mt-4">
                <Link
                  to="seo-strategy"
                  className="col-6 col-md-3 mb-5 text-center drop-shadow pointer"
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
                  to="organic-seo"
                  className="col-6 col-md-3 mb-5 text-center drop-shadow pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-75}
                >
                  <i className="fas fa-3x fa-seedling mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">Organic SEO</span>
                </Link>
                <Link
                  to="local-seo"
                  className="col-6 col-md-3 mb-5 text-center drop-shadow pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-75}
                >
                  <i className="fas fa-3x fa-search-location mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">Local SEO</span>
                </Link>
                <Link
                  to="ppc-ads"
                  className="col-6 col-md-3 mb-5 text-center drop-shadow pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-75}
                >
                  <i className="fas fa-3x fa-mouse-pointer mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">PPC Ads</span>
                </Link>
                <Link
                  to="web-design"
                  className="col-6 col-md-3 mb-5 text-center drop-shadow pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-75}
                >
                  <i className="fas fa-3x fa-drafting-compass mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">Website Design</span>
                </Link>
                <Link
                  to="web-dev"
                  className="col-6 col-md-3 mb-5 text-center drop-shadow pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-75}
                >
                  <i className="fas fa-3x fa-laptop-code mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">Web Development</span>
                </Link>
                <Link
                  to="social-media"
                  className="col-6 col-md-3 mb-5 text-center drop-shadow pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-75}
                >
                  <i className="fas fa-3x fa-users mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">Social Media</span>
                </Link>
                <Link
                  to="email-marketing"
                  className="col-6 col-md-3 mb-5 text-center drop-shadow pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-75}
                >
                  <i className="fas fa-3x fa-envelope-open-text mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">Email Marketing</span>
                </Link>
              </div>
            </div>
          </div>
          <ServicesPage__Section className="page-section border-bottom border-secondary bg-img-services" />
        </div>
      </div>
    </BackgroundImage>
  );
};

export default ServicesPage__Body;
