import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import PricingSection__SeoServices from './Sections/PricingSection__SeoServices';
import PricingSection__WebsiteServices from './Sections/PricingSection__WebsiteServices';
import PricingSection__MarketingServices from './Sections/PricingSection__MarketingServices';
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
const PricingPage__Body = ({ className }) => {
  const data = useStaticQuery(graphql`
    query PricingPage__BodyQ {
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
              <h2 className="mt-2 text-center">
                Digital Marketing Service Prices
              </h2>
              <hr className="divider my-4" />
            </div>
            <div className="container col-md-8 py-3 my-2 text-white bg-info rounded drop-shadow">
              <p className="m-3 mb-5 text-center drop-shadow">
                Get more leads with these options:
              </p>
              <div className="row justify-content-around align-items-end mt-4">
                <Link
                  to="full-service"
                  className="col-6 col-md-3 mb-5 text-center drop-shadow pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-75}
                >
                  <i className="fas fa-3x fa-rocket mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">SEO Services</span>
                </Link>
                <Link
                  to="website-only"
                  className="col-6 col-md-3 mb-5 text-center drop-shadow pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-75}
                >
                  <i className="fas fa-3x fa-globe mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">Website Services</span>
                </Link>
                <Link
                  to="marketing-services"
                  className="col-6 col-md-3 mb-5 text-center drop-shadow pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-75}
                >
                  <i className="fas fa-3x fa-funnel-dollar mb-3 text-primary wiggle"></i>
                  <br />
                  <span className="text-white-link">Marketing Services</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mb-5 w-100">
            <PricingSection__SeoServices className="border rounded shadow bg-img-full-service-seo" />
          </div>
          <div className="mb-5 w-100">
            <PricingSection__WebsiteServices className="border rounded shadow bg-img-full-service-seo" />
          </div>
          <div className="mb-5 w-100">
            <PricingSection__MarketingServices className="border rounded shadow bg-img-full-service-seo" />
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default PricingPage__Body;
