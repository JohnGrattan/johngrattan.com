import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import SeoStrategyPage__Section from '../Page/Section/SeoStrategyPage__Section';
// import OrganicSeoSectionServices from '../../Services/Subpages/OrganicSeoPage/Section/OrganicSeoSectionServices';
// import LocalSeoSectionServices from '../../Services/Subpages/LocalSeo/Section/LocalSeoSectionServices';
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
const SeoStrategyPage__Body = ({ className }) => {
  const data = useStaticQuery(graphql`
    query SeoStrategyPage__BodyQ {
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
      alt="John Grattan SEO & Web Design SEO Strategy section background"
    >
      <div className="container">
        <div className="row justify-content-center align-items-center border bg-white shadow rounded position-sticky">
          <div className="container py-3">
            <div className="py-3 px-5">
              <h2 className="mt-2 text-center">
                Optimize Your Online Presence
              </h2>
              <hr className="divider my-4" />
            </div>
            <div className="container col-md-8 py-3 my-2 text-white bg-info rounded drop-shadow">
              <p className="m-3 mb-5 text-center drop-shadow">
                Learn about my services:
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
                  to="local-seo"
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
                  to="local-seo"
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
                  to="community"
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
                  to="community"
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
                  to="community"
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
          <SeoStrategyPage__Section className="container my-5 mx-3 border rounded shadow bg-img-gray-gradient" />
          {/* <SeoStrategySectionServices className="container my-5 mx-3 border rounded shadow bg-img-gray-gradient" />
          <OrganicSeoSectionServices className="container my-5 mx-3 border rounded shadow bg-img-gray-gradient" />
          <LocalSeoSectionServices className="container my-5 mx-3 border rounded shadow bg-img-gray-gradient" /> */}
        </div>
      </div>
    </BackgroundImage>
  );
};

export default SeoStrategyPage__Body;
